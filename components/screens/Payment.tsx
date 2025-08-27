'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import PaymentSuccess from './PaymentSuccess';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { 
  CreditCard, 
  User, 
  Mail, 
  Phone, 
  Shield,
  CheckCircle,
  Calculator,
  DollarSign
} from 'lucide-react';

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

interface PaymentForm {
  cardHolderName: string;
  cardNumber: string;
  expireMonth: string;
  expireYear: string;
  cvc: string;
  amount: number;
  installment: number;
  customerInfo: CustomerInfo;
  productName: string;
}

interface InstallmentOption {
  installmentNumber: number;
  totalPrice: number;
  monthlyPrice: number;
  interestRate: number;
}

const Payment: React.FC = () => {
  const [formData, setFormData] = useState<PaymentForm>({
    cardHolderName: '',
    cardNumber: '',
    expireMonth: '',
    expireYear: '',
    cvc: '',
    amount: 1000, // Varsayılan tutar
    installment: 0, // 0 = taksitsiz
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: ''
    },
    productName: 'Yazılım Hizmeti'
  });

  const [installmentOptions, setInstallmentOptions] = useState<InstallmentOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentResult, setPaymentResult] = useState<any>(null);

  // Taksit seçeneklerini hesaplama
  useEffect(() => {
    const calculateInstallments = () => {
      const options: InstallmentOption[] = [];
      
      // Taksitsiz seçenek
      options.push({
        installmentNumber: 0,
        totalPrice: formData.amount,
        monthlyPrice: formData.amount,
        interestRate: 0
      });

      // Taksitli seçenekler: 2, 3, 6 ay (faizsiz)
      const installmentMonths = [2, 3, 6];
      installmentMonths.forEach(months => {
        const totalPrice = formData.amount; // Faiz kaldırıldı
        const monthlyPrice = totalPrice / months;
        
        options.push({
          installmentNumber: months,
          totalPrice: Math.round(totalPrice),
          monthlyPrice: Math.round(monthlyPrice),
          interestRate: 0 // Faiz oranı 0
        });
      });
      
      setInstallmentOptions(options);
    };

    calculateInstallments();
  }, [formData.amount]);

  // Kart numarasını formatlama
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  // Kart numarası değişikliği
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      cardNumber: formatted
    }));
  };

  // Form alanı değişikliği
  const handleInputChange = (field: string, value: string | number) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      if (parent === 'customerInfo') {
        setFormData(prev => ({
          ...prev,
          customerInfo: {
            ...prev.customerInfo,
            [child]: value as string
          }
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  // Taksit seçimi
  const handleInstallmentChange = (installment: number) => {
    setFormData(prev => ({
      ...prev,
      installment
    }));
  };

  // Form doğrulama
  const validateForm = (): boolean => {
    if (!formData.cardHolderName || !formData.cardNumber || !formData.expireMonth || 
        !formData.expireYear || !formData.cvc) {
      toast.error('Lütfen tüm kart bilgilerini doldurun');
      return false;
    }

    if (!formData.customerInfo.firstName || !formData.customerInfo.lastName || 
        !formData.customerInfo.email || !formData.customerInfo.phone || 
        !formData.customerInfo.address || !formData.customerInfo.city) {
      toast.error('Lütfen tüm müşteri bilgilerini doldurun');
      return false;
    }

    if (formData.cardNumber.replace(/\s/g, '').length < 16) {
      toast.error('Geçerli bir kart numarası girin');
      return false;
    }

    if (formData.amount < 100) {
      toast.error('Minimum tutar 100 ₺ olmalıdır');
      return false;
    }

    return true;
  };

  // Ödeme gönderme
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Ödeme başarıyla tamamlandı!');
        setPaymentResult(result);
        setPaymentSuccess(true);
      } else {
        toast.error(result.error || 'Ödeme işlemi başarısız');
      }
    } catch (error) {
      toast.error('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  // Seçili taksit bilgisi
  const selectedInstallment = installmentOptions.find(opt => opt.installmentNumber === formData.installment);

  // Eğer ödeme başarılıysa success sayfasını göster
  if (paymentSuccess) {
    return (
      <PaymentSuccess 
        paymentData={{
          amount: formData.amount,
          installment: formData.installment,
          customerInfo: formData.customerInfo,
          paymentId: paymentResult?.paymentId,
          transactionDate: new Date().toLocaleDateString('tr-TR')
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-900 dark:to-lime-900/20 pt-32 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-lime-400 dark:to-lime-500 bg-clip-text text-transparent mb-3">
            Güvenli Ödeme
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            iyzico ile güvenli ödeme yapın. Yazılım hizmetlerimiz için esnek taksit seçenekleri.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Sol Panel - Ödeme Formu */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardHeader className="bg-white dark:bg-slate-800 border-b border-slate-200/50 dark:border-slate-600/50">
                <CardTitle className="flex items-center justify-center gap-3 text-slate-800 dark:text-slate-200 text-center">
                  <div className="p-2 bg-blue-100 dark:bg-lime-900/50 rounded-xl">
                    <CreditCard className="w-5 h-5 text-blue-600 dark:text-lime-400" />
                  </div>
                  Ödeme Bilgileri
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Tutar Belirleme */}
                  <div className="space-y-3 p-4 bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-slate-700/30 dark:to-slate-600/30 rounded-2xl border border-blue-100/50 dark:border-slate-600/30">
                    <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <div className="p-1.5 bg-blue-100 dark:bg-lime-900/50 rounded-lg">
                        <Calculator className="w-4 h-4 text-blue-600 dark:text-lime-400" />
                      </div>
                      Ödeme Tutarı
                    </Label>
                    <div className="relative">
                      <Input
                        type="text"
                        value={formData.amount}
                        onChange={(e) => handleInputChange('amount', parseInt(e.target.value) || 0)}
                        placeholder="Ödeme tutarını girin (örn: 1000)"
                        className="text-sm font-semibold h-12 bg-white/70 dark:bg-slate-700/70 border-0 shadow-inner rounded-xl focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-lime-500/50 transition-all duration-300"
                        required
                      />
                      <span className="absolute right-4 top-3 text-slate-500 font-medium">₺</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Minimum tutar: 100 ₺
                    </p>
                  </div>

                  {/* Taksit Seçimi */}
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <div className="p-1.5 bg-blue-100 dark:bg-lime-900/50 rounded-lg">
                        <CreditCard className="w-4 h-4 text-blue-600 dark:text-lime-400" />
                      </div>
                      Taksit Seçimi (Opsiyonel)
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {installmentOptions.map((option) => (
                        <button
                          key={option.installmentNumber}
                          type="button"
                          onClick={() => handleInstallmentChange(option.installmentNumber)}
                          className={`p-3 rounded-2xl border transition-all duration-300 backdrop-blur-sm ${
                            formData.installment === option.installmentNumber
                              ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:border-lime-400 dark:bg-gradient-to-br dark:from-lime-900/40 dark:to-lime-800/40 shadow-lg scale-105 ring-2 ring-blue-500/20 dark:ring-lime-400/20'
                              : 'border-slate-200/50 bg-white/50 dark:border-slate-600/50 dark:bg-slate-700/50 hover:border-blue-300 dark:hover:border-lime-400 hover:shadow-md hover:scale-102'
                          }`}
                        >
                          <div className="text-center space-y-2">
                            <div className="font-bold text-sm text-slate-800 dark:text-slate-200">
                              {option.installmentNumber === 0 ? 'Taksitsiz' : `${option.installmentNumber} Ay`}
                            </div>
                            <div className="text-xs font-semibold text-blue-600 dark:text-lime-400">
                              {option.installmentNumber === 0 ? 'Tek Çekim' : `Aylık: ${option.monthlyPrice.toLocaleString('tr-TR')} ₺`}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-500">
                              Toplam: {option.totalPrice.toLocaleString('tr-TR')} ₺
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Kart Bilgileri */}
                  <div className="space-y-4 p-4 bg-gradient-to-r from-slate-50/50 to-blue-50/50 dark:from-slate-700/30 dark:to-slate-600/30 rounded-2xl border border-slate-100/50 dark:border-slate-600/30">
                    <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <div className="p-1.5 bg-blue-100 dark:bg-lime-900/50 rounded-lg">
                        <CreditCard className="w-4 h-4 text-blue-600 dark:text-lime-400" />
                      </div>
                      Kart Bilgileri
                    </Label>
                    
                    <div>
                      <Label htmlFor="cardHolderName" className="text-xs text-slate-600 dark:text-slate-400">Kart Sahibinin Adı</Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          id="cardHolderName"
                          value={formData.cardHolderName}
                          onChange={(e) => handleInputChange('cardHolderName', e.target.value)}
                          placeholder="Ad Soyad"
                          className="pl-10 h-10 text-sm bg-white/70 dark:bg-slate-700/70 border-0 shadow-inner rounded-xl focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-lime-500/50 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cardNumber" className="text-xs text-slate-600 dark:text-slate-400">Kart Numarası</Label>
                      <div className="relative mt-1">
                        <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                          id="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleCardNumberChange}
                          placeholder="0000 0000 0000 0000"
                          className="pl-10 h-10 text-sm bg-white/70 dark:bg-slate-700/70 border-0 shadow-inner rounded-xl focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-lime-500/50 transition-all duration-300"
                          maxLength={19}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <Label htmlFor="expireMonth" className="text-xs text-slate-600 dark:text-slate-400">Ay</Label>
                        <Input
                          id="expireMonth"
                          value={formData.expireMonth}
                          onChange={(e) => handleInputChange('expireMonth', e.target.value)}
                          placeholder="MM"
                          maxLength={2}
                          className="h-10 text-sm bg-white/70 dark:bg-slate-700/70 border-0 shadow-inner rounded-xl focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-lime-500/50 transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="expireYear" className="text-xs text-slate-600 dark:text-slate-400">Yıl</Label>
                        <Input
                          id="expireYear"
                          value={formData.expireYear}
                          onChange={(e) => handleInputChange('expireYear', e.target.value)}
                          placeholder="YY"
                          maxLength={2}
                          className="h-10 text-sm bg-white/70 dark:bg-slate-700/70 border-0 shadow-inner rounded-xl focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-lime-500/50 transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc" className="text-xs text-slate-600 dark:text-slate-400">CVC</Label>
                        <Input
                          id="cvc"
                          value={formData.cvc}
                          onChange={(e) => handleInputChange('cvc', e.target.value)}
                          placeholder="123"
                          maxLength={3}
                          className="h-10 text-sm bg-white/70 dark:bg-slate-700/70 border-0 shadow-inner rounded-xl focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-lime-500/50 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Müşteri Bilgileri */}
                  <div className="space-y-4 p-4 bg-gradient-to-r from-slate-50/50 to-blue-50/50 dark:from-slate-700/30 dark:to-slate-600/30 rounded-2xl border border-slate-100/50 dark:border-slate-600/30">
                    <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <div className="p-1.5 bg-blue-100 dark:bg-lime-900/50 rounded-lg">
                        <User className="w-4 h-4 text-blue-600 dark:text-lime-400" />
                      </div>
                      Müşteri Bilgileri
                    </Label>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="firstName" className="text-xs text-slate-600 dark:text-slate-400">Ad</Label>
                        <Input
                          id="firstName"
                          value={formData.customerInfo.firstName}
                          onChange={(e) => handleInputChange('customerInfo.firstName', e.target.value)}
                          placeholder="Adınız"
                          className="h-10 text-sm bg-white/70 dark:bg-slate-700/70 border-0 shadow-inner rounded-xl focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-lime-500/50 transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-xs text-slate-600 dark:text-slate-400">Soyad</Label>
                        <Input
                          id="lastName"
                          value={formData.customerInfo.lastName}
                          onChange={(e) => handleInputChange('customerInfo.lastName', e.target.value)}
                          placeholder="Soyadınız"
                          className="h-10 text-sm bg-white/70 dark:bg-slate-700/70 border-0 shadow-inner rounded-xl focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-lime-500/50 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="email" className="text-xs text-slate-600 dark:text-slate-400">E-posta</Label>
                        <div className="relative mt-1">
                          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                          <Input
                            id="email"
                            type="email"
                            value={formData.customerInfo.email}
                            onChange={(e) => handleInputChange('customerInfo.email', e.target.value)}
                            placeholder="ornek@email.com"
                            className="pl-10 h-10 text-sm bg-white/70 dark:bg-slate-700/70 border-0 shadow-inner rounded-xl focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-lime-500/50 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-xs text-slate-600 dark:text-slate-400">Telefon</Label>
                        <div className="relative mt-1">
                          <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                          <Input
                            id="phone"
                            value={formData.customerInfo.phone}
                            onChange={(e) => handleInputChange('customerInfo.phone', e.target.value)}
                            placeholder="0555 123 45 67"
                            className="pl-10 h-10 text-sm bg-white/70 dark:bg-slate-700/70 border-0 shadow-inner rounded-xl focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-lime-500/50 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="city" className="text-xs text-slate-600 dark:text-slate-400">Şehir</Label>
                      <Input
                        id="city"
                        value={formData.customerInfo.city}
                        onChange={(e) => handleInputChange('customerInfo.city', e.target.value)}
                        placeholder="Şehir"
                        className="h-10 text-sm bg-white/70 dark:bg-slate-700/70 border-0 shadow-inner rounded-xl focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-lime-500/50 transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-xs text-slate-600 dark:text-slate-400">Adres</Label>
                      <Textarea
                        id="address"
                        value={formData.customerInfo.address}
                        onChange={(e) => handleInputChange('customerInfo.address', e.target.value)}
                        placeholder="Tam adres bilgisi"
                        rows={2}
                        className="resize-none text-sm bg-white/70 dark:bg-slate-700/70 border-0 shadow-inner rounded-xl focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-lime-500/50 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Ödeme Butonu */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-14 text-base font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-lime-500 dark:to-lime-600 hover:from-blue-700 hover:to-blue-800 dark:hover:from-lime-600 dark:hover:to-lime-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-2xl border-0"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        İşleniyor...
                      </div>
                    ) : (
                      `${selectedInstallment?.totalPrice.toLocaleString('tr-TR')} ₺ Öde`
                    )}
                  </Button>

                  {/* Güvenlik Bilgisi */}
                  <div className="text-center space-y-3 p-4 bg-gradient-to-r from-green-50/50 to-blue-50/50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl border border-green-100/50 dark:border-green-800/30">
                    <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
                      <div className="p-1.5 bg-green-100 dark:bg-green-900/50 rounded-lg">
                        <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-xs">Ödeme bilgileriniz SSL ile şifrelenerek korunmaktadır</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <img src="/logo.png" alt="iyzico" className="h-5 opacity-70" />
                      <span className="text-slate-500 dark:text-slate-400 text-xs">iyzico Güvenli Ödeme</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sağ Panel - Sipariş Özeti */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 border-0 shadow-2xl bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardHeader className="bg-white dark:bg-slate-800 border-b border-slate-200/50 dark:border-slate-600/50">
                <CardTitle className="flex items-center justify-center gap-3 text-slate-800 dark:text-slate-200 text-sm text-center">
                  <div className="p-2 bg-blue-100 dark:bg-lime-900/50 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-lime-400" />
                  </div>
                  Sipariş Özeti
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4">
                <div className="flex justify-between items-center text-xs p-2 bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-slate-700/30 dark:to-slate-600/30 rounded-xl">
                  <span className="text-slate-600 dark:text-slate-400">Ürün:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{formData.productName}</span>
                </div>
                
                <div className="flex justify-between items-center text-xs p-2 bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-slate-700/30 dark:to-slate-600/30 rounded-xl">
                  <span className="text-slate-600 dark:text-slate-400">Tutar:</span>
                  <span className="font-bold text-blue-600 dark:text-lime-400">{formData.amount.toLocaleString('tr-TR')} ₺</span>
                </div>

                <div className="flex justify-between items-center text-xs p-2 bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-slate-700/30 dark:to-slate-600/30 rounded-xl">
                  <span className="text-slate-600 dark:text-slate-400">Taksit:</span>
                  <span className="font-semibold">
                    {formData.installment === 0 ? 'Taksitsiz' : `${formData.installment} ay`}
                  </span>
                </div>

                {selectedInstallment && selectedInstallment.installmentNumber > 0 && (
                  <div className="flex justify-between items-center text-xs p-2 bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-slate-700/30 dark:to-slate-600/30 rounded-xl">
                    <span className="text-slate-600 dark:text-slate-400">Aylık:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {selectedInstallment.monthlyPrice.toLocaleString('tr-TR')} ₺
                    </span>
                  </div>
                )}
                    
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50/50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200/50 dark:border-green-800/30">
                  <span className="font-bold text-sm">Toplam:</span>
                  <span className="font-bold text-xl text-green-600 dark:text-lime-400">
                    {selectedInstallment?.totalPrice.toLocaleString('tr-TR')} ₺
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

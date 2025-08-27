'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useRouter } from 'next/navigation';
import { 
  CheckCircle, 
  Download, 
  Home, 
  Mail,
  CreditCard,
  Calendar,
  DollarSign,
  User,
  Phone
} from 'lucide-react';
import { LiquidButton } from '../ui/liquid-glass-button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface PaymentData {
  amount: number;
  installment: number;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  paymentId?: string;
  transactionDate?: string;
}

interface PaymentSuccessProps {
  paymentData: PaymentData;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ paymentData }) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });
  const router = useRouter();

  useEffect(() => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Konfeti 5 saniye sonra dursun
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadReceipt = () => {
    // Basit bir makbuz indirme simülasyonu
    const receiptData = `
ÖDEME MAKBUZU
=====================================
İşlem ID: ${paymentData.paymentId || 'TXN' + Date.now()}
Tarih: ${paymentData.transactionDate || new Date().toLocaleDateString('tr-TR')}
Müşteri: ${paymentData.customerInfo.firstName} ${paymentData.customerInfo.lastName}
E-posta: ${paymentData.customerInfo.email}
Telefon: ${paymentData.customerInfo.phone}
Tutar: ${paymentData.amount.toLocaleString('tr-TR')} ₺
Taksit: ${paymentData.installment === 0 ? 'Taksitsiz' : `${paymentData.installment} Ay`}
Durum: BAŞARILI
=====================================
    `;

    const blob = new Blob([receiptData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `makbuz-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-slate-900 dark:to-green-900/20 pt-32 pb-12 px-4 relative overflow-hidden">
      {/* Konfeti Animasyonu */}
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}

      {/* Arka Plan Animasyonları */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 left-10 w-20 h-20 bg-green-300/20 rounded-full"
        />
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -360 }}
          transition={{ duration: 2.5, delay: 1 }}
          className="absolute top-40 right-20 w-32 h-32 bg-emerald-400/10 rounded-full"
        />
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 180 }}
          transition={{ duration: 3, delay: 1.5 }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500/15 rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Ana Başarı Animasyonu */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2 
          }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.5 
            }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-2xl mb-6 mx-auto"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 dark:from-green-400 dark:to-emerald-500 bg-clip-text text-transparent mb-3"
          >
            Ödeme Başarılı! 🎉
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Ödemeniz başarıyla tamamlandı. İşlem detaylarınızı aşağıda görebilir ve makbuzunuzu indirebilirsiniz.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* İşlem Detayları */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Card className="border-0 shadow-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-b border-green-100/50 dark:border-green-800/50">
                <CardTitle className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
                  <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-xl">
                    <CreditCard className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  İşlem Detayları
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50/50 dark:bg-green-900/20 rounded-xl">
                  <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Ödenen Tutar:
                  </span>
                  <span className="font-bold text-xl text-green-600 dark:text-green-400">
                    {paymentData.amount.toLocaleString('tr-TR')} ₺
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50/50 dark:bg-blue-900/20 rounded-xl">
                  <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Taksit:
                  </span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {paymentData.installment === 0 ? 'Taksitsiz' : `${paymentData.installment} Ay`}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-purple-50/50 dark:bg-purple-900/20 rounded-xl">
                  <span className="text-slate-600 dark:text-slate-400">İşlem ID:</span>
                  <span className="font-mono text-sm font-semibold text-purple-600 dark:text-purple-400">
                    {paymentData.paymentId || 'TXN' + Date.now()}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-orange-50/50 dark:bg-orange-900/20 rounded-xl">
                  <span className="text-slate-600 dark:text-slate-400">Tarih:</span>
                  <span className="font-semibold text-orange-600 dark:text-orange-400">
                    {paymentData.transactionDate || new Date().toLocaleDateString('tr-TR')}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Müşteri Bilgileri */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <Card className="border-0 shadow-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border-b border-blue-100/50 dark:border-blue-800/50">
                <CardTitle className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
                    <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  Müşteri Bilgileri
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-50/50 dark:bg-slate-700/30 rounded-xl">
                  <span className="text-slate-600 dark:text-slate-400">Ad Soyad:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {paymentData.customerInfo.firstName} {paymentData.customerInfo.lastName}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50/50 dark:bg-slate-700/30 rounded-xl">
                  <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    E-posta:
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {paymentData.customerInfo.email}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50/50 dark:bg-slate-700/30 rounded-xl">
                  <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Telefon:
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {paymentData.customerInfo.phone}
                  </span>
                </div>

                <div className="text-center pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <LiquidButton
                      onClick={handleDownloadReceipt}
                      className="w-full text-purple-600 font-semibold"
                      size="lg"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Makbuz İndir
                    </LiquidButton>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Aksiyon Butonları */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-center mt-8 space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LiquidButton
                onClick={() => router.push('/')}
                className="w-full sm:w-auto text-green-600 font-semibold"
                size="lg"
              >
                <Home className="w-5 h-5 mr-2" />
                Ana Sayfaya Dön
              </LiquidButton>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LiquidButton
                onClick={() => router.push('/payment')}
                className="w-full sm:w-auto text-emerald-600 font-semibold"
                size="lg"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Yeni Ödeme
              </LiquidButton>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-sm text-slate-500 dark:text-slate-400 mt-6"
          >
            İşlem onay e-postası {paymentData.customerInfo.email} adresine gönderilmiştir.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

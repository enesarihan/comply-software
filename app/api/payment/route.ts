import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// iyzico API konfigürasyonu
const IYZICO_CONFIG = {
  apiKey: process.env.IYZICO_API_KEY || 'your-api-key',
  secretKey: process.env.IYZICO_SECRET_KEY || 'your-secret-key',
  baseUrl: process.env.NODE_ENV === 'production' 
    ? 'https://api.iyzipay.com' 
    : 'https://sandbox-api.iyzipay.com'
};

// iyzico API request helper - API key olmadığı için devre dışı
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const makeIyzicoRequest = async (endpoint: string, data: Record<string, unknown>) => {
  // Benzersiz randomKey oluştur (timestamp + random)
  const randomKey = Date.now().toString() + Math.random().toString(36).substring(2, 15);
  
  // Request body'yi string'e çevir
  const requestBody = JSON.stringify(data);
  
  // iyzico HMACSHA256 imza algoritması
  // Formula: HMACSHA256(randomKey + uri.path + request.body, secretKey)
  const payload = randomKey + endpoint + requestBody;
  
  console.log('Payload:', payload);
  
  // HMACSHA256 ile şifrele
  const encryptedData = crypto.createHmac('sha256', IYZICO_CONFIG.secretKey)
    .update(payload, 'utf8')
    .digest('hex');
  
  console.log('EncryptedData:', encryptedData);
  
  // Authorization string oluştur
  // Format: "apiKey:"+apiKey+"&randomKey:"+randomKey+"&signature:"+encryptedData
  const authorizationString = `apiKey:${IYZICO_CONFIG.apiKey}&randomKey:${randomKey}&signature:${encryptedData}`;
  
  console.log('AuthorizationString:', authorizationString);
  
  // Base64 encode
  const base64EncodedAuthorization = Buffer.from(authorizationString, 'utf8').toString('base64');
  
  console.log('Base64EncodedAuthorization:', base64EncodedAuthorization);
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `IYZWSv2 ${base64EncodedAuthorization}`,
    'x-iyzi-rnd': randomKey
  };

  console.log('Final Authorization Header:', headers.Authorization);

  const response = await fetch(`${IYZICO_CONFIG.baseUrl}${endpoint}`, {
    method: 'POST',
    headers,
    body: requestBody
  });

  const result = await response.json();
  console.log('iyzico Response:', result);
  
  return result;
};

// Ödeme başlatma
// API key olmadığı için ödeme API'si devre dışı
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(request: NextRequest) {
  return NextResponse.json(
    { 
      success: false, 
      error: 'Ödeme sistemi şu anda bakım modında. Lütfen daha sonra tekrar deneyin.' 
    }, 
    { status: 503 }
  );
  
  /* API Key olmadığı için gizlenen kod:
  try {
    const body = await request.json();
    const { 
      cardHolderName, 
      cardNumber, 
      expireMonth, 
      expireYear, 
      cvc, 
      amount, 
      installment, 
      customerInfo,
      productName 
    } = body;

    // Kart bilgilerini doğrulama
    if (!cardHolderName || !cardNumber || !expireMonth || !expireYear || !cvc) {
      return NextResponse.json(
        { error: 'Eksik kart bilgileri' },
        { status: 400 }
      );
    }

    // Taksit sayısı kontrolü (0, 2, 3, 6 ay arası)
    if (installment !== 0 && ![2, 3, 6].includes(installment)) {
      return NextResponse.json(
        { error: 'Taksit sayısı 0, 2, 3 veya 6 olmalıdır' },
        { status: 400 }
      );
    }

    // iyzico ödeme isteği
    const paymentRequest = {
      locale: 'tr',
      conversationId: `conv_${Date.now()}`,
      price: amount.toString(),
      paidPrice: amount.toString(),
      currency: 'TRY',
      installment: installment === 0 ? '1' : installment.toString(), // 0 = taksitsiz, 1 olarak gönder
      basketId: `basket_${Date.now()}`,
      paymentChannel: 'WEB',
      paymentGroup: 'PRODUCT',
      paymentCard: {
        cardHolderName,
        cardNumber: cardNumber.replace(/\s/g, ''),
        expireMonth,
        expireYear,
        cvc,
        registerCard: '0'
      },
      buyer: {
        id: `buyer_${Date.now()}`,
        name: customerInfo.firstName,
        surname: customerInfo.lastName,
        gsmNumber: customerInfo.phone,
        email: customerInfo.email,
        identityNumber: '11111111111',
        lastLoginDate: new Date().toISOString().split('T')[0] + ' ' + new Date().toISOString().split('T')[1].split('.')[0],
        registrationDate: new Date().toISOString().split('T')[0] + ' ' + new Date().toISOString().split('T')[1].split('.')[0],
        registrationAddress: customerInfo.address,
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1',
        city: customerInfo.city,
        country: 'Turkey',
        zipCode: '34000'
      },
      shippingAddress: {
        contactName: `${customerInfo.firstName} ${customerInfo.lastName}`,
        city: customerInfo.city,
        country: 'Turkey',
        address: customerInfo.address,
        zipCode: '34000'
      },
      billingAddress: {
        contactName: `${customerInfo.firstName} ${customerInfo.lastName}`,
        city: customerInfo.city,
        country: 'Turkey',
        address: customerInfo.address,
        zipCode: '34000'
      },
      basketItems: [
        {
          id: 'product_1',
          name: productName,
          category1: 'Yazılım Hizmeti',
          category2: 'Web Geliştirme',
          itemType: 'VIRTUAL',
          price: amount.toString()
        }
      ]
    };

    // iyzico ödeme işlemi
    const result = await makeIyzicoRequest('/payment/auth', paymentRequest);

    if (result.status === 'success') {
      // Ödeme başarılı - Email gönder
      try {
        const receiptData = {
          paymentId: result.paymentId || `TXN_${Date.now()}`,
          transactionDate: new Date().toLocaleDateString('tr-TR'),
          customerInfo,
          amount,
          installment,
          productName
        };

        // Email gönderme isteği (background'da çalışsın)
        const baseUrl = request.url.replace('/api/payment', '');
        fetch(`${baseUrl}/api/send-receipt`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(receiptData)
        }).catch(error => {
          console.error('Email sending failed:', error);
          // Email hatası ödeme sonucunu etkilemesin
        });

        console.log('Payment successful, email sending initiated');

      } catch (emailError) {
        console.error('Email preparation error:', emailError);
        // Email hatası ödeme sonucunu etkilemesin
      }

      return NextResponse.json({
        success: true,
        paymentId: result.paymentId,
        message: 'Ödeme başarıyla tamamlandı, makbuz email olarak gönderildi'
      });
    } else {
      return NextResponse.json({
        success: false,
        error: result.errorMessage || 'Ödeme işlemi başarısız'
      }, { status: 400 });
    }

  } catch (error) {
    console.error('Ödeme hatası:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası oluştu' },
      { status: 500 }
    );
  }
  */
}

// Taksit bilgilerini getirme
export async function GET() {
  return NextResponse.json(
    { 
      success: false, 
      error: 'Ödeme sistemi şu anda bakım modında.' 
    }, 
    { status: 503 }
  );
  
  /* API Key olmadığı için gizlenen kod:
  try {
    // iyzico'dan taksit bilgilerini alma
    const installmentRequest = {
      locale: 'tr',
      conversationId: `conv_${Date.now()}`,
      binNumber: '552879', // Test için Halkbank MasterCard
      price: '100.00'
    };

    const result = await makeIyzicoRequest('/payment/iyzipos/installment', installmentRequest);

    if (result.status === 'success') {
      // Sadece 2, 3, 6 ay arası taksitleri filtrele
      const filteredInstallments = result.installmentDetails
        .filter((item: { installmentPrices: { installmentNumber: number }[] }) => {
          const validInstallments = item.installmentPrices.filter((price: { installmentNumber: number }) => 
            [2, 3, 6].includes(price.installmentNumber)
          );
          return validInstallments.length > 0;
        })
        .map((item: { binNumber: string; price: string; cardType: string; cardAssociation: string; cardFamilyName: string; force3ds: boolean; bankCode: string; bankName: string; installmentPrices: { installmentNumber: number }[] }) => ({
          binNumber: item.binNumber,
          price: item.price,
          cardType: item.cardType,
          cardAssociation: item.cardAssociation,
          cardFamilyName: item.cardFamilyName,
          force3ds: item.force3ds,
          bankCode: item.bankCode,
          bankName: item.bankName,
          installmentPrices: item.installmentPrices.filter((price: { installmentNumber: number }) => 
            [2, 3, 6].includes(price.installmentNumber)
          )
        }));

      return NextResponse.json({
        success: true,
        installments: filteredInstallments
      });
    } else {
      return NextResponse.json({
        success: false,
        error: 'Taksit bilgileri alınamadı'
      }, { status: 400 });
    }

  } catch (error) {
    console.error('Taksit bilgisi hatası:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası oluştu' },
      { status: 500 }
    );
  }
  */
}

import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Button,
  Hr,
  Img,
} from '@react-email/components';

export interface PaymentReceiptData {
  paymentId: string;
  transactionDate: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  };
  amount: number;
  installment: number;
  productName: string;
}

interface PaymentReceiptEmailProps {
  data: PaymentReceiptData;
}

export const PaymentReceiptEmail: React.FC<PaymentReceiptEmailProps> = ({ data }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={header}>
          <Row>
            <Column align="center">
              <div style={logoContainer}>
                <Img
                  src="cid:logo"
                  alt="Comply Software"
                  width="80"
                  height="80"
                  style={logoImage}
                />
              </div>
              <Heading style={companyName}>Comply Software</Heading>
              <Text style={subtitle}>Profesyonel Yazılım Çözümleri</Text>
            </Column>
          </Row>
        </Section>

        {/* Success Section */}
        <Section style={successSection}>
                      <Row>
              <Column align="center">
                <Img
                  src="cid:checkicon"
                  alt="Success"
                  width="80"
                  height="80"
                  style={successIconImg}
                />
                <Heading style={successTitle}>Ödeme Başarılı! 🎉</Heading>
              <Text style={successText}>
                Sayın {data.customerInfo.firstName} {data.customerInfo.lastName}, 
                ödemeniz başarıyla tamamlanmıştır.
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Amount Section */}
        <Section style={content}>
          <Row>
            <Column>
              <div style={amountBox}>
                <Text style={amountLabel}>Ödenen Tutar</Text>
                <Heading style={amountValue}>
                  {data.amount.toLocaleString('tr-TR')} ₺
                </Heading>
              </div>
            </Column>
          </Row>
        </Section>

        {/* Transaction Details */}
        <Section style={content}>
          <Row>
            <Column>
              <Heading style={sectionTitle}>İşlem Detayları</Heading>
              
              <div style={transactionBox}>
                <Text style={transactionLabel}>İşlem Numarası</Text>
                <Text style={transactionValue}>{data.paymentId}</Text>
              </div>

              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={infoLabel}>İşlem Tarihi</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={infoValue}>{data.transactionDate}</Text>
                </Column>
              </Row>

              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={infoLabel}>Ürün/Hizmet</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={infoValue}>{data.productName}</Text>
                </Column>
              </Row>

              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={infoLabel}>Taksit Bilgisi</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={infoValue}>
                    {data.installment === 0 ? 'Taksitsiz' : `${data.installment} Ay`}
                  </Text>
                </Column>
              </Row>

              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={infoLabel}>Ödeme Yöntemi</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={infoValue}>Kredi Kartı</Text>
                </Column>
              </Row>
            </Column>
          </Row>
        </Section>

        {/* Customer Information */}
        <Section style={content}>
          <Row>
            <Column>
              <Heading style={sectionTitle}>Müşteri Bilgileri</Heading>

              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={infoLabel}>Ad Soyad</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={infoValue}>
                    {data.customerInfo.firstName} {data.customerInfo.lastName}
                  </Text>
                </Column>
              </Row>

              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={infoLabel}>E-posta</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={infoValue}>{data.customerInfo.email}</Text>
                </Column>
              </Row>

              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={infoLabel}>Telefon</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={infoValue}>{data.customerInfo.phone}</Text>
                </Column>
              </Row>

              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={infoLabel}>Adres</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={infoValue}>
                    {data.customerInfo.address}, {data.customerInfo.city}
                  </Text>
                </Column>
              </Row>
            </Column>
          </Row>
        </Section>

        {/* Security Notice */}
        <Section style={content}>
          <Row>
            <Column>
              <div style={securityNotice}>
                <Text style={securityText}>
                  🔒 Bu işlem SSL sertifikası ile güvenli bir şekilde gerçekleştirilmiştir. 
                  iyzico güvenli ödeme altyapısı kullanılmıştır.
                </Text>
              </div>
            </Column>
          </Row>
        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Row>
            <Column align="center">
              <Text style={footerText}>
                Bu e-posta {data.transactionDate} tarihinde gerçekleştirilen ödeme işlemi için 
                otomatik olarak oluşturulmuştur.
              </Text>
              <Text style={footerText}>
                Herhangi bir sorunuz varsa bizimle iletişime geçebilirsiniz.
              </Text>
              <Hr style={hr} />
              <Text style={contactInfo}>
                📧 complysoftware@gmail.com | 🌐 complysoftware.net | 📞 +90 (552) 584-5941
              </Text>
              <Text style={copyright}>
                © {new Date().getFullYear()} Comply Software. Tüm hakları saklıdır.
              </Text>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  borderRadius: '8px',
  margin: '40px auto',
  maxWidth: '600px',
  padding: '0',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const header = {
  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  borderRadius: '8px 8px 0 0',
  padding: '40px 30px',
  textAlign: 'center' as const,
};

const logoContainer = {
  marginBottom: '20px',
};

const logoImage = {
  borderRadius: '50%',
  border: '3px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  imageRendering: 'crisp-edges' as const,
  objectFit: 'cover' as const,
  display: 'block',
  margin: '0 auto',
  maxWidth: '80px',
  maxHeight: '80px',
  msInterpolationMode: 'bicubic',
  outline: 'none',
  textDecoration: 'none',
};

const companyName = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: '700',
  margin: '0 0 8px 0',
  letterSpacing: '-0.5px',
};

const subtitle = {
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '16px',
  margin: '0',
  fontWeight: '400',
};

const successSection = {
  background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)',
  padding: '40px 30px',
  textAlign: 'center' as const,
};

const successIconImg = {
  display: 'block',
  margin: '0 auto 24px auto',
  maxWidth: '80px',
  maxHeight: '80px',
  width: '80px',
  height: '80px',
  imageRendering: 'crisp-edges' as const,
  objectFit: 'contain' as const,
  msInterpolationMode: 'bicubic',
  outline: 'none',
  textDecoration: 'none',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const successTitle = {
  color: '#065f46',
  fontSize: '32px',
  fontWeight: '700',
  margin: '0 0 12px 0',
};

const successText = {
  color: '#374151',
  fontSize: '18px',
  margin: '0',
  lineHeight: '1.5',
};

const content = {
  padding: '30px',
};

const amountBox = {
  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  color: 'white',
  padding: '28px',
  borderRadius: '16px',
  textAlign: 'center' as const,
  marginBottom: '30px',
  boxShadow: '0 4px 15px rgba(16, 185, 129, 0.2)',
};

const amountLabel = {
  fontSize: '14px',
  opacity: 0.9,
  margin: '0 0 8px 0',
  color: 'white',
};

const amountValue = {
  fontSize: '36px',
  fontWeight: '700',
  margin: '0',
  color: 'white',
};

const sectionTitle = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 25px 0',
  paddingBottom: '15px',
  borderBottom: '2px solid #e5e7eb',
};

const transactionBox = {
  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
  color: 'white',
  padding: '24px',
  borderRadius: '14px',
  textAlign: 'center' as const,
  margin: '20px 0 30px 0',
};

const transactionLabel = {
  fontSize: '12px',
  opacity: 0.9,
  margin: '0 0 8px 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  color: 'white',
};

const transactionValue = {
  fontSize: '18px',
  fontWeight: '600',
  margin: '0',
  fontFamily: 'monospace',
  letterSpacing: '2px',
  color: 'white',
};

const infoRow = {
  background: '#f9fafb',
  borderLeft: '4px solid #3b82f6',
  borderRadius: '12px',
  padding: '20px',
  margin: '16px 0',
  minHeight: '24px',
};

const labelColumn = {
  width: '40%',
  verticalAlign: 'middle' as const,
};

const valueColumn = {
  width: '60%',
  verticalAlign: 'middle' as const,
  textAlign: 'right' as const,
};

const infoLabel = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '500',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0',
};

const infoValue = {
  color: '#1f2937',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0',
};

const securityNotice = {
  background: '#fef3c7',
  border: '1px solid #f59e0b',
  borderRadius: '12px',
  padding: '20px',
  margin: '20px 0',
  textAlign: 'center' as const,
};

const securityText = {
  color: '#92400e',
  fontSize: '14px',
  margin: '0',
  fontWeight: '500',
};

const footer = {
  background: '#1f2937',
  padding: '40px 30px',
  textAlign: 'center' as const,
  color: '#9ca3af',
  borderRadius: '0 0 8px 8px',
};

const footerText = {
  color: '#9ca3af',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0 0 15px 0',
};

const hr = {
  border: 'none',
  borderTop: '1px solid #374151',
  margin: '20px 0',
};

const contactInfo = {
  color: '#60a5fa',
  fontSize: '14px',
  margin: '0 0 20px 0',
};

const copyright = {
  color: '#6b7280',
  fontSize: '12px',
  margin: '0',
};

export default PaymentReceiptEmail;

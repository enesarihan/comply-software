// import Payment from '../../components/screens/Payment';
import Navbar from '../../components/screens/Navbar';
import Link from 'next/link';

// Payment sayfası - API key olmadığı için gizlendi
export default function PaymentPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md mx-4">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Ödeme Sistemi Geçici Olarak Kapalı
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Şu anda ödeme sistemi bakım modında. Lütfen daha sonra tekrar deneyin veya bizimle iletişime geçin.
          </p>
          <Link 
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors no-underline"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </>
  );
}

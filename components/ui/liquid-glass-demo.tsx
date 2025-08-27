import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";

export default function LiquidGlassDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
            Liquid Glass & Metal Button Demo
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Etkileyici button tasarımları ile kullanıcı deneyimini artırın
          </p>
        </div>

        {/* Liquid Buttons Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">Liquid Glass Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-[200px] w-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
              <LiquidButton size="lg" className="text-blue-600 dark:text-white font-semibold">
                Standart Button
              </LiquidButton>
            </div>
            
            <div className="relative h-[200px] w-full bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-2xl flex items-center justify-center">
              <LiquidButton size="xl" className="text-blue-600 font-bold">
                Büyük Button
              </LiquidButton>
            </div>
            
            <div className="relative h-[200px] w-full bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl flex items-center justify-center">
              <LiquidButton size="xxl" className="text-purple-600 font-extrabold">
                Extra Büyük
              </LiquidButton>
            </div>
          </div>
        </div>

        {/* Metal Buttons Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">Metal Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-[200px] w-full bg-gradient-to-br from-gray-100 to-slate-100 dark:from-gray-900/20 dark:to-slate-900/20 rounded-2xl flex items-center justify-center">
              <MetalButton variant="default">
                Standart Metal
              </MetalButton>
            </div>
            
            <div className="relative h-[200px] w-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl flex items-center justify-center">
              <MetalButton variant="primary">
                Primary Metal
              </MetalButton>
            </div>
            
            <div className="relative h-[200px] w-full bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl flex items-center justify-center">
              <MetalButton variant="success">
                Success Metal
              </MetalButton>
            </div>
            
            <div className="relative h-[200px] w-full bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl flex items-center justify-center">
              <MetalButton variant="error">
                Error Metal
              </MetalButton>
            </div>
            
            <div className="relative h-[200px] w-full bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl flex items-center justify-center">
              <MetalButton variant="gold">
                Gold Metal
              </MetalButton>
            </div>
            
            <div className="relative h-[200px] w-full bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl flex items-center justify-center">
              <MetalButton variant="bronze">
                Bronze Metal
              </MetalButton>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-6 p-8 bg-white/80 dark:bg-gray-800/80 rounded-2xl backdrop-blur-sm">
          <h3 className="text-xl font-semibold">Kullanım Örnekleri</h3>
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <strong>LiquidButton:</strong> Moderne ve cam benzeri efekt istediğinizde kullanın.
            </div>
            <div>
              <strong>MetalButton:</strong> Premium ve metalik görünüm istediğinizde kullanın.
            </div>
            <div>
              <strong>Size Seçenekleri:</strong> sm, lg, xl, xxl boyutları mevcuttur.
            </div>
            <div>
              <strong>Variant Seçenekleri:</strong> Metal buttonlar için default, primary, success, error, gold, bronze.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

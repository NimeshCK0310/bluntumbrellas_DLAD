import Header from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />

      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            More sections coming soon...
          </h2>
          <p className="text-lg text-gray-600">
            Product showcase, features, and other sections will be implemented in the next stages.
          </p>
        </div>
      </div>
    </main>
  );
}

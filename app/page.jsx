import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Bento Grid Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <BentoGrid />
      </section>

      
    </div>
  );
}

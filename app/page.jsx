import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import FAQs from '@/components/faq';
import ProductGallery from '@/components/ProductGallery';
import FeaturedProducts from '@/components/FeaturedProducts';

export default function Home() {
  return (
    <div className="min-h-screen">
        <Hero />
        <BentoGrid />
        <FeaturedProducts />
        <ProductGallery/>
        <FAQs/>
    </div>
  );
}

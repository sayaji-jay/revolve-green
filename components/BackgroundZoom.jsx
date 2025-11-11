'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function BackgroundZoom() {
  const [scrollScale, setScrollScale] = useState(1);
  const [forestY, setForestY] = useState(0);
  const [grassY, setGrassY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scale based on scroll position
      // Starts at 1 and increases gradually as you scroll
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;

      // Scale from 1 to 1.3 based on scroll (adjust as needed)
      const newScale = 1 + (scrollPercentage * 0.3);
      setScrollScale(newScale);

      // Forest image moves upward as you scroll (negative Y moves up)
      const newForestY = -(scrollPercentage * 50);
      setForestY(newForestY);

      // Grass image moves downward as you scroll (positive Y moves down)
      const newGrassY = scrollPercentage * 30;
      setGrassY(newGrassY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Forest Image - Bottom stays fixed, zooms from bottom */}
      <section className="z-[-1] fixed top-0 left-0 right-0 h-full overflow-hidden flex items-end">
        <div
          style={{
            transform: `scale(${scrollScale})`,
            transformOrigin: 'bottom center',
            transition: 'transform 0.1s ease-out',
            width: '100%',
            height: '100%',
            position: 'relative'
          }}
        >
          <Image
            src="/forest.png"
            alt="Forest Background"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom", opacity: 0.3 }}
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Grass Image at Bottom with Downward Movement */}
      <section
        className="fixed bottom-0 left-0 right-0 h-32 sm:h-48 md:h-64 z-[-1]"
        style={{
          transform: `translateY(${grassY}%)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Image
          src="/grass.png"
          alt="Grass Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "bottom",
            mixBlendMode: "multiply",
            opacity: 1
          }}
          priority
          sizes="100vw"
        />
      </section>
    </>
  );
}

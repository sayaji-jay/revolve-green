'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function BackgroundZoom() {
  const [scrollScale, setScrollScale] = useState(1);
  const [forestY, setForestY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scale based on scroll position
      // Starts at 1 and increases gradually as you scroll
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;

      // Scale from 1 to 1.3 based on scroll (adjust as needed)
      const newScale = 1 + (scrollPercentage * 0.1);
      setScrollScale(newScale);

      // Forest image moves upward as you scroll (negative Y moves up)
      const newForestY = -(scrollPercentage * 50);
      setForestY(newForestY);
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
            width: '100%',
            height: '100%',
            position: 'relative',
            willChange: 'transform'
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
    </>
  );
}

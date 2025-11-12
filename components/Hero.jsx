'use client';

import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useState,useEffect } from 'react';
export default function Hero() {

  const [isGapanimationcomplaited,setGapanimationcomplaited] = useState(false);
  const [isFlipanimationcomplaited,setFlipanimationcomplaited] = useState(false);


  const initAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const mm = gsap.matchMedia();

    // // For mobile screens (max-width: 999px) - No animations, blank styles
    // mm.add("(max-width: 999px)", () => {
    //   // Reset all styles to blank/default
    //   gsap.set("#card-1, #card-2, #card-3", { clearProps: "all" });
    //   gsap.set(".sticky-header h1", { clearProps: "all" });
    //   gsap.set(".card-container", { clearProps: "all" });

    //   return () => {
    //     // Cleanup for mobile
    //   };
    // });

    // For desktop screens (min-width: 1000px) - Apply animations
    mm.add("(min-width: 500px)", () => {
      ScrollTrigger.create({
          trigger: ".sticky-section",
          start: "top top",
          end: `+=${window.innerHeight * 4}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self) => {
              const progress = self.progress;
                          

            if (progress => 0.1 && progress <= 0.25) {
              const headerProgress = gsap.utils.mapRange(0.1, 0.25, 0, 1, progress);
              const yValue = gsap.utils.mapRange(0, 1, 40, 0, headerProgress);
              const opacityValue = gsap.utils.mapRange(0, 1, 0, 1, headerProgress);

              gsap.set(".sticky-section-header h1", { y: yValue, opacity: opacityValue });
            }
            else if (progress < 0.1) {
              gsap.set(".sticky-section-header h1", { y: 40, opacity: 0 });
            } 
            else if (progress > 0.25) {    
              gsap.set(".sticky-section-header h1", { y: 0, opacity: 1 });  
            }


            if (progress <= 0.25) {
              const widthPercentage = gsap.utils.mapRange(0, 0.25, 75, 60, progress);
              gsap.set(".card-container", { width: `${widthPercentage}%` });
            }else{
              gsap.set(".card-container", { width: `60%` });
            }


            if (progress >= 0.35 && !isGapanimationcomplaited) {
              gsap.to(".card-container", { gap: 20, duration: 0.5, ease: "power3.out" });
              gsap.to(["#card-1","#card-2","#card-3"], { borderRadius: 20, duration: 0.5, ease: "power3.out" });

              setGapanimationcomplaited(true);
            }else if (progress < 0.35 && isGapanimationcomplaited) {

              gsap.to(".card-container", { gap: 0, duration: 0.5, ease: "power3.out" });
              gsap.to("#card-1", { borderRadius: "20px 0 0 20px", duration: 0.5, ease: "power3.out" });
              gsap.to("#card-2", { borderRadius: "0", duration: 0.5, ease: "power3.out" });
              gsap.to("#card-3", { borderRadius: "0 20px 20px 0", duration: 0.5, ease: "power3.out" });

              setGapanimationcomplaited(false);
            }
          }     
      
      });

      return () => {
        // Cleanup for desktop
      };
    });

  };

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Initialize animations
    initAnimations();

    let timeout;

    const handleResize = () => {
      // Clear previous timeout
      if (timeout) clearTimeout(timeout);

      // Set new timeout
      timeout = setTimeout(() => {
        initAnimations(); // Re-initialize animations on resize
      }, 250); // 250ms delay
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeout) clearTimeout(timeout);
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);


  


  return (
    <section
      id="home"
      className="relative w-screen overflow-x-hidden"
    >

      <main className="container mx-auto text-white">

        {/* Intro */}
        <section className="relative min-h-screen flex items-center justify-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold">Hey Jay Intro</h1>
        </section>


        {/* Cards Section [Sticky] */}
        <section className="sticky-section flex justify-center items-center min-h-screen px-4 md:px-8">

          {/* Sticky Header */}
          <div className="sticky-section-header absolute top-[10%] md:top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 px-4">
            <h1 className='text-center text-xl md:text-3xl lg:text-4xl opacity-0'>Three Pillars with one Purpose</h1>
          </div>

          {/* Card Container */}
          <div
            className="card-container relative w-full md:w-[90%] lg:w-[75%] flex flex-col md:flex-row gap-4 md:gap-0"
            style={{ perspective: '1000px' }}
          >

            {/* Card - 1 */}
            <div
              className="relative w-full md:flex-1 md:w-auto max-w-md md:max-w-none mx-auto rounded-[20px] md:rounded-tl-[20px] md:rounded-bl-[20px] md:rounded-tr-none md:rounded-br-none overflow-hidden bg-gray-800"
              style={{
                aspectRatio: '5/7',
                transformStyle: 'preserve-3d',
                transformOrigin: 'top'
              }}
              id="card-1"
            >
              {/* Card Front */}
              <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <Image
                  src="/seed.jpg"
                  alt="Seed"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>

              {/* Card Back */}
              <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden flex flex-col items-center justify-center"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <span className='absolute top-1 left-2'>( 01 )</span>
                <p>Seed</p>
              </div>
            </div>


            {/* Card - 2 */}
            <div
              className="relative w-full md:flex-1 md:w-auto max-w-md md:max-w-none mx-auto rounded-[20px] md:rounded-none overflow-hidden bg-gray-800"
              style={{
                aspectRatio: '5/7',
                transformStyle: 'preserve-3d',
                transformOrigin: 'top'
              }}
              id="card-2"
            >
              {/* Card Front */}
              <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <Image
                  src="/growing tree.jpg"
                  alt="Growing Tree"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card Back */}
              <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden flex flex-col items-center justify-center"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <span className='absolute top-1 left-2'>( 02 )</span>
                <p>Grow</p>
              </div>
            </div>


            {/* Card - 3 */}
            <div
              className="relative w-full md:flex-1 md:w-auto max-w-md md:max-w-none mx-auto rounded-[20px] md:rounded-tr-[20px] md:rounded-br-[20px] md:rounded-tl-none md:rounded-bl-none overflow-hidden bg-gray-800"
              style={{
                aspectRatio: '5/7',
                transformStyle: 'preserve-3d',
                transformOrigin: 'top'
              }}
              id="card-3"
            >
              {/* Card Front */}
              <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <Image
                  src="/tree.jpg"
                  alt="Tree"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card Back */}
              <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden flex flex-col items-center justify-center"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <span className='absolute top-1 left-2'>( 03 )</span>
                <p>Tree</p>
              </div>
            </div>

          </div>
        </section>


        {/* Outro */}
        <section className="relative min-h-screen flex items-center justify-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold">Hey Jay Outro</h1>
        </section>
      </main>

    </section>
  );
}

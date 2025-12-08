'use client';

import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useState,useEffect } from 'react';
import { Sprout, Leaf, TreePine } from 'lucide-react';

export default function Hero() {

  const [isGapanimationcomplaited,setGapanimationcomplaited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const initAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const mm = gsap.matchMedia();

    // // For mobile screens (max-width: 999px) - No animations, blank styles
    mm.add("(max-width: 999px)", () => {
      // Reset all styles to blank/default and hide cards completely
      gsap.set("#card-1, #card-2, #card-3", { clearProps: "all" });
      gsap.set(".card-container", { display: "none" });
      gsap.set(".video-tagline", { opacity: 1 });

      // Remove sticky behavior on mobile
      gsap.set(".sticky-section", { clearProps: "all" });

      return () => {
        // Cleanup for mobile
      };
    });

    // For desktop screens (min-width: 1000px) - Apply animations
    mm.add("(min-width: 1000px)", () => {

      // Set initial state for cards - below screen
      gsap.set(".card-container", { y: "100vh", opacity: 0 });

      ScrollTrigger.create({
          trigger: ".sticky-section",
          start: "top top",
          end: `+=${window.innerHeight * 3.5}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self) => {
              const progress = self.progress;

              // Fade out tagline and bring cards up (0% to 15%)
              if (progress <= 0.15) {
                const fadeProgress = progress / 0.15;
                const taglineOpacity = 1 - fadeProgress;
                const cardY = gsap.utils.mapRange(0, 1, 100, 0, fadeProgress);
                const cardOpacity = fadeProgress;

                gsap.set(".video-tagline", { opacity: taglineOpacity });
                gsap.set(".card-container", { y: `${cardY}vh`, opacity: cardOpacity });
              } else {
                gsap.set(".video-tagline", { opacity: 0 });
                gsap.set(".card-container", { y: 0, opacity: 1 });
              }


            // Card width animation (15% to 30%)
            if (progress >= 0.15 && progress <= 0.3) {
              const widthPercentage = gsap.utils.mapRange(0.15, 0.3, 60, 55, progress);
              gsap.set(".card-container", { width: `${widthPercentage}%` });
            } else if (progress < 0.15) {
              gsap.set(".card-container", { width: `60%` });
            } else {
              gsap.set(".card-container", { width: `55%` });
            }


            // Card separation animation (starts at 35%)
            if (progress >= 0.35 && !isGapanimationcomplaited) {
              gsap.to(".card-container", { gap: 20, duration: 0.5, ease: "power3.out" });
              gsap.to(["#card-1","#card-2","#card-3"], { borderRadius: 20, duration: 0.5, ease: "power3.out" });
              // Show the content overlays when cards separate
              gsap.to(".card-content-overlay", { opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.3 });

              setGapanimationcomplaited(true);
            }else if (progress < 0.35 && isGapanimationcomplaited) {

              gsap.to(".card-container", { gap: 0, duration: 0.5, ease: "power3.out" });
              gsap.to("#card-1", { borderRadius: "20px 0 0 20px", duration: 0.5, ease: "power3.out" });
              gsap.to("#card-2", { borderRadius: "0", duration: 0.5, ease: "power3.out" });
              gsap.to("#card-3", { borderRadius: "0 20px 20px 0", duration: 0.5, ease: "power3.out" });
              // Hide the content overlays when cards come together
              gsap.to(".card-content-overlay", { opacity: 0, duration: 0.3, ease: "power3.in" });

              setGapanimationcomplaited(false);
            }

            // Card flip animation - continuous scroll-based (60% to 80%)
            if (progress >= 0.6 && progress <= 0.8) {
              // Map progress to rotation (60% = 0deg, 80% = 180deg)
              const flipProgress = gsap.utils.mapRange(0.6, 0.8, 0, 180, progress);

              gsap.set("#card-1", { rotateY: flipProgress });
              gsap.set("#card-2", { rotateY: flipProgress });
              gsap.set("#card-3", { rotateY: flipProgress });
            } else if (progress < 0.6) {
              // Before 60%, cards are at 0 degrees
              gsap.set("#card-1", { rotateY: 0 });
              gsap.set("#card-2", { rotateY: 0 });
              gsap.set("#card-3", { rotateY: 0 });
            } else if (progress > 0.8) {
              // After 80%, cards stay at 180 degrees
              gsap.set("#card-1", { rotateY: 180 });
              gsap.set("#card-2", { rotateY: 180 });
              gsap.set("#card-3", { rotateY: 180 });
            }
          }

      });

      return () => {
        // Cleanup for desktop
      };
    });

  };

  useEffect(() => {
    // Set loading to false after 1 second
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

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
      clearTimeout(loadingTimeout);
      window.removeEventListener('resize', handleResize);
      if (timeout) clearTimeout(timeout);
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);


  


  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/logo.png"
              alt="Revolve Green Logo"
              width={200}
              height={200}
              className="animate-pulse"
              priority
            />
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl font-bold text-emerald-900">Loading</p>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section
        id="home"
        className="relative w-screen overflow-x-hidden"
      >
        <main className="relative text-white">

        {/* Cards Section [Sticky] */}
        <section className="sticky-section relative flex justify-center items-center min-h-screen px-4 md:px-8">

          {/* Background Image - Sticky */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src="/bg-new.jpg"
              alt="Green Leaf Background"
              fill
              className="object-cover"
              priority
              quality={100}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Hero Content - Initially visible */}
          <div className="video-tagline absolute inset-0 flex flex-col max-md:gap-8 md:flex-row pb-20 items-center md:justify-between justify-center px-4 md:px-16 lg:px-24 xl:px-32 z-20 transition-opacity duration-700">
            <div className="flex flex-col items-center md:items-start max-md:max-w-2xl">
              <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-emerald-600/50 bg-emerald-900/30 backdrop-blur-sm text-white text-xs">
                <div className="flex items-center">
                  <Leaf className="w-5 h-5 text-green-400 mr-1" />
                  <Sprout className="w-5 h-5 text-lime-400 -translate-x-1" />
                  <TreePine className="w-5 h-5 text-emerald-400 -translate-x-2" />
                </div>
                <p className="-translate-x-1 font-semibold">Join the sustainable revolution</p>
              </div>
              <h1 className="text-center md:text-left text-4xl leading-tight sm:text-5xl sm:leading-[68px] md:text-6xl md:leading-[84px] font-bold max-w-xl text-slate-50 drop-shadow-lg mt-4">
                Transforming Waste Into Wonder
              </h1>
              <p className="text-center md:text-left text-base sm:text-lg text-slate-200 max-w-lg mt-4 font-medium px-2 sm:px-0">
                Pioneering eco-friendly solutions through bio-plastics, handcrafted upcycled products, and zero-waste event services. Building a sustainable future, one innovation at a time.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-8 text-sm w-full sm:w-auto px-4 sm:px-0">
                <a href="#our-verticals" className="bg-emerald-600 hover:bg-emerald-700 text-white active:scale-95 rounded-full px-8 h-12 font-bold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto flex items-center justify-center">
                  Explore Our Verticals
                </a>
                <Link href="/impact" className="flex items-center justify-center gap-2 border-2 border-emerald-500/50 bg-white/10 backdrop-blur-sm active:scale-95 hover:bg-white/20 transition text-white rounded-full px-7 h-12 font-semibold w-full sm:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video-icon lucide-video">
                    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/>
                    <rect x="2" y="6" width="14" height="12" rx="2"/>
                  </svg>
                  <span>Our Impact</span>
                </Link>
              </div>
            </div>
            <Image
              src="/logo.png"
              alt="Revolve Green Logo"
              width={500}
              height={500}
              className="hidden md:block max-w-xs sm:max-w-sm lg:max-w-md w-full h-auto object-contain drop-shadow-2xl brightness-0 invert"
              priority
            />
          </div>

          {/* Card Container */}
          <div
            className="card-container hidden md:flex relative w-full md:w-[70%] lg:w-[55%] flex-col md:flex-row gap-4 md:gap-0 z-20"
            style={{ perspective: '1000px' }}
          >

            {/* Card - 1 */}
            <div
              className="card-flip-container relative w-full md:flex-1 md:w-auto max-w-md md:max-w-none mx-auto bg-gray-800"
              style={{
                aspectRatio: '4/7',
                transformStyle: 'preserve-3d',
                transformOrigin: 'center'
              }}
              id="card-1"
            >
              {/* Card Front */}
              <div
                className="card-front absolute top-0 left-0 w-full h-full overflow-hidden rounded-[20px] md:rounded-tl-[20px] md:rounded-bl-[20px] md:rounded-tr-none md:rounded-br-none"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <Image
                  src="/image-1.jpg"
                  alt="Seed"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content overlay - visible when cards are separated */}
                <div className="card-content-overlay absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-500">
                  <Sprout className="w-12 h-12 md:w-16 md:h-16 text-green-400 mb-4" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                    The Seed
                  </h3>
                </div>
              </div>

              {/* Card Back */}
              <div
                className="card-back absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 rounded-[20px] md:rounded-tl-[20px] md:rounded-bl-[20px] md:rounded-tr-none md:rounded-br-none overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  position: 'relative'
                }}
              >
                {/* Background decorative element */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl"></div>

                {/* Step label in corner */}
                <div className="absolute top-4 left-4 text-green-300/60 font-bold text-xs tracking-widest">
                  STEP-1
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8">
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <Sprout className="w-16 h-16 md:w-20 md:h-20 text-green-300 mb-6" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Sowed</h3>
                    <p className="text-sm md:text-base text-green-50/90 leading-relaxed max-w-[280px] text-center">
                      The beginning of our journey—planting the seed of change through awareness and intention.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            {/* Card - 2 */}
            <div
              className="card-flip-container relative w-full md:flex-1 md:w-auto max-w-md md:max-w-none mx-auto bg-gray-800"
              style={{
                aspectRatio: '4/7',
                transformStyle: 'preserve-3d',
                transformOrigin: 'center'
              }}
              id="card-2"
            >
              {/* Card Front */}
              <div
                className="card-front absolute top-0 left-0 w-full h-full overflow-hidden rounded-[20px]"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <Image
                  src="/image-2.jpg"
                  alt="Growing Tree"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content overlay - visible when cards are separated */}
                <div className="card-content-overlay absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-500">
                  <Leaf className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mb-4" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                    Sowed
                  </h3>
                </div>
              </div>

              {/* Card Back */}
              <div
                className="card-back absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lime-600 via-lime-500 to-green-500 rounded-[20px] overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  position: 'relative'
                }}
              >
                {/* Background decorative element */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-700/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"></div>

                {/* Step label in corner */}
                <div className="absolute top-4 left-4 text-emerald-900/60 font-bold text-xs tracking-widest">
                  STEP-2
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8">
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <TreePine className="w-16 h-16 md:w-20 md:h-20 text-emerald-900 mb-6" />
                    <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">Growing Tree</h3>
                    <p className="text-sm md:text-base text-emerald-900/90 leading-relaxed max-w-[280px] text-center">
                      Taking action—nurturing growth through consistent effort and dedication to our mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            {/* Card - 3 */}
            <div
              className="card-flip-container relative w-full md:flex-1 md:w-auto max-w-md md:max-w-none mx-auto bg-gray-800"
              style={{
                aspectRatio: '4/7',
                transformStyle: 'preserve-3d',
                transformOrigin: 'center'
              }}
              id="card-3"
            >
              {/* Card Front */}
              <div
                className="card-front absolute top-0 left-0 w-full h-full overflow-hidden rounded-[20px] md:rounded-tr-[20px] md:rounded-br-[20px] md:rounded-tl-none md:rounded-bl-none"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <Image
                  src="/image-3.jpg"
                  alt="Tree"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content overlay - visible when cards are separated */}
                <div className="card-content-overlay absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-500">
                  <TreePine className="w-12 h-12 md:w-16 md:h-16 text-purple-400 mb-4" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                    The Impact Created
                  </h3>
                </div>
              </div>

              {/* Card Back */}
              <div
                className="card-back absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 rounded-[20px] md:rounded-tr-[20px] md:rounded-br-[20px] md:rounded-tl-none md:rounded-bl-none overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  position: 'relative'
                }}
              >
                {/* Background decorative element */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-lime-300/10 rounded-full blur-2xl"></div>

                {/* Step label in corner */}
                <div className="absolute top-4 left-4 text-green-200/60 font-bold text-xs tracking-widest">
                  STEP-3
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8">
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <Leaf className="w-16 h-16 md:w-20 md:h-20 text-green-200 mb-6" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">The Impact Created</h3>
                    <p className="text-sm md:text-base text-green-50/90 leading-relaxed max-w-[280px] text-center">
                      Creating change—transforming waste into wonder and building a sustainable future together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

    </section>
    </>
  );
}

'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-screen overflow-x-hidden bg-black"
    >

      <main className="container mx-auto bg-black text-white">

        {/* Intro */}
        <section className="relative min-h-screen flex items-center justify-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold">Hey Jay Intro</h1>
        </section>


        {/* Cards Section [Sticky] */}
        <section className="flex justify-center items-center min-h-screen px-4 md:px-8">

          {/* Sticky Header */}
          <div className="absolute top-[10%] md:top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 px-4">
            <h1 className='text-center text-xl md:text-3xl lg:text-4xl opacity-0'>Three Pillars with one Purpose</h1>
          </div>

          {/* Card Container */}
          <div
            className="relative w-full md:w-[90%] lg:w-[75%] flex flex-col md:flex-row gap-4 md:gap-0"
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
                  // backfaceVisibility: 'hidden',
                  // transform: 'rotateY(180deg)'
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
                  // backfaceVisibility: 'hidden',
                  // transform: 'rotateY(180deg)'
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
                  // backfaceVisibility: 'hidden',
                  // transform: 'rotateY(180deg)'
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

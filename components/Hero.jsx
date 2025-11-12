'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-screen overflow-hidden flex items-center justify-center"
    >
      
      <main className="container bg-black text-white">

        {/* Intro */}
        <section className="relative p-2 text-center content-center">
          <h1>Hey Jay Intro</h1>
        </section>
          

        {/* Cards Section [Stikcy] */}
        <section className="flex justify-center items-center min-h-screen">

          {/* Stikcy Header */}
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
            <h1 className='text-center opacity-0'>Three Pillers with one Purpose </h1>
          </div>

          {/* Card Container  */}
          <div className="relative w-[75%] flex gap-0" style={{ perspective: '1000px' }}>

            {/* Card - 1  */}
            <div
              className="relative flex-1 rounded-tl-[20px] rounded-bl-[20px] overflow-hidden bg-gray-800"
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
                <img
                  src="/seed.jpg"
                  alt="Seed"
                  className="w-full h-full object-cover"
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
                <span>( 01 )</span>
                <p>Seed</p>
              </div>
            </div>


            {/* Card - 2  */}
            <div
              className="relative flex-1 overflow-hidden bg-gray-800"
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
                <img
                  src="/growing tree.jpg"
                  alt="Growing Tree"
                  className="w-full h-full object-cover"
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
                <span>( 02 )</span>
                <p>Grow</p>
              </div>
            </div>


            {/* Card - 3  */}
            <div
              className="relative flex-1 rounded-tr-[20px] rounded-br-[20px] overflow-hidden bg-gray-800"
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
                <img
                  src="/tree.jpg"
                  alt="Tree"
                  className="w-full h-full object-cover"
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
                <span>( 03 )</span>
                <p>Tree</p>
              </div>
            </div>

          </div>
        </section>


        {/* Outro */}
        <section class="relative p-2 text-center content-center">
          <h1> Hey jay outro</h1>
        </section>
      </main>

      
    </section>
  );
}

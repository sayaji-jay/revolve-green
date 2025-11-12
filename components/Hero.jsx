'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-screen overflow-hidden flex items-center justify-center"
    >
      
      <main className="container">
        <section className="intro">
          <h1>Hey Jay Intro</h1>
        </section>
          
        <section className="sticky">
          <div className="sticky-headear">
            three pillers for one purpose 
          </div>

          {/* Crard Container  */}
          <div className="card-container">

            {/* Card - 1  */}
            <div className="card" id="card-1">
              <div className="card-front">
                <Image src={"/seed.jpg"} width={200} height={200}></Image>
              </div>
              <div className="card-back">
                <span>( 01 )</span>
                <p>Seed</p>
              </div>
            </div>


            {/* Card - 2  */}
            <div className="card" id="card-2">
              <div className="card-front">
                <Image src={"/growing tree.jpg"} width={200} height={200}></Image>
              </div>
              <div className="card-back">
                <span>( 01 )</span>
                <p>Seed</p>
              </div>
            </div>


            {/* Card - 3  */}
            <div className="card" id="card-3">
              <div className="card-front">
                <Image src={"/tree.jpg"} width={200} height={200}></Image>
              </div>
              <div className="card-back">
                <span>( 01 )</span>
                <p>Seed</p>
              </div>
            </div>

           

          </div>
        </section>

        <section class="outro">
          <h1> Hey jay outro</h1>
        </section>
      </main>

      
    </section>
  );
}

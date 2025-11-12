'use client';
import { Sprout, Leaf, TreePine } from 'lucide-react';

export default function Hero() {
  const cards = [
    {
      id: 1,
      title: 'The Seed',
      icon: <Sprout className="w-12 h-12 text-green-400" />,
    },
    {
      id: 2,
      title: 'Sowed',
      icon: <Leaf className="w-12 h-12 text-blue-400" />,
    },
    {
      id: 3,
      title: 'The Impact Created',
      icon: <TreePine className="w-12 h-12 text-purple-400" />,
    },
  ];

  return (
    <section
      id="home"
      className="relative h-screen w-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center justify-center text-center space-y-2"
            >
              <div>{card.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-full px-4 py-2 inline-block mx-auto">
          <p className="text-xs sm:text-sm text-white/90 font-light leading-snug">
            From a simple idea to a movement of change, we&apos;re transforming waste into wonder,
            one piece at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

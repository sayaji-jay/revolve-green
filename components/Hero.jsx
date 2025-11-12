export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-screen h-screen object-cover"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Our Story Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-12 sm:mb-16 md:mb-20 tracking-tight">
          Our Story
        </h1>

        {/* Main Heading - Side by Side */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20 flex-wrap">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            The Seed
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Sowed
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            & The Impact Created
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed max-w-4xl mx-auto px-4">
          From a simple idea to a movement of change, we're transforming waste into wonder,
          one piece at a time.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-[200vh] py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6">
            Hi Jay
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto px-4">
            Welcome to Revolve Green - Scroll down to see the background zoom effect
          </p>
        </section>

        {/* Content Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
                Card {item}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                This is a sample card to demonstrate the mobile responsive design and
                scroll zoom effect. The background will gradually zoom as you scroll.
              </p>
            </div>
          ))}
        </div>

        {/* Additional Content for Scroll */}
        <section className="mt-12 sm:mt-16 md:mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Keep Scrolling
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
            Notice how the forest background smoothly zooms in as you scroll down the page.
            The design is fully responsive across all device sizes.
          </p>
        </section>
      </div>
    </div>
  );
}

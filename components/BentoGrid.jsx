import Image from "next/image";

export default function BentoGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">

        {/* Card 1 - Social Media 10x Faster */}
        <div className="bg-purple-500 rounded-2xl p-8 md:col-span-2 lg:row-span-2 flex flex-col justify-between">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
            Social Media <span className="text-yellow-300 italic">10x</span> Faster with AI
          </h1>
          <div className="mt-auto">
            <Image
              src="/assets/images/illustration-five-stars.webp"
              alt="Five stars"
              width={200}
              height={40}
              className="mb-4"
            />
            <p className="text-white text-lg">Over 4,000 5-star reviews</p>
          </div>
        </div>

        {/* Card 2 - Multiple Platforms */}
        <div className="bg-white rounded-2xl p-8 md:col-span-2 overflow-hidden">
          <Image
            src="/assets/images/illustration-multiple-platforms.webp"
            alt="Multiple platforms"
            width={400}
            height={300}
            className="w-full h-auto mb-4"
          />
          <h2 className="text-2xl md:text-3xl font-medium text-black">
            Manage multiple accounts and platforms.
          </h2>
        </div>

        {/* Card 3 - Consistent Schedule */}
        <div className="bg-yellow-300 rounded-2xl p-8 lg:row-span-2 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-medium text-black mb-6">
            Maintain a consistent posting schedule.
          </h2>
          <Image
            src="/assets/images/illustration-consistent-schedule.webp"
            alt="Consistent schedule"
            width={300}
            height={300}
            className="w-full h-auto mt-auto"
          />
        </div>

        {/* Card 4 - Schedule Posts */}
        <div className="bg-purple-100 rounded-2xl p-8 lg:row-span-2 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-medium text-black mb-6">
            Schedule to social media.
          </h2>
          <Image
            src="/assets/images/illustration-schedule-posts.webp"
            alt="Schedule posts"
            width={300}
            height={200}
            className="w-full h-auto mb-4"
          />
          <p className="text-black text-lg mt-auto">
            Optimize post timings to publish content at the perfect time for your audience.
          </p>
        </div>

        {/* Card 5 - Grow Followers */}
        <div className="bg-purple-500 rounded-2xl p-8 md:col-span-2 overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
            Grow followers with non-stop content.
          </h2>
          <Image
            src="/assets/images/illustration-grow-followers.webp"
            alt="Grow followers"
            width={300}
            height={200}
            className="w-full h-auto"
          />
        </div>

        {/* Card 6 - Audience Growth */}
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-4xl md:text-5xl font-medium text-black mb-4">
            &gt;56% <span className="block text-xl md:text-2xl mt-2">faster audience growth</span>
          </h2>
          <Image
            src="/assets/images/illustration-audience-growth.webp"
            alt="Audience growth"
            width={200}
            height={150}
            className="w-full h-auto mt-4"
          />
        </div>

        {/* Card 7 - Create Content Quicker */}
        <div className="bg-yellow-300 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-medium text-black mb-4">
            Create and schedule content <span className="italic text-purple-600">quicker.</span>
          </h2>
          <Image
            src="/assets/images/illustration-create-post.webp"
            alt="Create post"
            width={200}
            height={150}
            className="w-full h-auto mt-4"
          />
        </div>

        {/* Card 8 - AI Content */}
        <div className="bg-yellow-300 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-medium text-black mb-6">
            Write your content using AI.
          </h2>
          <Image
            src="/assets/images/illustration-ai-content.webp"
            alt="AI content"
            width={200}
            height={150}
            className="w-full h-auto mt-4"
          />
        </div>

      </div>
    </div>
  );
}

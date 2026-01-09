'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/lib/sanity.client';
import { urlFor } from '@/lib/sanity.image';
import { Calendar, User, ArrowRight, ChevronRight } from 'lucide-react';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "blog"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          author,
          publishedAt,
          excerpt,
          mainImage,
          categories
        }`;
        const data = await client.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 pb-24">
        {/* Green Glow Effects */}
        <div className="absolute top-28 -z-1 left-1/4 size-72 bg-green-600 blur-[300px]"></div>
        <div className="absolute top-40 -z-1 right-1/4 size-96 bg-emerald-500 blur-[350px]"></div>

        {/* Badge */}
        <div className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 bg-green-600/80 backdrop-blur-sm shadow-lg">
          <span className="bg-green-800 text-white text-xs px-3.5 py-1 rounded-full">
            INSIGHTS
          </span>
          <p className="flex items-center gap-1 text-white">
            <span>Stay updated with sustainability</span>
            <ChevronRight className="w-4 h-4" />
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-bold max-w-4xl text-center mt-6 text-gray-900 drop-shadow-lg">
          OUR BLOG
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-center text-gray-900 max-w-3xl mt-8 leading-relaxed drop-shadow-sm font-semibold">
          Discover eco-friendly tips, sustainability insights, and the latest in green innovation
        </p>
      </div>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No posts yet</h2>
            <p className="text-gray-600 text-lg">Check back soon for our latest updates!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-white/95 backdrop-blur-sm border-2 border-green-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:border-green-400"
              >
                {/* Image */}
                {post.mainImage && (
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.mainImage.alt || post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Categories */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.slice(0, 2).map((category, idx) => (
                        <span
                          key={idx}
                          className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  )}

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/lib/sanity.client';
import { urlFor } from '@/lib/sanity.image';
import { PortableText } from '@portabletext/react';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import ShareButton from '@/components/ShareButton';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const query = `*[_type == "blog" && slug.current == $slug][0] {
      title,
      excerpt,
      categories,
      mainImage
    }`;
    const post = await client.fetch(query, { slug });

    if (!post) {
      return {
        title: 'Post Not Found | Revolve Green',
        description: 'The blog post you are looking for does not exist.',
      };
    }

    return {
      title: `${post.title} | Revolve Green Blog`,
      description: post.excerpt || `Read ${post.title} on Revolve Green Blog - Your source for sustainability and eco-friendly insights.`,
      keywords: post.categories ? post.categories.join(', ') : 'sustainability, eco-friendly, green living',
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post | Revolve Green',
    };
  }
}

const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8 relative w-full h-96 rounded-2xl overflow-hidden">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Blog image'}
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-700 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-700 underline"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

export default async function BlogPost({ params }) {
  const { slug } = await params;

  let post = null;
  try {
    const query = `*[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author,
      publishedAt,
      excerpt,
      mainImage,
      body,
      categories
    }`;
    post = await client.fetch(query, { slug });
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
        <Link
          href="/blog"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      {post.mainImage && (
        <div className="relative w-full h-[500px] mb-12">
          <Image
            src={urlFor(post.mainImage).width(1920).height(1080).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </Link>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, idx) => (
              <span
                key={idx}
                className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b-2 border-gray-200">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="font-semibold">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <ShareButton title={post.title} />
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-gray-700 font-medium mb-8 leading-relaxed italic border-l-4 border-green-600 pl-6 py-2">
            {post.excerpt}
          </p>
        )}

        {/* Body Content */}
        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-700 via-emerald-700 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Green?</h2>
          <p className="text-lg mb-6">
            Explore our eco-friendly products and join the sustainability movement
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-all shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </article>
    </div>
  );
}

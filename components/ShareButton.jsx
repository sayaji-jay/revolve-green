'use client';

import { Share2 } from 'lucide-react';

export default function ShareButton({ title }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
    >
      <Share2 className="w-5 h-5" />
      Share
    </button>
  );
}

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative z-50 w-full py-4 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 max-w-7xl mx-auto">
        {/* Left Side - Copyright & Developer Info */}
        <p className="text-green-900 font-bold text-sm sm:text-base text-center sm:text-left">
          © 2025 Revolve Green. All rights reserved. | Developed by{' '}
          <a
            href="https://www.sayajiinfotech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors underline decoration-green-700 hover:decoration-green-500"
          >
            Sayaji Infotech
          </a>
        </p>

        {/* Right Side - Social Media Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 hover:text-green-900 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

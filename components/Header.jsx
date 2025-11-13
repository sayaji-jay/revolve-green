'use client';

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const menuItems = ['Home', 'Bio Plastics', 'Handmade Products', 'Sajja Decor', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      // Only enable scroll effect on home page
      if (isHomePage) {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      } else {
        // On other pages, always keep the header in "scrolled" state (solid background)
        setScrolled(true);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-green-800' : 'text-white'
              }`}
              style={{ fontFamily: 'var(--font-comic), cursive' }}
            >
              Revolve Green
            </h1>
          </div>

          {/* Desktop Menu Items */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6 md:space-x-8">
              {menuItems.map((item) => {
                const getHref = () => {
                  if (item === 'Home') return '/';
                  if (item === 'Bio Plastics') return '/bio-plastics';
                  if (item === 'Handmade Products') return '/handmade-products';
                  if (item === 'Sajja Decor') return '/sajja-decor';
                  return `#${item.toLowerCase()}`;
                };

                const isLink = ['Home', 'Bio Plastics', 'Handmade Products', 'Sajja Decor'].includes(item);

                return (
                  <li key={item}>
                    {isLink ? (
                      <Link
                        href={getHref()}
                        className={`text-sm md:text-base font-bold transition-colors duration-300 ${
                          scrolled
                            ? 'text-green-800 hover:text-green-600'
                            : 'text-white hover:text-green-200'
                        }`}
                        style={{ fontFamily: 'var(--font-comic), cursive' }}
                      >
                        {item}
                      </Link>
                    ) : (
                      <a
                        href={getHref()}
                        className={`text-sm md:text-base font-bold transition-colors duration-300 ${
                          scrolled
                            ? 'text-green-800 hover:text-green-600'
                            : 'text-white hover:text-green-200'
                        }`}
                        style={{ fontFamily: 'var(--font-comic), cursive' }}
                      >
                        {item}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className={`md:hidden p-2 transition-colors duration-300 ${
                  scrolled
                    ? 'text-green-800 hover:text-green-600'
                    : 'text-white hover:text-green-200'
                }`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <SheetHeader>
                <SheetTitle className="text-green-800 font-bold text-xl" style={{ fontFamily: 'var(--font-comic), cursive' }}>
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8">
                <ul className="flex flex-col space-y-6">
                  {menuItems.map((item) => {
                    const getHref = () => {
                      if (item === 'Home') return '/';
                      if (item === 'Bio Plastics') return '/bio-plastics';
                      if (item === 'Handmade Products') return '/handmade-products';
                      if (item === 'Sajja Decor') return '/sajja-decor';
                      return `#${item.toLowerCase()}`;
                    };

                    const isLink = ['Home', 'Bio Plastics', 'Handmade Products', 'Sajja Decor'].includes(item);

                    return (
                      <li key={item}>
                        {isLink ? (
                          <Link
                            href={getHref()}
                            onClick={() => setOpen(false)}
                            className="text-lg font-bold text-green-800 hover:text-green-600 transition-colors block"
                            style={{ fontFamily: 'var(--font-comic), cursive' }}
                          >
                            {item}
                          </Link>
                        ) : (
                          <a
                            href={getHref()}
                            onClick={() => setOpen(false)}
                            className="text-lg font-bold text-green-800 hover:text-green-600 transition-colors block"
                            style={{ fontFamily: 'var(--font-comic), cursive' }}
                          >
                            {item}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Faded Bottom Border - Only visible when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-800 to-transparent"></div>
      )}
    </header>
  );
}

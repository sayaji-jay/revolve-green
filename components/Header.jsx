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
  const menuItems = ['Home', 'Bio Plastics', 'Handmade Products', 'Sajja Decor', 'Teams', 'Donate', 'Contact'];

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
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            <img
              src="/logo.png"
              alt="Revolve Green Logo"
              className={`w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
            <h1
              className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-green-800' : 'text-white'
              }`}
              style={{ fontFamily: 'var(--font-comic), cursive' }}
            >
              Revolve Green
            </h1>
          </Link>

          {/* Desktop Menu Items */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6 md:space-x-8">
              {menuItems.map((item) => {
                const getHref = () => {
                  if (item === 'Home') return '/';
                  if (item === 'Bio Plastics') return '/bio-plastics';
                  if (item === 'Handmade Products') return '/handmade-products';
                  if (item === 'Sajja Decor') return '/sajja-decor';
                  if (item === 'Teams') return '/teams';
                  if (item === 'Donate') return '/donate';
                  if (item === 'Contact') return '/contact';
                  return `#${item.toLowerCase()}`;
                };

                const isActive = pathname === getHref();

                return (
                  <li key={item}>
                    <Link
                      href={getHref()}
                      className={`text-sm md:text-base font-bold transition-all duration-300 relative group ${
                        isActive
                          ? scrolled
                            ? 'text-green-600'
                            : 'text-green-300'
                          : scrolled
                          ? 'text-green-800 hover:text-green-600'
                          : 'text-white hover:text-green-200'
                      }`}
                      style={{ fontFamily: 'var(--font-comic), cursive' }}
                    >
                      {item}
                      <span className={`absolute left-0 -bottom-1 h-[3px] transition-all duration-300 ${
                        isActive
                          ? scrolled
                            ? 'bg-green-600 w-full'
                            : 'bg-green-300 w-full'
                          : scrolled
                          ? 'bg-green-600 w-0 group-hover:w-full'
                          : 'bg-white w-0 group-hover:w-full'
                      }`}></span>
                    </Link>
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
            <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-gradient-to-br from-white to-green-50">
              <SheetHeader className="border-b border-green-200 pb-4">
                <SheetTitle className="text-green-800 font-bold text-2xl flex items-center gap-2" style={{ fontFamily: 'var(--font-comic), cursive' }}>
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-8 h-8 object-contain"
                  />
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8">
                <ul className="flex flex-col space-y-2">
                  {menuItems.map((item) => {
                    const getHref = () => {
                      if (item === 'Home') return '/';
                      if (item === 'Bio Plastics') return '/bio-plastics';
                      if (item === 'Handmade Products') return '/handmade-products';
                      if (item === 'Sajja Decor') return '/sajja-decor';
                      if (item === 'Teams') return '/teams';
                      if (item === 'Donate') return '/donate';
                      if (item === 'Contact') return '/contact';
                      return `#${item.toLowerCase()}`;
                    };

                    const isActive = pathname === getHref();
                    const isLink = ['Home', 'Bio Plastics', 'Handmade Products', 'Sajja Decor', 'Teams', 'Donate', 'Contact'].includes(item);

                    return (
                      <li key={item}>
                        {isLink ? (
                          <Link
                            href={getHref()}
                            onClick={() => setOpen(false)}
                            className={`text-lg font-bold transition-all block relative group py-3 px-4 rounded-lg ${
                              isActive
                                ? 'bg-green-600 text-white shadow-lg'
                                : 'text-green-800 hover:bg-green-100 hover:text-green-700'
                            }`}
                            style={{ fontFamily: 'var(--font-comic), cursive' }}
                          >
                            <span className="flex items-center justify-between">
                              {item}
                              {isActive && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </span>
                          </Link>
                        ) : (
                          <a
                            href={getHref()}
                            onClick={() => setOpen(false)}
                            className="text-lg font-bold text-green-800 hover:bg-green-100 hover:text-green-700 transition-all block relative group py-3 px-4 rounded-lg"
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

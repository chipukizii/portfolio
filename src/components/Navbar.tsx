import { useEffect, useState } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Skills',
    href: '#skills'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
            <Code className="w-6 h-6 text-amber-500" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight font-serif">
            Gilton<span className="text-amber-500">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(link.href.substring(1));
                if (element) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="text-sm font-medium text-zinc-400 hover:text-amber-500 transition-colors relative group">

              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </a>
          )}
          <a
            href="https://wa.me/254111823630"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-medium text-zinc-950 bg-amber-500 rounded-full hover:bg-amber-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)]">

            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu">

          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            className="md:hidden bg-zinc-950 border-b border-zinc-800 overflow-hidden">

            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) =>
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const element = document.getElementById(link.href.substring(1));
                    if (element) {
                      const offset = 80;
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = element.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;

                      setTimeout(() => {
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }, 100);
                    }
                  }}
                  className="text-lg font-medium text-zinc-300 hover:text-amber-500 transition-colors">

                  {link.name}
                </a>
              )}
              <a
                href="https://wa.me/254111823630"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-center font-medium text-zinc-950 bg-amber-500 rounded-lg hover:bg-amber-400 transition-colors"
                onClick={() => setIsOpen(false)}>

                Hire Me
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}
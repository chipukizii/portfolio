import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react';
import { SoftwareEngineeringSkeleton } from './SoftwareEngineeringSkeleton';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Subtle background orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-amber-600/8 rounded-full blur-[100px]" />
      </div>

      {/* ── Two-column grid ── */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-28 pb-16">

        {/* ── LEFT: Text content ── */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-amber-600 dark:text-amber-500 uppercase bg-amber-500/10 rounded-full border border-amber-500/20 font-mono backdrop-blur-sm shadow-sm">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white mb-6 font-heading tracking-tight leading-tight"
          >
            Gilton{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
              Koech
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 max-w-lg mb-10 leading-relaxed font-sans font-medium"
          >
            Building high-performance digital experiences with Python and JavaScript. I specialize in crafting robust backend systems using Django, Flask, and FastAPI, paired with modern React frontends.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
          >
            <a
              href="https://drive.google.com/file/d/1d3k6yuZlmho-nvu8sIgGAZlUgyo9AGnN/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-amber-500 text-zinc-950 font-semibold rounded-full hover:bg-amber-400 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/gilton-koech-8263b7365"
                className="p-3.5 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 rounded-full hover:text-zinc-900 dark:hover:text-white hover:border-amber-500/50 hover:bg-white/80 dark:hover:bg-zinc-900 transition-all hover:-translate-y-1 backdrop-blur-sm shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/chipukizii"
                className="p-3.5 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 rounded-full hover:text-zinc-900 dark:hover:text-white hover:border-amber-500/50 hover:bg-white/80 dark:hover:bg-zinc-900 transition-all hover:-translate-y-1 backdrop-blur-sm shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Skeleton diagram panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center w-full h-full min-h-[280px] lg:min-h-[420px] relative mt-10 lg:mt-0"
        >
          {/* Faint card background */}
          <div className="absolute inset-0 rounded-3xl bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/40 backdrop-blur-sm shadow-xl" />
          <SoftwareEngineeringSkeleton />
        </motion.div>

      </div>

      {/* Scroll arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 flex justify-center pb-8 animate-bounce text-zinc-500 dark:text-zinc-400"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
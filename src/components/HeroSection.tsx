import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}>

          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-amber-500 uppercase bg-amber-500/10 rounded-full border border-amber-500/20">
            Software Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.1
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-serif tracking-tight">

          Gilton{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Koech
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">

          Building digital experiences that make a difference. I craft robust,
          scalable, and beautiful web applications with modern technologies.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href="#"
            className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 text-zinc-950 font-semibold rounded-full hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1">

            <Download className="w-5 h-5" />
            Download CV
          </a>
          <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
            <a
              href="https://www.linkedin.com/in/gilton-koech-8263b7365"
              className="p-3.5 text-zinc-400 border border-zinc-800 rounded-full hover:text-white hover:border-amber-500/50 hover:bg-zinc-900 transition-all hover:-translate-y-1"
              aria-label="LinkedIn">

              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/chipukizii"
              className="p-3.5 text-zinc-400 border border-zinc-800 rounded-full hover:text-white hover:border-amber-500/50 hover:bg-zinc-900 transition-all hover:-translate-y-1"
              aria-label="GitHub">

              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500">

        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>);

}
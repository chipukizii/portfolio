import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, ArrowRight } from 'lucide-react';
export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
            Let's Work <span className="text-amber-500">Together</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'm always open to
            discussing new projects, creative ideas, or opportunities to be part
            of your visions.
          </p>

          <a
            href="mailto:giltonkoech@email.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-zinc-950 font-bold rounded-full hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1 mb-12">

            <Mail className="w-5 h-5" />
            Say Hello
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="flex flex-col items-center gap-2 text-zinc-400 hover:text-amber-500 transition-colors group">

              <div className="p-4 bg-zinc-950 rounded-full border border-zinc-800 group-hover:border-amber-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center gap-2 text-zinc-400 hover:text-amber-500 transition-colors group">

              <div className="p-4 bg-zinc-950 rounded-full border border-zinc-800 group-hover:border-amber-500 transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center gap-2 text-zinc-400 hover:text-amber-500 transition-colors group">

              <div className="p-4 bg-zinc-950 rounded-full border border-zinc-800 group-hover:border-amber-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Twitter</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}
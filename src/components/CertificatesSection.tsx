import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

const certificates = [
  {
    title: "Web programming with python and JavaScript",
    issuer: "Edx Harvard",
    date: "Mar 2026",
    id: "HX-CS50W-2026-03-09-GK-7890",
    link: "#"
  },
  {
    title: "Anthropic certified prompt engineer with Claude",
    issuer: "Anthropic",
    date: "Mar 2026",
    id: "v8cn473d4u9o",
    link: "#"
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    date: "Mar 2026",
    id: "kc9o6knwwvx9",
    link: "#"
  },
  {
    title: "Introduction to generative AI and agents",
    issuer: "Microsoft",
    date: "Jan 2026",
    id: null,
    link: "#"
  },
  {
    title: "Certified python basic",
    issuer: "HackerRank",
    date: "Nov 2025",
    id: null,
    link: "#"
  }
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            Licenses & <span className="text-amber-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)]"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  {cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-zinc-500 hover:text-amber-500 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-serif group-hover:text-amber-500 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-zinc-400 font-medium mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-500/60" />
                  {cert.issuer}
                </p>

                <div className="mt-auto pt-4 border-t border-zinc-800/50 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <Calendar className="w-4 h-4" />
                    Issued {cert.date}
                  </div>
                  {cert.id && (
                    <div className="text-xs text-zinc-600 font-mono truncate">
                      ID: {cert.id}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

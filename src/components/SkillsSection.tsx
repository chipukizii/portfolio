import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  GitBranch,
  Globe,
  Cpu } from
'lucide-react';
const skills = [
{
  name: 'React',
  icon: <Code2 className="w-6 h-6" />,
  level: 'Advanced'
},
{
  name: 'TypeScript',
  icon: <Terminal className="w-6 h-6" />,
  level: 'Advanced'
},
{
  name: 'JavaScript',
  icon: <Code2 className="w-6 h-6" />,
  level: 'Advanced'
},
{
  name: 'Python',
  icon: <Terminal className="w-6 h-6" />,
  level: 'Advanced'
},
{
  name: 'Django',
  icon: <Server className="w-6 h-6" />,
  level: 'Advanced'
},
{
  name: 'Flask',
  icon: <Server className="w-6 h-6" />,
  level: 'Advanced'
},
{
  name: 'FastAPI',
  icon: <Server className="w-6 h-6" />,
  level: 'Advanced'
},
{
  name: 'Node.js',
  icon: <Server className="w-6 h-6" />,
  level: 'Advanced'
},
{
  name: 'Tailwind CSS',
  icon: <Layout className="w-6 h-6" />,
  level: 'Advanced'
},
{
  name: 'HTML/CSS',
  icon: <Globe className="w-6 h-6" />,
  level: 'Advanced'
},
{
  name: 'Git',
  icon: <GitBranch className="w-6 h-6" />,
  level: 'Advanced'
},
{
  name: 'PostgreSQL',
  icon: <Database className="w-6 h-6" />,
  level: 'Advanced'
},
{
  name: 'MongoDB',
  icon: <Database className="w-6 h-6" />,
  level: 'Advanced'
},
{
  name: 'REST APIs',
  icon: <Cpu className="w-6 h-6" />,
  level: 'Advanced'
}];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
          }}
          className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            Technical <span className="text-amber-500">Skills</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My technical toolkit includes a wide range of languages, frameworks,
            and tools for full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.05
            }}
            className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-amber-500/50 hover:bg-zinc-900 transition-all group flex flex-col items-center text-center">

              <div className="p-3 bg-zinc-800 rounded-lg text-zinc-400 group-hover:text-amber-500 group-hover:bg-amber-500/10 transition-colors mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {skill.name}
              </h3>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">
                {skill.level}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
const projects = [
  {
    title: 'Sisi Kwa Sisi',
    description:
      'NGO website providing healthcare, education, and emergency support to vulnerable communities in Kenya.',
    tags: ['React', 'Tailwind CSS', 'Responsive'],
    link: 'https://sisi-kwa-sisii.vercel.app/',
    image: '/projects/sisi.png',
    color: 'from-green-500 to-emerald-700'
  },
  {
    title: 'Daycare Services',
    description:
      'A comprehensive platform for daycare service management, scheduling, and booking for parents.',
    tags: ['html,css,javascript', 'django', 'Full Stack'],
    link: 'https://daycare-services-1.onrender.com/',
    image: '/projects/daycare.png',
    color: 'from-pink-500 to-rose-700'
  },
  {
    title: 'Rotich Store',
    description:
      'Full-featured online shopping platform with product catalog, cart management, and secure checkout.',
    tags: ['html,css,javascript', 'django', 'Full Stack'],
    link: 'https://rotichstore-2.onrender.com/',
    image: '/projects/rotich.png',
    color: 'from-blue-500 to-indigo-700'
  },
  {
    title: 'Simoti High School',
    description:
      'Informational portal for a high school featuring news updates, events calendar, and academic resources.',
    tags: ['html,css,javascript', 'django', 'Full Stack'],
    link: 'https://simoti-high-school.onrender.com',
    image: '/projects/simoti.png',
    color: 'from-orange-500 to-red-700'
  },
  {
    title: 'Smart Pharmacy Management',
    description:
      'Inventory management system for pharmacies to track stock levels, manage orders, and generate reports.',
    tags: ['React', 'Django', 'PostgreSQL'],
    link: 'https://smartpharmacy.co.ke/',
    image: '/projects/pharmacy.png',
    color: 'from-teal-500 to-cyan-700'
  },
  {
    title: 'BursaryHub',
    description:
      'A transparent and efficient platform connecting students with Village Elders, Chiefs, and County Committees in one seamless application process.',
    tags: ['Django', 'HTML/CSS', 'Tailwind CSS', 'Full Stack'],
    link: 'https://smartbursariesmanagement.onrender.com',
    image: '/projects/bursary.png',
    color: 'from-indigo-500 to-purple-700'
  }];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6">
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
            Featured <span className="text-amber-500">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A selection of my recent work, ranging from non-profit initiatives
            to commercial applications.
          </p>
        </motion.div>

        {/* Top row: 2 featured projects, larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {projects.slice(0, 2).map((project, index) =>
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="group bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] hover:-translate-y-1 flex flex-col cursor-pointer">

              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white/70 group-hover:text-white group-hover:bg-white/20 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm mb-5 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) =>
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-amber-500/80 bg-amber-500/10 rounded-full border border-amber-500/20">

                      {tag}
                    </span>
                  )}
                </div>
              </div>
            </motion.a>
          )}
        </div>

        {/* Bottom row: 3 projects, equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(2).map((project, index) =>
            <motion.a
              key={index + 2}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: (index + 2) * 0.1
              }}
              className="group bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] hover:-translate-y-1 flex flex-col cursor-pointer">

              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white/70 group-hover:text-white group-hover:bg-white/20 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 font-serif group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) =>
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-amber-500/80 bg-amber-500/10 rounded-full border border-amber-500/20">

                      {tag}
                    </span>
                  )}
                </div>
              </div>
            </motion.a>
          )}
        </div>
      </div>
    </section>);

}
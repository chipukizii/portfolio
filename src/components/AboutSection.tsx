import { motion } from 'framer-motion';
import { Code2, Globe, Database } from 'lucide-react';
const stats = [
{
  label: 'Years Experience',
  value: '3+'
},
{
  label: 'Projects Completed',
  value: '5+'
},
{
  label: 'Happy Clients',
  value: '3+'
}];

const features = [
{
  icon: <Code2 className="w-6 h-6 text-amber-500" />,
  title: 'Clean Code',
  description:
  'Writing maintainable, scalable, and efficient code is my priority.'
},
{
  icon: <Globe className="w-6 h-6 text-amber-500" />,
  title: 'Modern Tech',
  description:
  'Utilizing the latest frameworks and tools to build robust applications.'
},
{
  icon: <Database className="w-6 h-6 text-amber-500" />,
  title: 'Full Stack',
  description:
  'Comfortable working with both frontend interfaces and backend logic.'
}];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
              About <span className="text-amber-500">Me</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I am a full-stack Python developer with hands-on experience
              building scalable web applications and APIs. My core stack includes
              Python frameworks such as Django, FastAPI, and Flask, combined with
              frontend technologies like React, JavaScript, HTML, and CSS.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I specialize in designing and developing RESTful APIs,
              integrating third-party services, and building microservices-based
              architectures. I have practical experience working with payment
              integrations, authentication systems (including social login), and
              database management using PostgreSQL and other relational databases.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I enjoy turning complex business requirements into efficient,
              maintainable solutions, with a focus on performance, security, and
              user experience. Whether working on backend systems, frontend
              interfaces, or full-stack applications, I aim to deliver reliable
              and scalable products.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I am continuously learning and improving my skills, staying up to
              date with modern development practices and tools to build
              high-quality software solutions.
            </p>

            <div className="grid grid-cols-3 gap-8 border-t border-zinc-800 pt-8">
              {stats.map((stat, index) =>
              <div key={index}>
                  <h3 className="text-3xl font-bold text-white mb-1 font-serif">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-zinc-500">{stat.label}</p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="grid gap-6">

            {features.map((feature, index) =>
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-colors group">

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-serif">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}
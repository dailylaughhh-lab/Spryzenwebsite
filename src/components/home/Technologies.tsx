import { motion } from 'motion/react';

export function Technologies() {
  const techStack = [
    {
      category: 'Mobile',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis'],
      color: 'from-green-500 to-teal-500',
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'AI & ML',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Computer Vision'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Technologies We Master</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to build future-proof solutions
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${stack.color} text-white rounded-lg mb-4`}>
                <h4 className="text-white">{stack.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            And many more technologies tailored to your specific needs
          </p>
        </motion.div>
      </div>
    </section>
  );
}

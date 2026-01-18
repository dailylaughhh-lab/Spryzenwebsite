import { Smartphone, Globe, Brain, Palette, Settings, HeadphonesIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps with exceptional user experiences and performance.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Scalable web applications built with modern frameworks and best practices.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Brain,
      title: 'AI & ML Solutions',
      description: 'Intelligent automation and machine learning solutions for business growth.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love and businesses need.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Settings,
      title: 'SaaS Development',
      description: 'End-to-end SaaS product development from concept to market.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: HeadphonesIcon,
      title: 'Maintenance & Support',
      description: '24/7 technical support and continuous improvement for your applications.',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

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
            <h2 className="mb-4">Our Services</h2>
            <p className="text-xl max-w-2xl mx-auto text-center">
              Comprehensive software solutions tailored to your business needs
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={item}
                className="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:gap-2 transition-all"
                >
                  Learn more
                  <span className="ml-1 group-hover:ml-0 transition-all">→</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
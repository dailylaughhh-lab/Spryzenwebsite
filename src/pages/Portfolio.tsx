import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Mobile App', 'Web App', 'AI/ML', 'SaaS'];

  const projects = [
    {
      title: 'FinTech Mobile Banking',
      description: 'Secure mobile banking application with real-time transactions, budgeting tools, and investment tracking.',
      category: 'Mobile App',
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      metrics: {
        users: '500K+',
        rating: '4.8/5',
        downloads: '1M+',
      },
    },
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Machine learning platform providing predictive analytics and business intelligence for enterprise clients.',
      category: 'AI/ML',
      tech: ['Python', 'TensorFlow', 'React', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      metrics: {
        accuracy: '95%',
        dataProcessed: '10TB+',
        clients: '50+',
      },
    },
    {
      title: 'E-commerce SaaS Platform',
      description: 'Multi-tenant e-commerce solution with inventory management, payment processing, and analytics.',
      category: 'SaaS',
      tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
      image: 'https://images.unsplash.com/photo-1702609342206-c37562b99740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      metrics: {
        stores: '1000+',
        revenue: '$10M+',
        uptime: '99.9%',
      },
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive patient management system with appointment scheduling, EHR, and telemedicine.',
      category: 'Web App',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      metrics: {
        hospitals: '25+',
        patients: '100K+',
        appointments: '500K+',
      },
    },
    {
      title: 'Fitness & Wellness App',
      description: 'Personalized fitness tracking app with AI-powered workout recommendations and nutrition planning.',
      category: 'Mobile App',
      tech: ['Flutter', 'Python', 'Firebase', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      metrics: {
        users: '250K+',
        workouts: '5M+',
        rating: '4.7/5',
      },
    },
    {
      title: 'Real Estate Marketplace',
      description: 'Property listing and management platform with virtual tours, mortgage calculators, and CRM.',
      category: 'Web App',
      tech: ['Vue.js', 'Django', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      metrics: {
        listings: '50K+',
        agents: '2K+',
        transactions: '$500M+',
      },
    },
    {
      title: 'Smart IoT Dashboard',
      description: 'Real-time monitoring and control system for IoT devices with predictive maintenance alerts.',
      category: 'AI/ML',
      tech: ['React', 'Python', 'InfluxDB', 'MQTT'],
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      metrics: {
        devices: '100K+',
        dataPoints: '1B+',
        clients: '30+',
      },
    },
    {
      title: 'Learning Management System',
      description: 'Comprehensive LMS with video streaming, assessments, progress tracking, and certifications.',
      category: 'SaaS',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Redis'],
      image: 'https://images.unsplash.com/photo-1702609342206-c37562b99740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      metrics: {
        students: '100K+',
        courses: '5K+',
        completion: '85%',
      },
    },
    {
      title: 'Supply Chain Tracker',
      description: 'End-to-end supply chain visibility platform with blockchain integration for transparency.',
      category: 'Web App',
      tech: ['React', 'Node.js', 'Ethereum', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      metrics: {
        shipments: '1M+',
        partners: '500+',
        efficiency: '+40%',
      },
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6">Our Portfolio</h1>
            <p className="text-xl text-center">
              Discover how we've helped businesses transform their ideas into successful digital products. Each project represents our commitment to excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-200 hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-2">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors">
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors">
                      <Github className="w-5 h-5 text-gray-900" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-primary-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-6">Ready to See Your Project Here?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create something amazing together. Start your journey with Spryzen Technologies today.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 font-medium glow-on-hover"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
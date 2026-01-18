import { motion } from 'motion/react';
import { Smartphone, Globe, Brain, Palette, Package, HeadphonesIcon, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Create powerful, user-friendly mobile applications that engage your audience and drive business growth.',
      features: [
        'Native iOS development (Swift, SwiftUI)',
        'Native Android development (Kotlin, Jetpack Compose)',
        'Cross-platform apps (React Native, Flutter)',
        'App Store & Google Play deployment',
        'Mobile app UI/UX design',
        'App performance optimization',
      ],
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Build scalable, high-performance web applications with modern frameworks and cloud infrastructure.',
      features: [
        'React, Next.js, Vue.js applications',
        'Progressive Web Apps (PWAs)',
        'RESTful & GraphQL APIs',
        'Backend development (Node.js, Python, Go)',
        'Database design & optimization',
        'Cloud deployment (AWS, Azure, GCP)',
      ],
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning Solutions',
      description: 'Leverage artificial intelligence to automate processes, gain insights, and make data-driven decisions.',
      features: [
        'Predictive analytics & forecasting',
        'Natural Language Processing (NLP)',
        'Computer vision & image recognition',
        'Recommendation systems',
        'Chatbots & virtual assistants',
        'Custom ML model development',
      ],
      color: 'from-pink-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    },
    {
      icon: Package,
      title: 'SaaS Product Development',
      description: 'End-to-end SaaS product development from concept to market, including architecture and scaling.',
      features: [
        'Multi-tenant architecture',
        'Subscription & payment integration',
        'Analytics & reporting dashboards',
        'API development & documentation',
        'User management & authentication',
        'Scalable cloud infrastructure',
      ],
      color: 'from-orange-500 to-yellow-500',
      image: 'https://images.unsplash.com/photo-1702609342206-c37562b99740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create beautiful, intuitive interfaces that users love and that drive engagement and conversions.',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'Visual design & branding',
        'Usability testing',
        'Design systems & component libraries',
        'Responsive & mobile-first design',
      ],
      color: 'from-teal-500 to-green-500',
      image: 'https://images.unsplash.com/photo-1702609342206-c37562b99740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    },
    {
      icon: HeadphonesIcon,
      title: 'Maintenance & Support',
      description: 'Ongoing technical support, monitoring, and continuous improvement to keep your applications running smoothly.',
      features: [
        '24/7 monitoring & incident response',
        'Regular security updates & patches',
        'Performance optimization',
        'Bug fixes & feature enhancements',
        'Database maintenance & backups',
        'Technical documentation',
      ],
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your goals, requirements, and constraints to create a detailed project roadmap.',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create intuitive interfaces and interactive prototypes for your approval.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our developers build your product using agile methodology with regular updates and feedback.',
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing ensures your product is bug-free, secure, and performs optimally.',
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'We handle the entire deployment process and ensure a smooth launch.',
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and continuous improvement to keep your product running smoothly.',
    },
  ];

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
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl">
              Comprehensive software development solutions tailored to your business needs. From mobile apps to AI-powered platforms, we deliver excellence in every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 bg-white rounded-xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl font-bold text-primary-100 mb-4">{item.step}</div>
                <h4 className="mb-3 text-gray-900">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how we can help you achieve your goals with our expert services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl glow-on-hover group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
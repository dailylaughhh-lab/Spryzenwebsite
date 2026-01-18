import { motion } from 'motion/react';
import { Target, Eye, Award, Users, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses with innovative software solutions that drive growth and efficiency.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the global leader in transforming ideas into powerful digital products.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in code quality, design, and delivery.',
    },
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Expert Team Members' },
    { icon: Award, value: '200+', label: 'Successful Projects' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
    { icon: Clock, value: '8+', label: 'Years of Excellence' },
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Founded',
      description: 'Started with a vision to revolutionize software development.',
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Expanded services to international markets.',
    },
    {
      year: '2020',
      title: 'AI Integration',
      description: 'Pioneered AI and ML solutions for enterprise clients.',
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a top software development agency.',
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6">About Spryzen Technologies</h1>
            <p className="text-xl mb-8 text-center">
              We are a team of passionate innovators, dedicated to building scalable digital products that make a difference. With expertise spanning mobile, web, and AI development, we transform complex challenges into elegant solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 text-primary-400" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">
                From a small startup to a trusted global partner
              </p>
            </motion.div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-8"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-primary-600">{item.year}</span>
                  </div>
                  <div className="flex-grow pb-8 border-l-2 border-primary-200 pl-8 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full" />
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Our Expertise</h2>
              <p className="text-xl text-gray-600">
                Comprehensive solutions across the entire software development lifecycle
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-xl border border-gray-200"
              >
                <h4 className="mb-4 text-primary-600">Mobile Development</h4>
                <p className="text-gray-600 mb-4">
                  Native and cross-platform mobile applications with exceptional performance and user experience.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>iOS & Android native apps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>React Native & Flutter development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>App Store optimization & deployment</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 bg-white rounded-xl border border-gray-200"
              >
                <h4 className="mb-4 text-primary-600">Web Development</h4>
                <p className="text-gray-600 mb-4">
                  Scalable web applications built with modern frameworks and best practices.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>React, Next.js, Vue.js applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>RESTful & GraphQL APIs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Cloud infrastructure & DevOps</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 bg-white rounded-xl border border-gray-200"
              >
                <h4 className="mb-4 text-primary-600">AI & Machine Learning</h4>
                <p className="text-gray-600 mb-4">
                  Intelligent solutions that automate processes and unlock new insights.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Predictive analytics & forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Natural language processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Computer vision & image recognition</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-8 bg-white rounded-xl border border-gray-200"
              >
                <h4 className="mb-4 text-primary-600">Quality & Support</h4>
                <p className="text-gray-600 mb-4">
                  Ongoing maintenance and support to ensure your applications run smoothly.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>24/7 monitoring & support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Security updates & patches</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-white mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-primary-100 mb-8">
              Ready to transform your ideas into reality? Our team is here to help.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-700 rounded-lg hover:bg-primary-50 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
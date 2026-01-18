import { Target, Zap, Shield, Users, Award, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Target,
      title: 'Precision-Driven Development',
      description: 'We focus on delivering exactly what you need, with attention to every detail.',
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Agile methodology ensures fast iterations and quick time-to-market.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Built with security-first approach, protecting your data at every layer.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned developers, designers, and strategists dedicated to your success.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Successfully delivered 200+ projects across various industries.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business, from startup to enterprise.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Why Choose Spryzen Technologies</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Partner with a team that's committed to transforming your vision into reality
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-gray-900">{reason.title}</h4>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

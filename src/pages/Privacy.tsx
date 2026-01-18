import { motion } from 'motion/react';

export function Privacy() {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'We collect information you provide directly to us, such as when you create an account, subscribe to our services, or communicate with us. This information may include your name, email address, phone number, and any other information you choose to provide.',
        'We also automatically collect certain information about your device when you use our services, including your IP address, browser type, operating system, and usage data.',
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'We use the information we collect to provide, maintain, and improve our services, including to process transactions, send you technical notices and support messages, and respond to your comments and questions.',
        'We may also use your information to send you marketing communications, but you can opt out of these at any time.',
        'Your information helps us develop new services and features that better serve our users.',
      ],
    },
    {
      title: 'Information Sharing and Disclosure',
      content: [
        'We do not share your personal information with third parties except as described in this privacy policy.',
        'We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.',
        'We may also disclose your information if required by law or if we believe that such action is necessary to comply with legal obligations or protect our rights.',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.',
        'We use industry-standard encryption technologies to protect sensitive data during transmission.',
        'However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
      ],
    },
    {
      title: 'Your Rights and Choices',
      content: [
        'You have the right to access, update, or delete your personal information at any time. You can do this by logging into your account or contacting us directly.',
        'You can opt out of receiving promotional communications from us by following the unsubscribe instructions in those messages.',
        'You may also have additional rights depending on your location, such as the right to data portability or to object to certain processing of your information.',
      ],
    },
    {
      title: 'Data Retention',
      content: [
        'We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.',
        'When we no longer need your information, we will securely delete or anonymize it.',
      ],
    },
    {
      title: 'International Data Transfers',
      content: [
        'Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.',
        'We take appropriate steps to ensure that your information receives an adequate level of protection in the jurisdictions in which we process it.',
      ],
    },
    {
      title: 'Children\'s Privacy',
      content: [
        'Our services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.',
        'If we learn that we have collected personal information from a child under 13, we will take steps to delete such information as soon as possible.',
      ],
    },
    {
      title: 'Changes to This Policy',
      content: [
        'We may update this privacy policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective.',
        'We encourage you to review this privacy policy periodically to stay informed about how we protect your information.',
      ],
    },
    {
      title: 'Contact Us',
      content: [
        'If you have any questions about this privacy policy or our data practices, please contact us at:',
        'Email: privacy@spryzen.tech',
        'Address: Spryzen Technologies, San Francisco, CA 94102',
      ],
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
            <h1 className="mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Last updated: January 17, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-gray-600 mb-12">
                At Spryzen Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h2 className="mb-4">{section.title}</h2>
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-600">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

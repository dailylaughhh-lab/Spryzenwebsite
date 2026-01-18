import { motion } from 'motion/react';

export function Terms() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using Spryzen Technologies\' services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.',
        'We reserve the right to modify these terms at any time. Your continued use of our services following any changes indicates your acceptance of the new terms.',
      ],
    },
    {
      title: 'Services Description',
      content: [
        'Spryzen Technologies provides software development services including but not limited to mobile app development, web development, AI & ML solutions, UI/UX design, and maintenance & support.',
        'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.',
      ],
    },
    {
      title: 'User Responsibilities',
      content: [
        'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
        'You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.',
        'You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services.',
      ],
    },
    {
      title: 'Intellectual Property Rights',
      content: [
        'All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by Spryzen Technologies and are protected by international copyright, trademark, and other intellectual property laws.',
        'For client projects, intellectual property rights are transferred to the client upon full payment, unless otherwise specified in a separate agreement.',
        'You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our proprietary content without our express written permission.',
      ],
    },
    {
      title: 'Payment Terms',
      content: [
        'Payment terms for services will be specified in individual project agreements or service contracts.',
        'All fees are non-refundable unless otherwise stated in your service agreement.',
        'We reserve the right to suspend or terminate services for non-payment.',
        'Late payments may be subject to interest charges as specified in your service agreement.',
      ],
    },
    {
      title: 'Confidentiality',
      content: [
        'We agree to keep confidential all proprietary information disclosed by you during the course of our engagement.',
        'You agree to keep confidential any proprietary information or trade secrets disclosed by us.',
        'These confidentiality obligations survive the termination of our services.',
      ],
    },
    {
      title: 'Project Timelines and Deliverables',
      content: [
        'Project timelines and deliverables will be specified in individual project agreements.',
        'While we strive to meet all deadlines, timelines are estimates and may be subject to change due to unforeseen circumstances.',
        'Delays caused by client-side factors, such as late feedback or requirement changes, may result in timeline adjustments.',
      ],
    },
    {
      title: 'Warranty and Disclaimer',
      content: [
        'We warrant that services will be performed in a professional and workmanlike manner in accordance with industry standards.',
        'Except as expressly stated in your service agreement, our services are provided "as is" without warranty of any kind.',
        'We do not warrant that our services will be uninterrupted, error-free, or completely secure.',
      ],
    },
    {
      title: 'Limitation of Liability',
      content: [
        'To the maximum extent permitted by law, Spryzen Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
        'Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim.',
        'Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so these limitations may not apply to you.',
      ],
    },
    {
      title: 'Indemnification',
      content: [
        'You agree to indemnify and hold harmless Spryzen Technologies from any claims, damages, or expenses arising from your use of our services or violation of these terms.',
      ],
    },
    {
      title: 'Termination',
      content: [
        'Either party may terminate services upon written notice as specified in the service agreement.',
        'We reserve the right to terminate or suspend your access to our services immediately for violation of these terms.',
        'Upon termination, you must cease all use of our services and any proprietary materials provided.',
      ],
    },
    {
      title: 'Dispute Resolution',
      content: [
        'Any disputes arising from these terms or our services shall first be attempted to be resolved through good faith negotiations.',
        'If negotiations fail, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.',
        'The arbitration shall take place in San Francisco, California, and shall be conducted in English.',
      ],
    },
    {
      title: 'Governing Law',
      content: [
        'These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.',
      ],
    },
    {
      title: 'Severability',
      content: [
        'If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.',
      ],
    },
    {
      title: 'Contact Information',
      content: [
        'If you have any questions about these Terms and Conditions, please contact us at:',
        'Email: legal@spryzen.tech',
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
            <h1 className="mb-6">Terms & Conditions</h1>
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
                Please read these Terms and Conditions carefully before using our services. These terms govern your use of Spryzen Technologies' services and constitute a legally binding agreement between you and Spryzen Technologies.
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

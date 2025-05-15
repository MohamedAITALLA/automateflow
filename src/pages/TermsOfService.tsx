import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-blue-100 mb-6">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 sm:p-10 lg:p-12">
            <header className="mb-12 border-b border-gray-200 dark:border-gray-700 pb-8">
              {/*<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>*/}
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Last updated: June 1, 2023
              </p>
            </header>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Agreement to Terms</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  These Terms of Service govern your use of the AutomateFlow platform and services provided by AutomateFlow. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Use of Services</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Our services are designed to help businesses automate their workflows using n8n and other technologies. You may use our services only as permitted by these terms and any applicable laws and regulations.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Account Registration</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Some features of our services require you to register for an account. When you register, you agree to provide accurate, current, and complete information about yourself. You are responsible for safeguarding your password and for all activities that occur under your account. You should notify us immediately if you suspect unauthorized use of your account.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Intellectual Property</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  The service and its original content, features, and functionality are and will remain the exclusive property of AutomateFlow and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of AutomateFlow.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">User Content</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  When you create, upload, or share content through our services, you grant us a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to use, store, display, reproduce, modify, and distribute your content solely for the purposes of operating and improving our services.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Acceptable Use</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">You agree not to use our services to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Distribute malicious software or engage in harmful activities</li>
                  <li>Attempt to gain unauthorized access to our systems or user accounts</li>
                  <li>Engage in any activity that interferes with or disrupts the services</li>
                  <li>Automate access to the service in a way that sends more requests than a human could reasonably produce</li>
                </ul>
              </section>

              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Termination</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Limitation of Liability</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  In no event shall AutomateFlow, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Disclaimer</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Governing Law</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Changes to Terms</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Email:</span> legal@automateflow.com
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    <span className="font-medium">Address:</span> 123 Automation Street, Tech City, TC 12345
                  </p>
                </div>
              </section>
            </div>
            
            <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                © {new Date().getFullYear()} AutomateFlow. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default TermsOfService;
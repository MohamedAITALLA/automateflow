import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 mb-6">
              We are committed to protecting your privacy and ensuring the security of your data.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 sm:p-10 lg:p-12">
            <header className="mb-12 border-b border-gray-200 dark:border-gray-700 pb-8">
             { /*<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>*/}
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Last updated: June 1, 2023
              </p>
            </header>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Data Privacy Practices</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  At AutomateFlow, we take your privacy seriously. This privacy policy outlines how we collect, use, and protect your data when you use our services. Our practices are inspired by industry standards including those set by n8n.
                </p>
              </section>
              
              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Information We Collect</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We collect information when you register on our site and when you use our services. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Company information</li>
                  <li>Usage data and analytics</li>
                  <li>Information you provide when submitting forms</li>
                  <li>Technical information such as IP address and browser type</li>
                </ul>
              </section>
              
              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">How We Use Your Information</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">We may use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                  <li>To provide and maintain our services</li>
                  <li>To personalize your experience</li>
                  <li>To improve our website and services</li>
                  <li>To process transactions</li>
                  <li>To send periodic emails regarding your account or other products and services</li>
                  <li>To respond to inquiries and provide customer support</li>
                </ul>
              </section>
              
              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Data Security</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded mb-6">
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Encryption of sensitive data</li>
                    <li>Regular security assessments</li>
                    <li>Access controls and authentication procedures</li>
                    <li>Secure network architecture</li>
                  </ul>
                </div>
              </section>
              
              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Data Retention</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. We will make a good faith effort to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                  <li>Retain server logs containing IP addresses no more than 90 days</li>
                  <li>Retain user-associated data no more than necessary for service provision</li>
                </ul>
              </section>
              
              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Cookies and Tracking</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>
              
              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Third-Party Services</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </section>
              
              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Your Data Protection Rights</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, such as:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>The right to access your personal information</li>
                      <li>The right to request correction of inaccurate data</li>
                      <li>The right to request deletion of your data</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>The right to object to processing of your data</li>
                      <li>The right to data portability</li>
                      <li>The right to withdraw consent</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  To exercise any of these rights, please contact us using the information provided at the end of this policy.
                </p>
              </section>
              
              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Children's Privacy</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
                </p>
              </section>
              
              <section className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Changes to This Privacy Policy</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "last updated" date. You are advised to review this privacy policy periodically for any changes.
                </p>
              </section>
              
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  If you have any questions about this privacy policy or our data practices, please contact us at:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Email:</span> privacy@automateflow.com
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

export default PrivacyPolicy;
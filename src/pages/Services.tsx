
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { services } from '@/data/services';
import { useEffect } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  // Handle hash in URL
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && services.some(service => service.id === hash)) {
      setActiveService(hash);

      // Scroll to the service section
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Automation Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Transform your business operations with my specialized n8n automation solutions and expertise.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              id={service.id}
              key={service.id}
              className={`py-12 ${index < services.length - 1 ? 'border-b border-gray-200 dark:border-gray-800' : ''
                }`}
            >
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <div className="mb-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild>
                    <Link to="/contact">Request a Demo</Link>
                  </Button>
                </div>

                <div className="md:w-1/2">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 h-full">
                    <h3 className="text-xl font-semibold mb-4">Real-World Example</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-8">{service.useCase}</p>

                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                      <h4 className="text-lg font-medium mb-3">Typical Implementation Timeline</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Discovery & Planning</span>
                          <span className="font-medium">1-2 Weeks</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }}></div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Development & Testing</span>
                          <span className="font-medium">2-4 Weeks</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Deployment & Training</span>
                          <span className="font-medium">1-2 Weeks</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }}></div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Ongoing Support</span>
                          <span className="font-medium">Continuous</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What My Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Hear from Moroccan startups who have transformed their operations with my n8n automation expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="flex flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                "The AI-powered email responder has revolutionized our customer service at SouqTech. Response times dropped from hours to seconds, allowing our team to focus on expanding our marketplace across Casablanca's artisan communities and traditional souks."
              </blockquote>
              <div className="font-semibold">Karim El Fassi</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Founder, SouqTech</div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="flex flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                "The workflow automation solution has transformed our EdTech platform at TaalimConnect. We've reduced manual processes by 90% and can now focus on scaling our Arabic-French-Amazigh trilingual educational content across rural communities in the Atlas Mountains."
              </blockquote>
              <div className="font-semibold">Nadia Bensouda</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">CEO, TaalimConnect</div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="flex flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                "Our AI logistics assistant built with n8n has been transformative for MaghrebExpress. It optimizes delivery routes across Tangier, Fes, and Marrakech, helping us connect small businesses with customers while reducing our carbon footprint by 30%."
              </blockquote>
              <div className="font-semibold">Youssef Amrani</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Co-founder, MaghrebExpress</div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how my n8n automation expertise can help streamline your business processes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-primary hover:bg-white/10">
                <Link to="/templates" className="text-primary">Explore Templates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

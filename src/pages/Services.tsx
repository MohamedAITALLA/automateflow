
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Automation Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Transform your business operations with our comprehensive suite of AI-powered automation solutions.
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
              className={`py-12 ${
                index < services.length - 1 ? 'border-b border-gray-200 dark:border-gray-800' : ''
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
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with our automation solutions.
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
                "The AI-powered email responder has transformed our customer service. Response times dropped from hours to seconds, and our team can focus on complex issues instead of routine inquiries."
              </blockquote>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Director of Customer Success, TechCorp</div>
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
                "The workflow automation solution has eliminated our inventory synchronization issues completely. We've reduced manual labor by 94% and completely eliminated overselling incidents."
              </blockquote>
              <div className="font-semibold">Michael Chen</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Operations Manager, Global Retail</div>
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
                "Our AI sales assistant has been a game-changer. It qualifies leads, handles initial outreach, and schedules meetings automatically. We've seen a 45% increase in qualified demos with the same team size."
              </blockquote>
              <div className="font-semibold">Amanda Rodriguez</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">VP of Sales, SaaS Solutions Inc.</div>
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
              Schedule a personalized demo to see how our automation solutions can benefit your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
                <Link to="/contact">Request Demo</Link>
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

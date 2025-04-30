
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, CheckCircle2, Clock, Mail, MessageSquare, Settings, User } from 'lucide-react';
import Layout from '@/components/Layout';
import WorkflowVisualization from '@/components/WorkflowVisualization';
import { sampleWorkflows } from '@/data/caseStudies';
import { templates } from '@/data/templates';
import { services } from '@/data/services';

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>('templates');
  
  // Display only top 3 templates
  const topTemplates = [...templates]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-indigo-700 text-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                AI-Powered Workflow Automation for Modern Business
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Build intelligent automation solutions with n8n workflows and custom AI agents that transform how your business operates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-primary hover:bg-white/10">
                  <Link to="/templates">Explore Templates</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-2xl">
              <WorkflowVisualization 
                workflow={sampleWorkflows['support-automation']} 
                height="400px"
              />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-16 relative z-10">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <div className="text-4xl font-bold mr-2">200+</div>
              <div className="text-blue-100">Automation<br />Projects</div>
            </div>
            <div className="flex items-center">
              <div className="text-4xl font-bold mr-2">45%</div>
              <div className="text-blue-100">Average Time<br />Savings</div>
            </div>
            <div className="flex items-center">
              <div className="text-4xl font-bold mr-2">98%</div>
              <div className="text-blue-100">Client<br />Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Automation Services</h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
              Comprehensive automation solutions designed to enhance efficiency, reduce costs, and drive growth across your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{service.description}</p>
                <Button asChild variant="outline" className="mt-2">
                  <Link to={`/services#${service.id}`}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Templates & Case Studies */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Templates & Case Studies</h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
              Discover our most popular automation templates and success stories.
            </p>
          </div>
          
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
            <button
              className={`py-2 px-4 font-medium text-sm ${
                activeTab === 'templates' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
              onClick={() => setActiveTab('templates')}
            >
              Featured Templates
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm ${
                activeTab === 'case-studies' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
              onClick={() => setActiveTab('case-studies')}
            >
              Case Studies
            </button>
          </div>
          
          {activeTab === 'templates' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topTemplates.map((template) => (
                <div key={template.id} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
                    <div className="flex items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded text-xs">
                        {template.category}
                      </span>
                      <span className="ml-2">{template.difficulty}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      {template.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Saves {template.timeSaving}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Lead Qualification & Nurturing Automation</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    GrowthForce Marketing agency needed to scale their lead nurturing operations without adding staff. We implemented an automated workflow that handles lead scoring, segmentation, and personalized follow-ups.
                  </p>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      <span>215% increase in qualified leads</span>
                    </div>
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      <span>76% reduction in follow-up time</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="mt-2">
                    <Link to="/case-studies">View Case Study</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Automating Customer Support for SaaS Company</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    CloudTech Solutions was struggling with a high volume of support tickets. We implemented an AI-powered workflow that automatically categorizes tickets and answers common questions.
                  </p>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      <span>68% reduction in first-response time</span>
                    </div>
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      <span>42% decrease in support tickets requiring human intervention</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="mt-2">
                    <Link to="/case-studies">View Case Study</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to={activeTab === 'templates' ? '/templates' : '/case-studies'}>
                View All {activeTab === 'templates' ? 'Templates' : 'Case Studies'} <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
              Our streamlined process makes implementing automation solutions simple and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery & Planning</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We analyze your workflows, identify automation opportunities, and create a strategic implementation plan.
                </p>
              </div>
              <div className="hidden md:block absolute top-7 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
            </div>
            
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Workflow Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our experts build custom n8n workflows and AI agents tailored to your specific business needs.
                </p>
              </div>
              <div className="hidden md:block absolute top-7 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
            </div>
            
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Implementation & Support</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We deploy your automation solution, provide thorough training, and offer ongoing support and optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-3">Ready to automate your workflows?</h2>
              <p className="text-blue-100 text-xl">
                Get started with a free automation assessment and recommendation.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
              <Link to="/contact">Request Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

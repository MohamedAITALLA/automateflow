
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import WorkflowVisualization from '@/components/WorkflowVisualization';
import { caseStudies, sampleWorkflows } from '@/data/caseStudies';

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  
  const industries = ['All', ...new Set(caseStudies.map(cs => cs.industry))];
  
  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h1>
            <p className="text-xl text-blue-100 mb-6">
              Explore how our automation solutions have helped businesses across industries improve efficiency and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-16 z-20 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="text-gray-700 dark:text-gray-300 font-medium">Filter by Industry:</div>
            <div className="flex flex-wrap gap-2">
              {industries.map(industry => (
                <button
                  key={industry}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    selectedIndustry === industry 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No case studies found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try selecting a different industry filter</p>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredCaseStudies.map((caseStudy, index) => (
                <div 
                  key={caseStudy.id} 
                  className={`${
                    index < filteredCaseStudies.length - 1 ? 'pb-16 border-b border-gray-200 dark:border-gray-800' : ''
                  }`}
                >
                  <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                      <div className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium mb-4">
                        {caseStudy.industry}
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{caseStudy.title}</h2>
                      <p className="text-lg font-medium mb-6">Client: {caseStudy.client}</p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{caseStudy.challenge}</p>
                        
                        <h3 className="text-xl font-semibold mb-3">Solution</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{caseStudy.solution}</p>
                        
                        <h3 className="text-xl font-semibold mb-3">Results</h3>
                        <ul className="space-y-3 mb-6">
                          {caseStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {caseStudy.testimonial && (
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                          <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                            "{caseStudy.testimonial.quote}"
                          </blockquote>
                          <div className="font-semibold">{caseStudy.testimonial.author}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {caseStudy.testimonial.position}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="lg:w-1/2">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold mb-4">Workflow Visualization</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          Interactive n8n workflow diagram showing the automation solution implementation.
                        </p>
                        <WorkflowVisualization 
                          workflow={sampleWorkflows[caseStudy.workflowId]} 
                          height="500px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can create a custom automation solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-primary hover:bg-white/10">
                <Link to="/templates">Browse Templates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;

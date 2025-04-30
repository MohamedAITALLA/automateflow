
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Mail, Phone, User } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirements: '',
    budget: '',
    timeline: '',
    category: '',
    source: '',
    privacyAgreed: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const webhookUrl = 'https://n8n-main.qwfbje.easypanel.host/webhook-test/b76ad845-4e91-4ff2-972e-1b99896215bb';
    
    toast({
      title: "Submitting...",
      description: "Sending your request, please wait.",
      duration: 3000,
    });
    
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
        // Add timeout to prevent long hanging requests
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });
      
      if (response.ok) {
        toast({
          title: "Form Submitted Successfully",
          description: "We'll be in touch with you shortly!",
          duration: 5000,
        });
        
        // Reset form
        setFormState({
          name: '',
          company: '',
          email: '',
          phone: '',
          requirements: '',
          budget: '',
          timeline: '',
          category: '',
          source: '',
          privacyAgreed: false
        });
      } else {
        const errorData = await response.json().catch(() => null);
        toast({
          title: "Submission Failed",
          description: errorData?.message || "Please try again later.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // More specific error message based on error type
      let errorMessage = "Could not connect to the server. Please check your internet connection.";
      
      if (error instanceof TypeError && error.message.includes('timeout')) {
        errorMessage = "Request timed out. The server took too long to respond.";
      } else if (error instanceof TypeError && error.message.includes('NetworkError')) {
        errorMessage = "Network error. Please check your internet connection and try again.";
      }
      
      toast({
        title: "Connection Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100 mb-6">
              Ready to transform your business with automation? Fill out the form below to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-primary p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-blue-100">contact@automateflow.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-blue-100">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <p className="text-blue-100">Monday - Friday: 9am - 5pm EST</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                      <span className="sr-only">GitHub</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-8">
                <h2 className="text-2xl font-bold mb-6">Request a Consultation</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input 
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Project Requirements *</Label>
                    <Textarea 
                      id="requirements"
                      name="requirements"
                      value={formState.requirements}
                      onChange={handleChange}
                      placeholder="Please describe your automation needs..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <select 
                        id="budget"
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-400"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000+">$25,000+</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Expected Timeline</Label>
                      <select 
                        id="timeline"
                        name="timeline"
                        value={formState.timeline}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-400"
                      >
                        <option value="">Select timeline</option>
                        <option value="Immediately">Immediately</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3+ months">3+ months</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category">Service Category</Label>
                      <select 
                        id="category"
                        name="category"
                        value={formState.category}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-400"
                      >
                        <option value="">Select service category</option>
                        <option value="AI Sales Assistants">AI Sales Assistants</option>
                        <option value="Email Responders">Email Responders</option>
                        <option value="Call Center Agents">Call Center Agents</option>
                        <option value="Workflow Automation">Workflow Automation</option>
                        <option value="Custom AI Solutions">Custom AI Solutions</option>
                        <option value="Integration Services">Integration Services</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="source">How did you hear about us?</Label>
                      <select 
                        id="source"
                        name="source"
                        value={formState.source}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-400"
                      >
                        <option value="">Select source</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Referral">Referral</option>
                        <option value="Blog/Article">Blog/Article</option>
                        <option value="Event">Event</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      id="privacyAgreed"
                      name="privacyAgreed"
                      type="checkbox"
                      className="h-4 w-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                      checked={formState.privacyAgreed}
                      onChange={handleCheckboxChange}
                      required
                    />
                    <label htmlFor="privacyAgreed" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      I agree to the <a href="#" className="text-primary hover:underline">Privacy Policy</a> and consent to having my data processed to respond to my inquiry.
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Find quick answers to common questions about our automation services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">How long does implementation typically take?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Implementation timelines vary based on the complexity of your automation needs. Simple workflows can be implemented in 1-2 weeks, while more complex integrations might take 4-8 weeks. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Do you offer ongoing support after implementation?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Yes, we offer several support options including monthly maintenance packages, on-demand support, and comprehensive managed services. We'll work with you to determine the best support model for your needs.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Can you integrate with our existing systems?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Absolutely! n8n has over 200+ pre-built integrations, and we specialize in connecting systems that don't have native integrations. We regularly work with CRMs, ERPs, marketing tools, and custom internal systems.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">How are your services priced?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our pricing is project-based and depends on the complexity of your automation needs. We provide detailed quotes after an initial consultation to understand your requirements. We also offer maintenance and support packages for ongoing service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

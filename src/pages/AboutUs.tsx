import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, Users, Zap, Award, BarChart2, Shield, Code, Workflow, Bot } from 'lucide-react';
import Layout from '@/components/Layout';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutUs = () => {
  const isMobile = useIsMobile();
  
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'I constantly explore new technologies and approaches to deliver cutting-edge automation solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'I work closely with clients to understand their unique needs and build solutions together.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'I prioritize the security and privacy of your data in every automation solution I build.'
    },
    {
      icon: BarChart2,
      title: 'Impact',
      description: 'I measure success by the tangible business outcomes and efficiency gains created for clients.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'I strive for excellence in every aspect of my work, from code quality to client communication.'
    }
  ];
  
  const skills = [
    {
      name: 'Mohamed AIT ALLA',
      position: 'Software Engineer & Automation Specialist',
      bio: 'Experienced software engineer with extensive expertise in n8n workflow automation and building custom AI-powered solutions.',
      image: '/profile.jpg'
    }
  ];
  
  const expertise = [
    {
      icon: Workflow,
      title: 'n8n Workflow Development',
      description: 'Expert in creating complex, reliable automation workflows using n8n to connect various systems and APIs.'
    },
    {
      icon: Bot,
      title: 'AI Agent Development',
      description: 'Specialized in building custom AI agents that can handle complex tasks and integrate with existing systems.'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in developing end-to-end solutions with modern web technologies and backend systems.'
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AutomateFlow</h1>
            <p className="text-xl text-blue-100 mb-6">
              I'm Mohamed AIT ALLA, a software engineer specializing in n8n workflow automation and custom AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">My Story</h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                AutomateFlow is my portfolio showcasing my expertise in workflow automation. I created this platform after observing how businesses were spending too much time on repetitive tasks and not enough time on strategic growth.
              </p>
              <p>
                With extensive experience in n8n workflow development, I help businesses of all sizes harness the power of automation and custom AI agents to transform their operations and achieve greater efficiency.
              </p>
              <p>
                My approach combines deep technical expertise with a practical understanding of business processes. This unique perspective allows me to create automation solutions that deliver real-world results, not just technical implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="md:w-1/3">
              {skills.map((person, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-800 shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                  <p className="text-primary font-medium mb-3">{person.position}</p>
                  <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto">{person.bio}</p>
                </div>
              ))}
            </div>
            <div className="md:w-2/3 mt-8 md:mt-0">
              <h3 className="text-2xl font-semibold mb-6">My Expertise</h3>
              <div className="space-y-6">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{skill.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <div className="text-gray-600 dark:text-gray-400">Average Time Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
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
              Let's discuss how my automation expertise can help you save time, reduce costs, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size={isMobile ? "default" : "lg"} className="bg-white text-primary hover:bg-blue-50">
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size={isMobile ? "default" : "lg"} className="border-white text-primary hover:bg-white/10">
                <Link to="/templates">Explore Templates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
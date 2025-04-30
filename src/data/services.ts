
import { Calendar, Mail, MessageSquare, Settings, User, Users } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  benefits: string[];
  useCase: string;
}

export const services: Service[] = [
  {
    id: 'ai-sales',
    title: 'AI Sales Assistants',
    description: 'Automate your sales outreach with intelligent AI assistants that engage leads, qualify prospects, and schedule meetings without human intervention.',
    icon: User,
    benefits: [
      'Engage with leads 24/7 across multiple channels',
      'Qualify prospects based on custom criteria',
      'Automate follow-ups and nurture campaigns',
      'Schedule meetings directly into your calendar',
      'Increase conversion rates by 37% on average'
    ],
    useCase: 'Our AI Sales Assistant helped a SaaS company increase qualified demos by 45% while reducing sales team workload by automating initial outreach and follow-ups.'
  },
  {
    id: 'email-responders',
    title: 'Email Responders',
    description: 'Implement intelligent email automation that understands incoming messages and responds with contextually appropriate, personalized replies.',
    icon: Mail,
    benefits: [
      'Instant response to customer inquiries 24/7',
      'Contextual understanding of email content',
      'Personalized replies based on customer history',
      'Seamless escalation to human agents when needed',
      'Reduce response time from hours to seconds'
    ],
    useCase: 'A professional services firm reduced their email response time from 4 hours to under 2 minutes using our AI Email Responder, leading to a 28% increase in customer satisfaction.'
  },
  {
    id: 'call-center',
    title: 'Call Center Agents',
    description: 'Deploy AI-powered virtual agents that handle phone calls, understand customer needs, and either resolve issues directly or route callers to the right department.',
    icon: MessageSquare,
    benefits: [
      'Handle multiple calls simultaneously',
      'Natural language understanding for caller intent',
      'Integration with your CRM and knowledge base',
      'Accurate call routing and prioritization',
      'Reduce call center costs by up to 60%'
    ],
    useCase: 'Our AI Call Center Agent helped a healthcare provider manage 75% of incoming appointment scheduling calls automatically, freeing up staff to handle complex patient needs.'
  },
  {
    id: 'workflow',
    title: 'Workflow Automation',
    description: 'Create custom automated workflows that connect your applications, move data seamlessly between systems, and eliminate repetitive manual tasks.',
    icon: Settings,
    benefits: [
      'Connect any application with 1000+ pre-built integrations',
      'Trigger workflows based on events or schedules',
      'Transform and manipulate data between systems',
      'Monitor and audit automation performance',
      'Reduce manual work by up to 90%'
    ],
    useCase: 'A marketing agency automated their client reporting process, reducing 40+ hours of monthly work to a fully automated workflow that generates and delivers reports to clients.'
  },
  {
    id: 'custom-ai',
    title: 'Custom AI Solutions',
    description: 'Develop bespoke AI solutions tailored to your specific business challenges, integrating advanced machine learning with your existing systems.',
    icon: Calendar,
    benefits: [
      'Custom AI models trained on your business data',
      'Seamless integration with existing software stack',
      'Continuous learning and improvement over time',
      'End-to-end development and implementation',
      'Solve unique business challenges with AI'
    ],
    useCase: 'We developed a custom AI solution for a real estate company that automatically analyzes property listings, extracts key features, and generates optimized descriptions, increasing engagement by 32%.'
  },
  {
    id: 'integration',
    title: 'Integration Services',
    description: 'Connect all your business applications and data sources into a unified ecosystem with custom integration development and API management.',
    icon: Users,
    benefits: [
      'Connect legacy systems with modern applications',
      'Create unified customer views across platforms',
      'Synchronize data across your organization',
      'Build custom APIs for internal and external use',
      'Eliminate data silos and duplicate entries'
    ],
    useCase: 'We helped an e-commerce business integrate their online store, inventory management, accounting system, and CRM, creating a single source of truth that streamlined operations.'
  },
];

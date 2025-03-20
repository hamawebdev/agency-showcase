
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  PenTool, 
  LineChart, 
  Search, 
  BadgeDollarSign,
  Share,
  Database,
  Lock,
  CloudCog,
  UserCheck,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Service from '@/components/Service';

const Services = () => {
  // Initialize animation observers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.appear-animate');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-agency-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-agency-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-width relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4 appear-animate">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agency-dark mb-6 appear-animate delay-100">
              Comprehensive <span className="text-gradient">digital solutions</span> for your business
            </h1>
            <p className="text-lg md:text-xl text-agency-text mb-8 appear-animate delay-200">
              We offer a wide range of services designed to help your business thrive in the digital landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4 appear-animate delay-300">
              <Button 
                asChild
                className="bg-agency-blue hover:bg-agency-blue/90"
              >
                <a href="#services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-gray-200 hover:bg-agency-lightBlue hover:text-agency-blue hover:border-agency-blue/20"
              >
                <Link to="/contact">
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Categories Section */}
      <section id="services" className="section-padding">
        <div className="container-width">
          <Tabs defaultValue="software" className="appear-animate">
            <div className="text-center mb-10">
              <TabsList className="inline-flex p-1 bg-agency-gray rounded-lg">
                <TabsTrigger value="software" className="px-6 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-agency-blue">
                  Software Development
                </TabsTrigger>
                <TabsTrigger value="marketing" className="px-6 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-agency-blue">
                  Digital Marketing
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Software Development Tab */}
            <TabsContent value="software" className="appear-animate">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <Service 
                  icon={Code} 
                  title="Web Development" 
                  description="Custom websites and web applications built with the latest technologies to provide exceptional user experiences."
                  delay="delay-100"
                />
                <Service 
                  icon={Smartphone} 
                  title="Mobile App Development" 
                  description="Native and cross-platform mobile applications for iOS and Android that engage users and extend your digital presence."
                  delay="delay-200"
                />
                <Service 
                  icon={PenTool} 
                  title="UI/UX Design" 
                  description="User-centered design that creates intuitive, engaging interfaces to enhance user satisfaction and loyalty."
                  delay="delay-300"
                />
                <Service 
                  icon={CloudCog} 
                  title="Cloud Solutions" 
                  description="Scalable cloud infrastructure and services that optimize performance, reliability, and cost-efficiency."
                  delay="delay-100"
                />
                <Service 
                  icon={Database} 
                  title="Custom Software" 
                  description="Tailored software solutions designed to address your specific business needs and challenges."
                  delay="delay-200"
                />
                <Service 
                  icon={Lock} 
                  title="Cybersecurity" 
                  description="Comprehensive security solutions to protect your digital assets and ensure compliance with regulations."
                  delay="delay-300"
                />
              </div>
              
              {/* Software Development Process */}
              <div className="mt-20">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6 appear-animate">
                    Our Development <span className="text-gradient">Process</span>
                  </h2>
                  <p className="text-lg text-agency-text appear-animate delay-100">
                    We follow a structured approach to ensure that every project is delivered on time, on budget, and exceeds expectations.
                  </p>
                </div>
                
                <div className="relative">
                  {/* Process timeline line */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
                  
                  {/* Process steps */}
                  <div className="space-y-12 md:space-y-0">
                    <ProcessStep 
                      number="01"
                      title="Discovery & Planning"
                      description="We begin by understanding your business goals, target audience, and project requirements to create a comprehensive project plan."
                      isLeft={true}
                      delay="delay-100"
                    />
                    <ProcessStep 
                      number="02"
                      title="Design & Prototyping"
                      description="Our designers create wireframes and interactive prototypes to visualize the solution before development begins."
                      isLeft={false}
                      delay="delay-200"
                    />
                    <ProcessStep 
                      number="03"
                      title="Development"
                      description="Our experienced developers build your solution using the latest technologies and best practices for optimal performance."
                      isLeft={true}
                      delay="delay-300"
                    />
                    <ProcessStep 
                      number="04"
                      title="Testing & Quality Assurance"
                      description="Rigorous testing to ensure your solution is bug-free, secure, and performs well across all devices and browsers."
                      isLeft={false}
                      delay="delay-400"
                    />
                    <ProcessStep 
                      number="05"
                      title="Deployment & Launch"
                      description="We carefully deploy your solution and provide support to ensure a smooth launch."
                      isLeft={true}
                      delay="delay-500"
                    />
                    <ProcessStep 
                      number="06"
                      title="Maintenance & Support"
                      description="Ongoing maintenance and support to keep your solution running smoothly and up-to-date."
                      isLeft={false}
                      delay="delay-600"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Digital Marketing Tab */}
            <TabsContent value="marketing" className="appear-animate">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <Service 
                  icon={Search} 
                  title="SEO Optimization" 
                  description="Data-driven SEO strategies that improve search rankings and increase organic traffic to your website."
                  delay="delay-100"
                />
                <Service 
                  icon={Share} 
                  title="Social Media Marketing" 
                  description="Strategic social media campaigns that build brand awareness, engage your audience, and drive conversions."
                  delay="delay-200"
                />
                <Service 
                  icon={BadgeDollarSign} 
                  title="PPC Advertising" 
                  description="Targeted pay-per-click campaigns that maximize ROI and drive immediate results for your business."
                  delay="delay-300"
                />
                <Service 
                  icon={LineChart} 
                  title="Content Marketing" 
                  description="Compelling content strategies that establish your brand as an authority and attract your target audience."
                  delay="delay-100"
                />
                <Service 
                  icon={UserCheck} 
                  title="Conversion Rate Optimization" 
                  description="Data-driven strategies to improve user experience and increase conversion rates on your website."
                  delay="delay-200"
                />
                <Service 
                  icon={Settings} 
                  title="Analytics & Reporting" 
                  description="Comprehensive analytics and reporting to track performance and make data-driven decisions."
                  delay="delay-300"
                />
              </div>
              
              {/* Marketing Approach */}
              <div className="mt-20">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6 appear-animate">
                    Our Marketing <span className="text-gradient">Approach</span>
                  </h2>
                  <p className="text-lg text-agency-text appear-animate delay-100">
                    We take a strategic, data-driven approach to digital marketing to help you achieve measurable results.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center appear-animate delay-200">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                      alt="Marketing strategy" 
                      className="rounded-2xl shadow-lg w-full"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <ApproachItem 
                      number="01"
                      title="Research & Strategy"
                      description="We begin with thorough market research and competitor analysis to develop a tailored marketing strategy."
                    />
                    <ApproachItem 
                      number="02"
                      title="Implementation"
                      description="Our team executes the strategy across appropriate channels, creating compelling campaigns."
                    />
                    <ApproachItem 
                      number="03"
                      title="Analysis & Optimization"
                      description="We continuously monitor performance and optimize campaigns to maximize results."
                    />
                    <ApproachItem 
                      number="04"
                      title="Reporting & Refinement"
                      description="Regular reporting and insights to keep you informed and refine strategies for continuous improvement."
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="section-padding bg-agency-gray">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4 appear-animate">
              Technologies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6 appear-animate delay-100">
              Cutting-edge <span className="text-gradient">technologies</span> we work with
            </h2>
            <p className="text-lg text-agency-text appear-animate delay-200">
              We stay at the forefront of technology to deliver innovative solutions that drive results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center justify-items-center appear-animate delay-300">
            {['React', 'Node.js', 'Python', 'AWS', 'Firebase', 'MongoDB', 'Flutter', 'TypeScript', 'Django', 'Docker', 'Google Cloud', 'Kubernetes'].map((tech, index) => (
              <div key={tech} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-lg font-semibold text-agency-dark">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4 appear-animate">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6 appear-animate delay-100">
              Flexible <span className="text-gradient">pricing plans</span> for your needs
            </h2>
            <p className="text-lg text-agency-text appear-animate delay-200">
              We offer competitive pricing options to suit businesses of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Basic"
              price={999}
              description="Perfect for small businesses looking to establish their digital presence."
              features={[
                "Website Development",
                "Basic SEO Optimization",
                "Responsive Design",
                "3 Pages",
                "Contact Form",
                "30 Days Support"
              ]}
              buttonText="Get Started"
              delay="delay-100"
            />
            <PricingCard 
              title="Professional"
              price={2499}
              description="Ideal for growing businesses seeking comprehensive digital solutions."
              features={[
                "Custom Website Development",
                "Advanced SEO Strategy",
                "Social Media Integration",
                "10 Pages",
                "Blog Setup",
                "E-commerce Capabilities",
                "90 Days Support"
              ]}
              buttonText="Get Started"
              isPopular={true}
              delay="delay-200"
            />
            <PricingCard 
              title="Enterprise"
              price={4999}
              description="Tailored for businesses needing complex digital solutions and ongoing support."
              features={[
                "Advanced Custom Development",
                "Comprehensive SEO & Marketing",
                "Custom Functionality",
                "Unlimited Pages",
                "E-commerce Solution",
                "Dedicated Project Manager",
                "Priority Support",
                "12 Months Support & Maintenance"
              ]}
              buttonText="Contact Us"
              delay="delay-300"
            />
          </div>
          
          <div className="mt-12 text-center appear-animate delay-400">
            <p className="text-agency-text mb-6">
              Need a custom solution? We offer tailored packages to meet your specific requirements.
            </p>
            <Button 
              asChild
              variant="outline" 
              className="border-gray-200 hover:bg-agency-lightBlue hover:text-agency-blue hover:border-agency-blue/20"
            >
              <Link to="/contact">
                Request Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-agency-gray">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4 appear-animate">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6 appear-animate delay-100">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-agency-text appear-animate delay-200">
              Find answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 appear-animate delay-300">
            <FaqItem 
              question="How long does it typically take to complete a website project?"
              answer="The timeline varies depending on the complexity of the project. A simple website can take 4-6 weeks, while more complex projects may take 8-12 weeks or more. We'll provide a detailed timeline during the discovery phase."
            />
            <FaqItem 
              question="Do you provide ongoing maintenance and support?"
              answer="Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performs optimally. Our support team is available to address any issues that arise."
            />
            <FaqItem 
              question="How do you measure the success of digital marketing campaigns?"
              answer="We establish clear KPIs at the beginning of each campaign and provide regular reports on metrics such as traffic, conversions, engagement, and ROI. We use tools like Google Analytics, SEMrush, and custom dashboards to track performance."
            />
            <FaqItem 
              question="Can you work with my existing website or do we need to start from scratch?"
              answer="We can work with your existing website if it has a solid foundation. After an assessment, we'll recommend whether to improve your current site or rebuild it for better results. We focus on what will provide the best ROI."
            />
            <FaqItem 
              question="Do you create mobile-friendly websites?"
              answer="Absolutely! All our websites are designed with a mobile-first approach to ensure they look and function perfectly on all devices, from smartphones to desktops."
            />
            <FaqItem 
              question="What's your payment structure?"
              answer="Typically, we require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we may create a milestone-based payment schedule. We accept credit cards, bank transfers, and other payment methods."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-agency-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent"></div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container-width relative z-10">
          <div className="max-w-3xl mx-auto text-center appear-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and discover how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-agency-blue hover:bg-white/90 transition-all"
              >
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 transition-all"
              >
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

const ProcessStep = ({ number, title, description, isLeft, delay = 'delay-0' }: { number: string; title: string; description: string; isLeft: boolean; delay?: string }) => (
  <div className={`appear-animate flex items-center mb-12 md:mb-24 ${delay}`}>
    <div className={`md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
      <div className="flex items-center mb-4 md:hidden">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-agency-blue flex items-center justify-center text-white font-bold text-sm mr-4">
          {number}
        </div>
        <h3 className="text-xl font-bold text-agency-dark">{title}</h3>
      </div>
      <h3 className="hidden md:block text-xl font-bold text-agency-dark mb-4">{title}</h3>
      <p className="text-agency-text">{description}</p>
    </div>
    
    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
      <div className="h-10 w-10 rounded-full bg-agency-blue flex items-center justify-center text-white font-bold text-sm">
        {number}
      </div>
    </div>
  </div>
);

const ApproachItem = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex items-start">
    <div className="h-10 w-10 rounded-full bg-agency-blue flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
      {number}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-agency-dark mb-2">{title}</h3>
      <p className="text-agency-text">{description}</p>
    </div>
  </div>
);

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  isPopular = false,
  delay = 'delay-0'
}: { 
  title: string; 
  price: number; 
  description: string; 
  features: string[]; 
  buttonText: string; 
  isPopular?: boolean;
  delay?: string;
}) => (
  <div 
    className={`appear-animate relative bg-white p-6 md:p-8 rounded-xl shadow-sm border ${isPopular ? 'border-agency-blue shadow-lg scale-105 z-10' : 'border-gray-100'} ${delay}`}
  >
    {isPopular && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-agency-blue text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
        Most Popular
      </div>
    )}
    
    <h3 className="text-xl font-bold text-agency-dark mb-2">{title}</h3>
    <div className="mb-4">
      <span className="text-3xl font-bold text-agency-dark">${price}</span>
      <span className="text-agency-text"> / project</span>
    </div>
    <p className="text-agency-text mb-6">{description}</p>
    
    <div className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start">
          <div className="text-green-500 mr-2 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-agency-text">{feature}</span>
        </div>
      ))}
    </div>
    
    <Button 
      asChild
      className={isPopular ? 'w-full bg-agency-blue hover:bg-agency-blue/90' : 'w-full bg-white border border-agency-blue text-agency-blue hover:bg-agency-lightBlue'}
    >
      <Link to="/contact">
        {buttonText}
      </Link>
    </Button>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold text-agency-dark mb-3">{question}</h3>
    <p className="text-agency-text">{answer}</p>
  </div>
);

export default Services;

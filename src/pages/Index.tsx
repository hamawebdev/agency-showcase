
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  LineChart, 
  Smartphone, 
  PenTool, 
  Search, 
  BadgeDollarSign,
  ArrowRight,
  Users,
  Trophy,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import Service from '@/components/Service';
import Testimonial from '@/components/Testimonial';
import CaseStudy from '@/components/CaseStudy';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import SmoothScroll from '@/components/SmoothScroll';

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="section-padding bg-agency-gray">
        <div className="container-width">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <ScrollReveal animation="fade">
              <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4">
                Our Services
              </span>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6">
                Solutions That Drive <span className="text-gradient">Results</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade" delay={0.2}>
              <p className="text-lg text-agency-text">
                We offer comprehensive digital solutions tailored to your business needs, helping you stand out in today's competitive market.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Service 
              icon={Code} 
              title="Web Development" 
              description="We build responsive, high-performance websites that deliver exceptional user experiences and drive conversions."
              delay="delay-100"
            />
            <Service 
              icon={Smartphone} 
              title="Mobile Apps" 
              description="Native and cross-platform mobile applications that engage users and extend your digital presence effectively."
              delay="delay-200"
            />
            <Service 
              icon={PenTool} 
              title="UI/UX Design" 
              description="User-centered design that creates intuitive, engaging interfaces to enhance user satisfaction and loyalty."
              delay="delay-300"
            />
            <Service 
              icon={LineChart} 
              title="Digital Marketing" 
              description="Strategic marketing campaigns that increase visibility, drive traffic, and generate qualified leads."
              delay="delay-100"
            />
            <Service 
              icon={Search} 
              title="SEO Optimization" 
              description="Data-driven SEO strategies that improve search rankings and increase organic traffic to your website."
              delay="delay-200"
            />
            <Service 
              icon={BadgeDollarSign} 
              title="PPC Advertising" 
              description="Targeted pay-per-click campaigns that maximize ROI and drive immediate results for your business."
              delay="delay-300"
            />
          </div>
          
          <ScrollReveal animation="fade" delay={0.4}>
            <div className="text-center mt-12">
              <Button 
                asChild
                variant="outline" 
                className="border-gray-200 hover:bg-agency-lightBlue hover:text-agency-blue hover:border-agency-blue/20"
              >
                <Link to="/services" className="flex items-center">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="section-padding relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-agency-lightBlue rounded-full opacity-50 blur-3xl -z-10"></div>
        
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4">
                  Why Choose Us
                </span>
              </ScrollReveal>
              
              <ScrollReveal animation="slide-up" delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6">
                  We deliver <span className="text-gradient">excellence</span> in every project
                </h2>
              </ScrollReveal>
              
              <ScrollReveal animation="fade" delay={0.2}>
                <p className="text-lg text-agency-text mb-8">
                  Our team of experts is committed to delivering exceptional results that exceed expectations and help your business thrive in the digital landscape.
                </p>
              </ScrollReveal>
              
              <ScrollReveal animation="slide-up" delay={0.3}>
                <div className="space-y-6">
                  <FeatureItem 
                    icon={<Users className="h-5 w-5 text-agency-blue" />}
                    title="Expert Team"
                    description="Our team of industry experts brings years of experience and a passion for innovation."
                  />
                  <FeatureItem 
                    icon={<Trophy className="h-5 w-5 text-agency-blue" />}
                    title="Award-Winning"
                    description="Recognized for our excellence in design, development, and digital marketing strategies."
                  />
                  <FeatureItem 
                    icon={<Clock className="h-5 w-5 text-agency-blue" />}
                    title="On-Time Delivery"
                    description="We pride ourselves on meeting deadlines and delivering projects on schedule."
                  />
                  <FeatureItem 
                    icon={<CheckCircle className="h-5 w-5 text-agency-blue" />}
                    title="Quality Assurance"
                    description="Rigorous testing and quality control to ensure flawless execution of your project."
                  />
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade" delay={0.4}>
                <div className="mt-10">
                  <Button 
                    asChild
                    className="bg-agency-blue hover:bg-agency-blue/90"
                  >
                    <Link to="/about">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal animation="slide-right" delay={0.2}>
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-agency-blue/5 to-purple-500/5 rounded-3xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                  alt="Our team collaboration" 
                  className="rounded-2xl shadow-lg w-full"
                  loading="lazy"
                />
                
                <ScrollReveal animation="fade" delay={0.3}>
                  <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 glass-card p-4 md:p-6 rounded-xl shadow-lg max-w-xs">
                    <div className="flex items-center mb-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-3">
                        <Users size={20} />
                      </div>
                      <div className="font-bold text-agency-dark">Client Satisfaction</div>
                    </div>
                    <div className="flex space-x-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-2 w-full rounded-full bg-green-500"></div>
                      ))}
                    </div>
                    <p className="text-sm text-agency-text">
                      98% of our clients report exceptional satisfaction with our services and results.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section id="case-studies" className="section-padding bg-agency-gray">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="mb-6 md:mb-0 max-w-xl">
              <ScrollReveal>
                <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4">
                  Case Studies
                </span>
              </ScrollReveal>
              
              <ScrollReveal animation="slide-up" delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-agency-dark">
                  Our Recent <span className="text-gradient">Projects</span>
                </h2>
              </ScrollReveal>
            </div>
            
            <ScrollReveal animation="fade" delay={0.2}>
              <Button 
                asChild
                variant="outline" 
                className="border-gray-200 hover:bg-agency-lightBlue hover:text-agency-blue hover:border-agency-blue/20"
              >
                <Link to="/portfolio" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudy 
              id="ecommerce-platform"
              title="E-commerce Platform Redesign"
              category="Web Development"
              description="Complete redesign and development of an e-commerce platform, resulting in a 40% increase in conversions."
              image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
              delay="delay-100"
            />
            <CaseStudy 
              id="mobile-banking-app"
              title="Mobile Banking Application"
              category="Mobile Development"
              description="Secure, intuitive mobile banking app with biometric authentication and real-time transaction tracking."
              image="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=1000"
              delay="delay-200"
            />
            <CaseStudy 
              id="seo-campaign"
              title="SEO & Content Strategy"
              category="Digital Marketing"
              description="Comprehensive SEO and content strategy that increased organic traffic by 156% in six months."
              image="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1000"
              delay="delay-300"
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding overflow-hidden">
        <div className="container-width">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <ScrollReveal>
              <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4">
                Testimonials
              </span>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6">
                What Our <span className="text-gradient">Clients Say</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade" delay={0.2}>
              <p className="text-lg text-agency-text">
                Don't just take our word for it. Hear what our clients have to say about their experience working with us.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial 
              quote="Working with this agency was transformative for our business. Their expertise in web development and digital marketing helped us achieve unprecedented growth."
              author="Sarah Johnson"
              position="CEO"
              company="TechStart Inc."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
              delay="delay-100"
            />
            <Testimonial 
              quote="The team's attention to detail and commitment to excellence is unmatched. They delivered our project on time and exceeded our expectations in every way."
              author="Michael Chen"
              position="Marketing Director"
              company="GlobalBrands"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
              delay="delay-200"
            />
            <Testimonial 
              quote="Their strategic approach to our marketing campaign resulted in a significant increase in qualified leads and conversions. Highly recommended!"
              author="Emily Rodriguez"
              position="CMO"
              company="Innovate Solutions"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
              delay="delay-300"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-agency-blue text-white relative overflow-hidden">
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
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create exceptional digital experiences that drive results for your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white text-agency-blue hover:bg-white/90 transition-all"
                >
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 transition-all"
                >
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start">
    <div className="h-10 w-10 rounded-lg bg-agency-lightBlue flex items-center justify-center mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-agency-dark mb-1">{title}</h3>
      <p className="text-agency-text">{description}</p>
    </div>
  </div>
);

export default Index;

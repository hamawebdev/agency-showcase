
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

const Contact = () => {
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agency-dark mb-6 appear-animate delay-100">
              Let's discuss your <span className="text-gradient">project</span>
            </h1>
            <p className="text-lg md:text-xl text-agency-text mb-8 appear-animate delay-200">
              We're excited to hear about your project. Reach out to us for a free consultation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="order-2 lg:order-1">
              <div className="mb-12 appear-animate">
                <h2 className="text-2xl md:text-3xl font-bold text-agency-dark mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-agency-text mb-8">
                  Have questions or ready to start your project? Reach out to us using any of the methods below.
                </p>
                
                <div className="space-y-6">
                  <ContactInfo 
                    icon={<Phone className="h-5 w-5 text-agency-blue" />}
                    title="Phone"
                    content={<a href="tel:+11234567890" className="text-agency-text hover:text-agency-blue transition-colors">(123) 456-7890</a>}
                  />
                  <ContactInfo 
                    icon={<Mail className="h-5 w-5 text-agency-blue" />}
                    title="Email"
                    content={<a href="mailto:hello@agency.com" className="text-agency-text hover:text-agency-blue transition-colors">hello@agency.com</a>}
                  />
                  <ContactInfo 
                    icon={<MapPin className="h-5 w-5 text-agency-blue" />}
                    title="Address"
                    content={<span className="text-agency-text">123 Innovation Drive<br />San Francisco, CA 94103</span>}
                  />
                  <ContactInfo 
                    icon={<Clock className="h-5 w-5 text-agency-blue" />}
                    title="Business Hours"
                    content={<span className="text-agency-text">Monday - Friday: 9am - 6pm<br />Saturday - Sunday: Closed</span>}
                  />
                </div>
              </div>
              
              {/* Social Media */}
              <div className="appear-animate delay-100">
                <h3 className="text-xl font-bold text-agency-dark mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <SocialLink href="#" label="Facebook" />
                  <SocialLink href="#" label="Twitter" />
                  <SocialLink href="#" label="Instagram" />
                  <SocialLink href="#" label="LinkedIn" />
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-12 rounded-xl overflow-hidden shadow-lg appear-animate delay-200">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80&w=1000"
                  alt="Location map" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="order-1 lg:order-2 bg-white p-8 rounded-xl shadow-sm border border-gray-100 appear-animate">
              <h2 className="text-2xl md:text-3xl font-bold text-agency-dark mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
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
              Find answers to common questions about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 appear-animate delay-300">
            <FaqItem 
              question="What information do you need to provide a quote?"
              answer="To provide an accurate quote, we typically need details about your project goals, timeline, functionality requirements, design preferences, and any existing assets or systems that need to be integrated."
            />
            <FaqItem 
              question="How long does it take to complete a typical project?"
              answer="Project timelines vary based on scope and complexity. A simple website may take 4-6 weeks, while a complex web application or comprehensive marketing campaign may take 8-12 weeks or more."
            />
            <FaqItem 
              question="Do you offer ongoing maintenance and support?"
              answer="Yes, we offer various maintenance and support packages to ensure your digital assets remain secure, up-to-date, and performing optimally. We can customize a plan based on your specific needs."
            />
            <FaqItem 
              question="What is your payment structure?"
              answer="We typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we may create a milestone-based payment schedule to spread payments throughout the project."
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
                <a href="#contact-form">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
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

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) => (
  <div className="flex items-start">
    <div className="h-10 w-10 rounded-lg bg-agency-lightBlue flex items-center justify-center mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-agency-dark mb-1">{title}</h3>
      <div>{content}</div>
    </div>
  </div>
);

const SocialLink = ({ href, label }: { href: string; label: string }) => (
  <a 
    href={href}
    aria-label={label}
    className="h-10 w-10 rounded-full bg-agency-gray hover:bg-agency-blue hover:text-white flex items-center justify-center transition-colors"
  >
    {label === 'Facebook' && (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
      </svg>
    )}
    {label === 'Twitter' && (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
      </svg>
    )}
    {label === 'Instagram' && (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
      </svg>
    )}
    {label === 'LinkedIn' && (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
      </svg>
    )}
  </a>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold text-agency-dark mb-3">{question}</h3>
    <p className="text-agency-text">{answer}</p>
  </div>
);

export default Contact;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudy from '@/components/CaseStudy';

const caseStudies = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform Redesign",
    category: "Web Development",
    description: "Complete redesign and development of an e-commerce platform, resulting in a 40% increase in conversions.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
    tags: ["web", "ecommerce", "ui-ux"]
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking Application",
    category: "Mobile Development",
    description: "Secure, intuitive mobile banking app with biometric authentication and real-time transaction tracking.",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=1000",
    tags: ["mobile", "fintech", "ui-ux"]
  },
  {
    id: "seo-campaign",
    title: "SEO & Content Strategy",
    category: "Digital Marketing",
    description: "Comprehensive SEO and content strategy that increased organic traffic by 156% in six months.",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1000",
    tags: ["marketing", "seo", "content"]
  },
  {
    id: "healthcare-platform",
    title: "Healthcare Management System",
    category: "Custom Software",
    description: "Integrated healthcare management system that streamlined operations and improved patient care.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
    tags: ["web", "healthcare", "software"]
  },
  {
    id: "restaurant-app",
    title: "Restaurant Ordering App",
    category: "Mobile Development",
    description: "Mobile app for restaurant ordering and loyalty program that increased average order value by 28%.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000",
    tags: ["mobile", "food", "ui-ux"]
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Marketplace",
    category: "Web Development",
    description: "Feature-rich real estate marketplace with advanced search capabilities and virtual tours.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
    tags: ["web", "real-estate", "marketplace"]
  },
  {
    id: "social-media-campaign",
    title: "Social Media Campaign",
    category: "Digital Marketing",
    description: "Strategic social media campaign that increased engagement by 215% and drove a 45% increase in sales.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000",
    tags: ["marketing", "social-media", "advertising"]
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    category: "Custom Software",
    description: "Scalable inventory management system that reduced stock discrepancies by 98% and improved efficiency.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000",
    tags: ["software", "inventory", "logistics"]
  },
  {
    id: "fitness-app",
    title: "Fitness Tracking Application",
    category: "Mobile Development",
    description: "Personalized fitness tracking app with AI-powered workout recommendations and progress tracking.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=1000",
    tags: ["mobile", "health", "fitness"]
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);
  
  useEffect(() => {
    // Filter case studies based on active filter
    if (activeFilter === 'all') {
      setFilteredCaseStudies(caseStudies);
    } else {
      setFilteredCaseStudies(caseStudies.filter(study => study.tags.includes(activeFilter)));
    }
  }, [activeFilter]);
  
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
  }, [filteredCaseStudies]);

  // Available filters
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'software', label: 'Custom Software' }
  ];

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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agency-dark mb-6 appear-animate delay-100">
              Showcasing our <span className="text-gradient">finest work</span>
            </h1>
            <p className="text-lg md:text-xl text-agency-text mb-8 appear-animate delay-200">
              Browse our portfolio of successful projects that demonstrate our expertise and creativity.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="container-width">
          <div className="flex flex-wrap justify-center gap-2 appear-animate">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-agency-blue text-white'
                    : 'bg-agency-gray text-agency-dark hover:bg-agency-lightBlue hover:text-agency-blue'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <CaseStudy 
                key={study.id}
                id={study.id}
                title={study.title}
                category={study.category}
                description={study.description}
                image={study.image}
                delay={`delay-${(index % 3) * 100}`}
              />
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-agency-dark mb-4">No projects found</h3>
              <p className="text-agency-text mb-6">No projects match the selected filter criteria.</p>
              <Button 
                onClick={() => setActiveFilter('all')}
                className="bg-agency-blue hover:bg-agency-blue/90"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Case Study Detail (Previewing One) */}
      <section className="section-padding bg-agency-gray">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4 appear-animate">
              Featured Project
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6 appear-animate delay-100">
              E-commerce Platform <span className="text-gradient">Redesign</span>
            </h2>
            <p className="text-lg text-agency-text appear-animate delay-200">
              A closer look at how we transformed an outdated e-commerce platform into a high-converting sales machine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="appear-animate delay-200">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
                alt="E-commerce Platform Redesign" 
                className="rounded-2xl shadow-lg w-full"
                loading="lazy"
              />
            </div>
            
            <div className="space-y-6 appear-animate delay-300">
              <div>
                <h3 className="text-xl font-bold text-agency-dark mb-2">The Challenge</h3>
                <p className="text-agency-text">
                  Our client's e-commerce platform was outdated, had a poor user experience, and was experiencing declining conversion rates. They needed a complete redesign to improve performance, user experience, and mobile responsiveness.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-agency-dark mb-2">Our Approach</h3>
                <p className="text-agency-text">
                  We began with comprehensive user research and competitor analysis to identify pain points and opportunities. Our team then created a new user-centered design focused on simplifying the shopping journey and optimizing for conversions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-agency-dark mb-2">The Solution</h3>
                <p className="text-agency-text">
                  We developed a modern, responsive e-commerce platform with an intuitive interface, streamlined checkout process, and personalized product recommendations. The new platform also included advanced search capabilities and seamless integration with their inventory management system.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-agency-dark mb-2">The Results</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-2xl font-bold text-agency-blue">40%</div>
                    <div className="text-sm text-agency-text">Conversion Rate Increase</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-2xl font-bold text-agency-blue">65%</div>
                    <div className="text-sm text-agency-text">Mobile Traffic Increase</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-2xl font-bold text-agency-blue">25%</div>
                    <div className="text-sm text-agency-text">Cart Value Increase</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-2xl font-bold text-agency-blue">50%</div>
                    <div className="text-sm text-agency-text">Bounce Rate Reduction</div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  asChild
                  className="bg-agency-blue hover:bg-agency-blue/90"
                >
                  <Link to="/contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4 appear-animate">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6 appear-animate delay-100">
              What our clients <span className="text-gradient">say about us</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 appear-animate delay-200">
            <Testimonial 
              quote="The team exceeded our expectations in every way. They delivered a beautiful, functional website that has significantly increased our conversions and online presence."
              author="Jennifer Smith"
              position="CEO"
              company="Fashion Retailer"
            />
            <Testimonial 
              quote="Working with this agency was a game-changer for our business. Their expertise in digital marketing helped us achieve unprecedented growth in a competitive market."
              author="Michael Chen"
              position="Marketing Director"
              company="SaaS Company"
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
                <Link to="/contact">
                  Start Your Project
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
        </div>
      </section>
      
      <Footer />
    </>
  );
};

const Testimonial = ({ quote, author, position, company }: { quote: string; author: string; position: string; company: string }) => (
  <div className="p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
    <div className="flex mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg 
          key={i} 
          className="w-5 h-5 text-yellow-500 fill-current mr-1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
    
    <blockquote className="text-lg text-agency-dark font-medium mb-6">
      "{quote}"
    </blockquote>
    
    <div className="flex items-center">
      <div>
        <div className="font-bold text-agency-dark">{author}</div>
        <div className="text-sm text-agency-text">
          {position}, {company}
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;

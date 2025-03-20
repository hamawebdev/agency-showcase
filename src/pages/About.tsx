import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Lightbulb, Heart, Target, CheckCircle, BarChart, Award, Clock, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSkeleton from '@/components/ServiceSkeleton';
const About = () => {
  // Timeline data
  const timelineData = [{
    year: "2015",
    title: "Our Beginning",
    description: "Founded with a vision to transform digital experiences for businesses."
  }, {
    year: "2017",
    title: "First Milestone",
    description: "Expanded our team and opened our first official headquarters."
  }, {
    year: "2019",
    title: "Global Expansion",
    description: "Started working with international clients and expanded our service offerings."
  }, {
    year: "2021",
    title: "Industry Recognition",
    description: "Received multiple awards for our innovative digital solutions."
  }, {
    year: "2023",
    title: "Looking Forward",
    description: "Continuing to push boundaries and explore new technologies."
  }];

  // Container animation
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Item animation
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <>
      <Navbar />
      
      {/* Hero Section - Modern Design */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-agency-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="container-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.7,
            ease: "easeOut"
          }} className="relative">
              <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agency-dark mb-6 leading-tight">
                We're a team of <br />
                <span className="text-gradient bg-gradient-to-r from-agency-blue to-purple-500">creative experts</span>
              </h1>
              <p className="text-lg md:text-xl text-agency-text mb-8 max-w-xl">
                Our mission is to help businesses thrive in the digital world through innovative solutions and strategic thinking.
              </p>
              <Button asChild className="bg-agency-blue hover:bg-agency-blue/90 shadow-lg shadow-agency-blue/20">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut"
          }} className="relative mt-12 lg:mt-0">
              <div className="relative bg-white p-3 rounded-2xl shadow-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1500" alt="Our team" loading="lazy" className="rounded-2xl w-full h-auto max-h-[500px] object-cover shadow-lg" />
                <div className="absolute -bottom-1 -right-1 flex items-center gap-2">
                  <div className="bg-white/90 backdrop-blur-sm shadow-lg p-3 rounded-lg">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    </div>
                    <p className="text-xs font-medium mt-1">Top-rated digital agency</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 lg:-left-8 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="h-10 w-10 rounded-full bg-agency-lightBlue flex items-center justify-center text-agency-blue">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Award Winning</p>
                    <p className="text-xs text-gray-500">15+ industry awards</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Timeline/Milestones Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-agency-gray/30">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6">
              From <span className="text-gradient">vision</span> to <span className="text-gradient">reality</span>
            </h2>
            <p className="text-lg text-agency-text">
              Follow our path from humble beginnings to industry leadership
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-agency-blue/20"></div>
            
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.2
          }} className="relative z-10">
              {timelineData.map((item, index) => <motion.div key={index} variants={itemVariants} className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'} relative`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                      <div className="inline-block rounded-lg bg-agency-lightBlue text-agency-blue text-xs font-medium px-2.5 py-1 mb-3">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-agency-dark mb-2">{item.title}</h3>
                      <p className="text-agency-text">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="h-5 w-5 rounded-full bg-white border-4 border-agency-blue"></div>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section - Updated with glassmorphism */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            ease: "easeOut"
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
              <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6">
                From humble beginnings to <span className="text-gradient">industry leaders</span>
              </h2>
              <div className="space-y-4 text-agency-text">
                <p>
                  Founded in 2015, our agency was born from a passion for creating exceptional digital experiences. What began as a small team of dedicated professionals has grown into a full-service digital agency with a global client base.
                </p>
                <p>
                  Over the years, we've helped hundreds of businesses transform their digital presence and achieve remarkable growth. Our commitment to excellence, innovation, and client success has remained at the core of everything we do.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in digital marketing and software development, always staying ahead of industry trends to deliver cutting-edge solutions.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut"
          }} viewport={{
            once: true,
            amount: 0.3
          }} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div whileHover={{
                y: -5
              }} transition={{
                duration: 0.2
              }} className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=500" alt="Team collaboration" className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
                <motion.div whileHover={{
                y: -5
              }} transition={{
                duration: 0.2
              }} className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500" alt="Office environment" className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div whileHover={{
                y: -5
              }} transition={{
                duration: 0.2
              }} className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500" alt="Team meeting" className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
                <motion.div whileHover={{
                y: -5
              }} transition={{
                duration: 0.2
              }} className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=500" alt="Team celebration" className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section - Modernized */}
      <section className="section-padding bg-agency-gray">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6">
              The principles that <span className="text-gradient">guide us</span>
            </h2>
            <p className="text-lg text-agency-text">
              Our core values shape our culture, influence our decisions, and define how we work with our clients and each other.
            </p>
          </div>
          
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard icon={<Lightbulb className="h-6 w-6 text-agency-blue" />} title="Innovation" description="We constantly push boundaries and explore new ideas to deliver creative solutions." variants={itemVariants} />
            <ValueCard icon={<Users className="h-6 w-6 text-agency-blue" />} title="Collaboration" description="We believe in the power of teamwork and partnership with our clients." variants={itemVariants} />
            <ValueCard icon={<Heart className="h-6 w-6 text-agency-blue" />} title="Passion" description="We're deeply passionate about our work and committed to excellence." variants={itemVariants} />
            <ValueCard icon={<Target className="h-6 w-6 text-agency-blue" />} title="Results-Driven" description="We focus on delivering measurable results that drive business growth." variants={itemVariants} />
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.7,
              ease: "easeOut"
            }} viewport={{
              once: true,
              amount: 0.3
            }} className="relative">
                <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-agency-blue/5 to-purple-500/5 rounded-3xl transform rotate-1"></div>
                <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-purple-500/5 to-agency-blue/5 rounded-3xl transform -rotate-2"></div>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" alt="Team working together" className="rounded-2xl shadow-lg w-full" loading="lazy" />
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut"
            }} viewport={{
              once: true,
              amount: 0.3
            }} className="absolute top-4 -right-6 md:top-8 md:-right-8 glass-card bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-agency-blue mr-3">
                    <Award size={20} />
                  </div>
                  <div className="font-bold text-agency-dark">Award Winning</div>
                </div>
                <p className="text-sm text-agency-text">
                  Recognized with multiple industry awards for excellence in digital innovation.
                </p>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.7,
              ease: "easeOut"
            }} viewport={{
              once: true,
              amount: 0.3
            }}>
                <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6">
                  What sets us <span className="text-gradient">apart</span>
                </h2>
                <p className="text-lg text-agency-text mb-8">
                  We combine technical expertise, creative thinking, and strategic insight to deliver digital solutions that truly make a difference for our clients.
                </p>
                
                <div className="space-y-6">
                  <FeatureItem icon={<CheckCircle className="h-5 w-5 text-agency-blue" />} title="Industry Expertise" description="Specialized knowledge across multiple industries and digital disciplines." />
                  <FeatureItem icon={<Users className="h-5 w-5 text-agency-blue" />} title="Dedicated Team" description="A team of passionate professionals committed to your success." />
                  <FeatureItem icon={<BarChart className="h-5 w-5 text-agency-blue" />} title="Data-Driven Approach" description="We make decisions based on data and analytics for optimal results." />
                  <FeatureItem icon={<Clock className="h-5 w-5 text-agency-blue" />} title="Timely Delivery" description="We respect deadlines and deliver high-quality work on schedule." />
                </div>
                
                <div className="mt-10">
                  <Button asChild className="bg-agency-blue hover:bg-agency-blue/90 shadow-lg shadow-agency-blue/20">
                    <Link to="/services">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section - Enhanced with hover effects */}
      <section className="section-padding bg-agency-gray">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6">
              Meet the <span className="text-gradient">experts</span>
            </h2>
            <p className="text-lg text-agency-text">
              Our diverse team of talented professionals is passionate about creating exceptional digital experiences.
            </p>
          </div>
          
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <TeamMember name="Alex Johnson" position="CEO & Founder" image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500" variants={itemVariants} />
            <TeamMember name="Sophia Chen" position="Creative Director" image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500" variants={itemVariants} />
            <TeamMember name="David Kim" position="Lead Developer" image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500" variants={itemVariants} />
            <TeamMember name="Emily Rodriguez" position="Marketing Director" image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500" variants={itemVariants} />
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section - With glassmorphism */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-agency-blue to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container-width relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }} viewport={{
          once: true,
          amount: 0.3
        }} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us to discuss your project and explore how we can help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-agency-blue hover:bg-white/90 transition-all shadow-lg">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 transition-all">
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>;
};

// Updated with motion animation
const ValueCard = ({
  icon,
  title,
  description,
  variants
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  variants: any;
}) => <motion.div variants={variants} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-agency-blue/20 hover:-translate-y-1">
    <div className="h-12 w-12 rounded-lg bg-agency-lightBlue flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-agency-dark mb-3">{title}</h3>
    <p className="text-agency-text">{description}</p>
  </motion.div>;
const FeatureItem = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => <div className="flex items-start">
    <div className="h-10 w-10 rounded-lg bg-agency-lightBlue flex items-center justify-center mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-agency-dark mb-1">{title}</h3>
      <p className="text-agency-text">{description}</p>
    </div>
  </div>;

// Enhanced with motion animation
const TeamMember = ({
  name,
  position,
  image,
  variants
}: {
  name: string;
  position: string;
  image: string;
  variants: any;
}) => <motion.div variants={variants} className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg bg-white">
    <div className="aspect-[3/4] overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
    </div>
    
    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-agency-dark/90 via-agency-dark/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity">
      <h3 className="text-xl font-bold text-white mb-1 transform transition-all duration-300 translate-y-0 group-hover:-translate-y-2">
        {name}
      </h3>
      <p className="text-white/80 transform transition-all duration-300 translate-y-0 group-hover:-translate-y-2">
        {position}
      </p>
      
      <div className="flex space-x-3 mt-4 transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
        <a href="#" className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors">
          <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
          </svg>
        </a>
        <a href="#" className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors">
          <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
          </svg>
        </a>
        <a href="#" className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors">
          <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  </motion.div>;
export default About;
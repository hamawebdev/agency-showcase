import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import SmoothScroll from './SmoothScroll';
import ScrollReveal from './ScrollReveal';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Parallax effect with framer-motion
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  useEffect(() => {
    // Simulate image preloading
    const img = new Image();
    img.src = "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=1000";
    img.onload = () => setIsLoaded(true);
    return () => {
      img.onload = null;
    };
  }, []);

  // Staggered animation for the trusted logos
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

  return <div ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow effect */}
      <motion.div className="hero-glow absolute inset-0 pointer-events-none" style={{
      y,
      opacity
    }} />
      
      <div className="container-width px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="max-w-3xl">
            <ScrollReveal animation="fade" delay={0.1}>
              <span className="inline-block py-1 px-3 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-6">
                Innovative Digital Solutions
              </span>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-agency-dark mb-6">
                We craft <span className="text-gradient">exceptional</span> digital experiences
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={0.3}>
              <p className="text-lg md:text-xl text-agency-text mb-8 max-w-lg">
                Our team of experts creates custom software and marketing solutions that drive growth and transform businesses.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade" delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-agency-blue hover:bg-agency-blue/90 transition-all text-white rounded-md">
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gray-200 hover:bg-agency-lightBlue hover:text-agency-blue hover:border-agency-blue/20 transition-all rounded-md">
                  <Link to="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={0.5}>
              <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-8 items-center">
                {[20, 50, 99].map((number, i) => <div key={i} className="text-center sm:text-left">
                    <div className="font-bold text-2xl sm:text-3xl text-agency-dark">{number}+</div>
                    <div className="text-sm text-agency-text mt-1">
                      {i === 0 ? 'Team Members' : i === 1 ? 'Projects Completed' : 'Happy Clients'}
                    </div>
                  </div>)}
              </div>
            </ScrollReveal>
          </div>
          
          {/* Hero image */}
          <ScrollReveal animation="slide-right" delay={0.3}>
            <div className="relative">
              <motion.div className="absolute inset-0 bg-gradient-to-tr from-agency-blue/10 to-purple-500/10 rounded-3xl" animate={{
              rotate: -3
            }} transition={{
              duration: 0.8,
              ease: "easeInOut"
            }} />
              <motion.div className="absolute inset-0 bg-gradient-to-tr from-agency-blue/10 to-purple-500/10 rounded-3xl" animate={{
              rotate: 3
            }} transition={{
              duration: 0.8,
              ease: "easeInOut"
            }} />
              
              {!isLoaded && <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-200 aspect-video w-full animate-pulse"></div>}
              
              <div className={cn("relative rounded-2xl overflow-hidden shadow-2xl transform transition-all hover:scale-[1.01] duration-700", !isLoaded && "hidden")}>
                <img src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=1000" alt="Digital agency work" className="w-full h-auto object-cover" loading="lazy" width={600} height={400} />
              </div>
              
              <motion.div className="absolute -bottom-5 -right-5 h-24 w-24 bg-agency-blue rounded-full flex items-center justify-center text-white font-medium" animate={{
              scale: [0.9, 1, 0.9]
            }} transition={{
              repeat: Infinity,
              duration: 2
            }}>
                <div className="text-center">
                  <div className="font-bold text-xl">New</div>
                  <div className="text-xs">Project</div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Trusted by logos */}
        <ScrollReveal animation="fade" delay={0.5}>
          <motion.div className="mt-20 flex flex-wrap justify-center gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            {['Microsoft', 'Google', 'Amazon', 'Meta', 'Netflix'].map((company, i) => <motion.div key={company} className="text-center opacity-70 hover:opacity-100 transition-opacity" variants={itemVariants}>
                
              </motion.div>)}
          </motion.div>
        </ScrollReveal>
      </div>
      
      {/* Scroll indicator - hidden on mobile */}
      {!isMobile && (
        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center" animate={{
          y: [0, 10, 0]
        }} transition={{
          repeat: Infinity,
          duration: 2
        }}>
          <SmoothScroll to="#services" offset={-100}>
            <span className="text-sm font-medium text-agency-text/70 mb-2">Scroll to explore</span>
            <div className="h-12 w-6 border-2 border-agency-text/20 rounded-full relative">
              <div className="h-2 w-2 bg-agency-blue rounded-full absolute left-1/2 top-1 transform -translate-x-1/2 animate-bounce"></div>
            </div>
          </SmoothScroll>
        </motion.div>
      )}
    </div>;
};

export default Hero;

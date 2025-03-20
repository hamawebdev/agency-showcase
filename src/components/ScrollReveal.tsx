
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-right' | 'zoom';
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const variants = {
  'fade': {
    visible: { opacity: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0 }
  },
  'slide-up': {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, y: 50 }
  },
  'slide-right': {
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, x: -50 }
  },
  'zoom': {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.8 }
  }
};

const ScrollReveal = ({ 
  children, 
  animation = 'fade', 
  delay = 0, 
  className = '',
  threshold = 0.1,
  once = true
}: ScrollRevealProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { 
    amount: threshold, // Changed from threshold to amount which is the correct property name
    once
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[animation]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

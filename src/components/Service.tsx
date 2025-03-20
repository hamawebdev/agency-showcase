
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ServiceProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  delay?: string;
  index?: number;
}

const Service = ({ 
  icon: Icon, 
  title, 
  description, 
  className, 
  iconClassName,
  delay = 'delay-0',
  index = 0
}: ServiceProps) => {
  return (
    <motion.div 
      className={cn(
        'group p-6 rounded-xl transition-all duration-500 border border-transparent hover:border-gray-100 hover:shadow-lg bg-white',
        className,
        delay
      )}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div 
        className={cn(
          'w-14 h-14 rounded-lg bg-agency-lightBlue flex items-center justify-center mb-5 text-agency-blue',
          iconClassName
        )}
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.2 } 
        }}
      >
        <Icon size={24} />
      </motion.div>
      
      <h3 className="text-xl font-bold text-agency-dark mb-3 group-hover:text-agency-blue transition-colors">
        {title}
      </h3>
      
      <p className="text-agency-text">
        {description}
      </p>
    </motion.div>
  );
};

export default Service;

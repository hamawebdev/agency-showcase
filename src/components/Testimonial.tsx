
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating?: number;
  image?: string;
  className?: string;
  delay?: string;
  index?: number;
}

const Testimonial = ({ 
  quote, 
  author, 
  position, 
  company, 
  rating = 5, 
  image,
  className,
  delay = 'delay-0',
  index = 0
}: TestimonialProps) => {
  const [imageLoaded, setImageLoaded] = useState(!image);
  
  return (
    <motion.div 
      className={cn(
        'p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-md',
        className,
        delay
      )}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6,
            delay: index * 0.1
          } 
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      {/* Rating stars */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={cn(
              'mr-1',
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            )}
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-lg text-agency-dark font-medium mb-6">
        "{quote}"
      </blockquote>
      
      {/* Author info */}
      <div className="flex items-center">
        {image && (
          <div className="mr-4 h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
            {!imageLoaded && <Skeleton className="h-12 w-12 rounded-full" />}
            
            <motion.img 
              src={image} 
              alt={author} 
              className={cn("h-full w-full object-cover", !imageLoaded && "hidden")}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              whileHover={{ scale: 1.1 }}
              width={48}
              height={48}
            />
          </div>
        )}
        
        <div>
          <div className="font-bold text-agency-dark">{author}</div>
          <div className="text-sm text-agency-text">
            {position}, {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;

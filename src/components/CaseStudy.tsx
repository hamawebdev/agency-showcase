
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudyProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  className?: string;
  delay?: string;
}

const CaseStudy = ({ 
  id, 
  title, 
  category, 
  description, 
  image,
  className,
  delay = 'delay-0'
}: CaseStudyProps) => {
  return (
    <div 
      className={cn(
        'appear-animate group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl',
        className,
        delay
      )}
    >
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-agency-dark/90 to-transparent p-6 md:p-8 flex flex-col justify-end">
        <div className="transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-3">
            {category}
          </span>
          
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          
          <p className="text-white/80 mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {description}
          </p>
          
          <Link 
            to={`/portfolio/${id}`} 
            className="inline-flex items-center text-white font-medium hover:text-agency-blue transition-colors"
          >
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;

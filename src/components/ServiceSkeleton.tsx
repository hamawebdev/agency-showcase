
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

interface ServiceSkeletonProps {
  count?: number;
}

const ServiceSkeleton = ({ count = 3 }: ServiceSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            repeatType: "reverse", 
            delay: index * 0.1
          }}
          className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm"
        >
          <Skeleton className="w-14 h-14 rounded-lg mb-5 bg-gray-200" />
          <Skeleton className="h-7 w-3/4 mb-4 bg-gray-200" />
          <Skeleton className="h-4 w-full mb-3 bg-gray-200" />
          <Skeleton className="h-4 w-5/6 mb-3 bg-gray-200" />
          <Skeleton className="h-4 w-4/6 bg-gray-200" />
        </motion.div>
      ))}
    </>
  );
};

export default ServiceSkeleton;

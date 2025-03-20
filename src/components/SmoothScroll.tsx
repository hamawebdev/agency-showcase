import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
interface SmoothScrollProps {
  to: string;
  duration?: number;
  offset?: number;
  className?: string;
  activeClass?: string;
  children: React.ReactNode;
  spy?: boolean;
  smooth?: boolean;
  exactActiveClass?: string;
  isExternal?: boolean;
  href?: string;
  onClick?: () => void;
}
const SmoothScroll = ({
  to,
  duration = 800,
  offset = -80,
  className = '',
  activeClass = 'active',
  children,
  spy = true,
  smooth = true,
  exactActiveClass,
  isExternal = false,
  href,
  onClick
}: SmoothScrollProps) => {
  // Check if the target is on the current page (starts with '#')
  const isCurrentPageTarget = to.startsWith('#');
  const targetId = isCurrentPageTarget ? to.substring(1) : to;

  // External link
  if (isExternal && href) {
    return <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>;
  }

  // Same page scroll
  if (isCurrentPageTarget || !to.includes('/')) {
    return;
  }

  // Different page navigation with React Router
  return <RouterLink to={to} className={className} onClick={onClick}>
      {children}
    </RouterLink>;
};
export default SmoothScroll;
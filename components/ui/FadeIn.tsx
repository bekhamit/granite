import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'none';
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  direction = 'up'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getInitialY = () => {
    if (direction === 'up') return 40;
    if (direction === 'down') return -40;
    return 0;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: getInitialY() }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: getInitialY() }}
      transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
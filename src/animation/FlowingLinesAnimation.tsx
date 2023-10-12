// FlowingLinesAnimation.tsx
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

interface FlowingLinesAnimationProps {
  delay?: number;
  black?: boolean;
}

const FlowingLinesAnimation: React.FC<FlowingLinesAnimationProps> = ({
  delay,
  black,
}) => {
  const colorLogo = black ? 'black' : 'white';
  const leftArrowControls = useAnimation();
  const rightArrowControls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      // Start the left arrow animation
      leftArrowControls.start({
        x: ['0', 'calc(100% - 32px)'], // Animate from 100% to (100% - 16px)
        transition: {
          duration: 6, // Adjust the animation duration as needed
          ease: 'easeOut', // Use a linear easing for smooth flow
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: 'reverse', // Reverse the animation after every iteration
        },
      });
      rightArrowControls.start({
        x: ['calc(100% - 32px)', '0'], // Animate from 0% to 100%
        transition: {
          duration: 6, // Adjust the animation duration as needed
          ease: 'easeOut', // Use a linear easing for smooth flow
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: 'reverse', // Reverse the animation after every iteration
        },
      });
    }, delay);
  }, [leftArrowControls, rightArrowControls, delay]);
  return (
    <div className="">
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {/* Left arrow */}
        <motion.path
          d="M0 0 L32 16 L0 32"
          fill="transparent"
          stroke={`${colorLogo}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ x: '0' }}
          animate={leftArrowControls}
        />

        {/* Right arrow */}
        <motion.path
          d="M32 0 L0 16 L32 32"
          fill="transparent"
          stroke={`${colorLogo}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ x: 'calc(100% - 32px)' }}
          animate={rightArrowControls}
        />
      </motion.svg>
    </div>
  );
};

export default FlowingLinesAnimation;

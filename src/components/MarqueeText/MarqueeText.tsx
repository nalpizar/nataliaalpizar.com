import React from 'react';
import { motion } from 'framer-motion';
import './MarqueeText.scss';

const MarqueeText: React.FC = () => {
  const text =
    "Let's create together &nbsp;&nbsp;&nbsp;&nbsp; Let's create together &nbsp;&nbsp;&nbsp;&nbsp; Let's create together &nbsp;&nbsp;&nbsp;&nbsp; Let's create together";

  return (
    <div className="marquee-container">
      <motion.div
        className="marquee"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
      >
        <div className="marquee-content">
          <span dangerouslySetInnerHTML={{ __html: text }} />
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </motion.div>
    </div>
  );
};

export default MarqueeText;

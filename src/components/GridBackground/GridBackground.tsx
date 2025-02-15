import React from 'react';
import { motion } from 'framer-motion';
import useGridItems from '../../hooks/useGridItems';
import './GridBackground.scss';

const GridBackground: React.FC = () => {
  const itemSize = 75;
  const gridItems = useGridItems(itemSize);

  return (
    <div className="grid-background">
      {gridItems.map((item) => (
        <motion.div
          key={item}
          className="grid-item"
          whileHover={{ backgroundColor: '#184027' }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
};

export default GridBackground;

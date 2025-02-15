import { useState, useEffect } from 'react';

const useGridItems = (itemSize: number) => {
  const [gridItems, setGridItems] = useState<number[]>([]);

  useEffect(() => {
    const updateGridItems = () => {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const numRows = Math.ceil(viewportHeight / itemSize);
      const numCols = Math.ceil(viewportWidth / itemSize);
      const totalItems = numRows * numCols;
      setGridItems(Array.from({ length: totalItems }, (_, index) => index));
    };

    updateGridItems();
    window.addEventListener('resize', updateGridItems);

    return () => {
      window.removeEventListener('resize', updateGridItems);
    };
  }, [itemSize]);

  return gridItems;
};

export default useGridItems;

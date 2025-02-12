import { useState } from 'react';

export const useActiveNavItem = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return { activeItem, handleItemClick };
};

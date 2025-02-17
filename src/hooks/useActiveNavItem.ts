import { useState } from 'react';
import { useSectionObserver } from './useSectionObserver';

export function useActiveNavItem(sectionIds: string[]) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useSectionObserver(sectionIds, setActiveItem);

  const handleItemClick = (id: string) => {
    setActiveItem(id);
  };

  return { activeItem, handleItemClick };
}

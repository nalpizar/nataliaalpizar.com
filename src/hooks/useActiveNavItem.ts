import { useState, useEffect } from 'react';

export const useActiveNavItem = (sectionIds: string[]) => {
  const [activeItem, setActiveItem] = useState<string>('');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id));
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sectionIds]);

  return { activeItem, handleItemClick };
};

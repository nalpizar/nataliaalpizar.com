import { useEffect, useRef } from 'react';

export function useSectionObserver(
  sectionIds: string[],
  callback: (id: string | null) => void
) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersections = (entries: IntersectionObserverEntry[]) => {
      let activeId: string | null = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting && sectionIds.includes(entry.target.id)) {
          activeId = entry.target.id;
        }
      });

      callback(activeId);
    };

    observer.current = new IntersectionObserver(handleIntersections, {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    });

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    elements.forEach((element) => observer.current?.observe(element));

    return () => {
      observer.current?.disconnect();
    };
  }, [sectionIds, callback]);
}

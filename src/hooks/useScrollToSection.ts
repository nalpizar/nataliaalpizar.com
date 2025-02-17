import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1);
    if (path) {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
}

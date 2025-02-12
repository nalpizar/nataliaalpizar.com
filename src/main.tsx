import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import App from './App.tsx';
import { Navigation } from './components/Navigation/Navigation';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="home">
      <Navigation />
      <App />
    </div>
  </StrictMode>
);

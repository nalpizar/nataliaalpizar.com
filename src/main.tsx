import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="home">
        <Navigation />
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);

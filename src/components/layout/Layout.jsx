import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTopButton from '../ScrollButton/ScrollToTopButton';
import CookieBanner from '../CookieBanner/CookieBanner';
import ErrorBoundary from '../common/ErrorBoundary';
import { usePageTracking } from '../../hooks/useSEO';

const Layout = ({ children }) => {
  const location = useLocation();
  usePageTracking();

  return (
    <ErrorBoundary>
      <div className="min-h-screen w-full bg-white overflow-x-hidden">
        <Navbar />
        
        <main className="pt-14 sm:pt-16 w-full">
          {children}
        </main>
        
        <ScrollToTopButton />
        <Footer />
        <CookieBanner />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;
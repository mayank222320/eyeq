import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Breadcrumbs from '../common/Breadcrumbs';
import ScrollToTopButton from '../ScrollButton/ScrollToTopButton';
import CookieBanner from '../CookieBanner/CookieBanner';
import ErrorBoundary from '../common/ErrorBoundary';
import { usePageTracking } from '../../hooks/useSEO';

const Layout = ({ children, showBreadcrumbs = true }) => {
  const location = useLocation();
  usePageTracking();

  const shouldShowBreadcrumbs = showBreadcrumbs && location.pathname !== '/';

  return (
    <ErrorBoundary>
      <div className="min-h-screen w-full bg-white overflow-x-hidden">
        <Navbar />
        
        <main className="pt-14 sm:pt-16 w-full">
          {shouldShowBreadcrumbs && <Breadcrumbs />}
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
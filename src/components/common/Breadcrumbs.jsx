import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import SEOHead from '../SEO/SEOHead';
import { breadcrumbSchema } from '../SEO/StructuredData';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap = {
    '': 'Home',
    'about': 'About',
    'services': 'Services',
    'products': 'Products',
    'copmap': 'CopMap',
    'clients': 'Clients',
    'careers': 'Careers',
    'blog': 'Blog',
    'contact': 'Contact',
    'legal': 'Legal'
  };

  const breadcrumbItems = [
    { name: 'Home', url: 'https://eyeqlytics.com/' }
  ];

  let currentPath = '';
  pathnames.forEach((pathname) => {
    currentPath += `/${pathname}`;
    breadcrumbItems.push({
      name: breadcrumbNameMap[pathname] || pathname,
      url: `https://eyeqlytics.com${currentPath}`
    });
  });

  if (breadcrumbItems.length <= 1) return null;

  return (
    <>
      <SEOHead structuredData={breadcrumbSchema(breadcrumbItems)} />
      <nav aria-label="Breadcrumb" className="py-4 px-4 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link
              to="/"
              className="flex items-center hover:text-blue-600 transition-colors"
              aria-label="Home"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = breadcrumbNameMap[pathname] || pathname;

            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                {isLast ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {name}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, UNIVERSITY_INFO } from '../../constants';

const Header = () => {
  const location = useLocation();

  // Don't show header on home page
  if (location.pathname === '/') {
    return null;
  }

  // Filter navigation links based on current path
  const visibleLinks = NAV_LINKS.filter((link) => {
    if (link.hideOn && link.hideOn.includes(location.pathname)) {
      return false;
    }
    return true;
  });

  return (
    <header className='bg-white border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <img src='logo.jpg' alt='Logo' />
        <div className='flex justify-between items-center h-16'>
          {/* Logo à gauche */}
          <div className='flex items-center'>
            <div className='text-xl font-bold text-gray-900'>
              UNIVERSITÉ DE YAOUNDÉ II
            </div>
          </div>

        {/* Navigation */}
        <nav
          aria-label='Navigation principale'
          className='flex text-gray-700 font-medium ml-auto space-x-10'
        >
          {visibleLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-blue-600 transition-colors ${
                location.pathname === link.to
                  ? 'text-blue-600 font-semibold'
                  : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

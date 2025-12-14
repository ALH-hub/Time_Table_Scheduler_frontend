import React, { useState } from 'react';
import { ADMIN_TABS } from '../../constants/adminDashboard';

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentTab = ADMIN_TABS.find((tab) => tab.id === activeTab);

  return (
    <div className='sticky top-0 z-40 shadow-lg w-full bg-white border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Mobile Tab Selector */}
        <div className='md:hidden py-4'>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='w-full flex items-center justify-between px-4 py-2 text-left border border-gray-300 rounded-md bg-white'
          >
            <span className='text-gray-900 font-medium'>
              {currentTab?.label}
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${
                isMobileMenuOpen ? 'transform rotate-180' : ''
              }`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className='absolute left-4 right-4 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50'>
              {ADMIN_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 ${
                    activeTab === tab.id
                      ? 'bg-gray-100 text-gray-900 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-6 lg:gap-12 text-sm font-medium bg-white pb-2'>
          {ADMIN_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 border-b-2 transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-gray-900 text-gray-900 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:-translate-y-1'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavigationTabs;

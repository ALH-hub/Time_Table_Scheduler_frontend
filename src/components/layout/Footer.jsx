import React from 'react';
import { UNIVERSITY_INFO, APP_INFO } from '../../constants';

const Footer = () => {
  return (
    <footer className='bg-white border-t border-gray-200 text-gray-700 py-12 mt-auto'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-8'>
          <div>
            <h4 className='font-bold text-gray-900 mb-3'>About</h4>
            <p className='text-sm text-gray-600'>UniSchedule provides easy access to university timetables for students, parents, and staff. View course schedules, room assignments, and professor information all in one place.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-900 mb-3'>Quick Links</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href='/' className='text-gray-600 hover:text-blue-600'>Home</a></li>
              <li><a href='/student' className='text-gray-600 hover:text-blue-600'>View Timetables</a></li>
              <li><a href='/login' className='text-gray-600 hover:text-blue-600'>Admin Access</a></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-gray-900 mb-3'>Contact Info</h4>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-center gap-2'>
                <span className='text-gray-600'>{UNIVERSITY_INFO.contact}</span>
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-gray-600'>{UNIVERSITY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-200 pt-6'>
          <p className='text-gray-500 text-xs text-center'>
            &copy; {APP_INFO.year} University Timetable Scheduler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

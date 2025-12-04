import React from 'react';
import { UNIVERSITY_INFO, APP_INFO } from '../../constants';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-6 border-t border-gray-700 w-full h-25 pt-4 '>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-2 text-2xl'>
        <p className='font-semibold text-xl mb-1'>{UNIVERSITY_INFO.name}</p>
        <p className='text-gray-400 text-sm mb-3'>
          Système de Gestion des Emplois du Temps
        </p>
        <div className='border-t border-gray-700 pt-3'>
          <p className='text-gray-500 text-sm'>
            &copy; {APP_INFO.year} Tous droits réservés |{' '}
            {UNIVERSITY_INFO.address} | Contact: {UNIVERSITY_INFO.contact}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

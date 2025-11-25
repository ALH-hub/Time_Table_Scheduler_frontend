import React from 'react';
import { UNIVERSITY_INFO, APP_INFO } from '../../constants';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-16 mt-auto'>
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          {/* Top Section - Logo */}
          <div className='mb-12 pb-8 border-b border-gray-800'>
            <div className='flex items-center gap-2'>
              <div className='text-3xl font-bold text-blue-500'>UY1</div>
              <div className='text-lg font-semibold text-white'>Emploi du temps</div>
            </div>
            <p className='text-sm text-gray-400 mt-2'>Système de Gestion des Emplois du Temps</p>
          </div>

          {/* Middle Section - Content Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
            {/* About Section */}
            <div>
              <h4 className='font-semibold text-white mb-4 text-base'>À propos</h4>
              <p className='text-sm text-gray-400 leading-relaxed'>L'Université de Yaoundé I est l'une des plus grandes universités du Cameroun avec plus de {UNIVERSITY_INFO.students} étudiants répartis dans {UNIVERSITY_INFO.faculties} grandes facultés majeurs. Notre système facilite l'accès aux informations pédagogiques.</p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h4 className='font-semibold text-white mb-4 text-base'>Liens rapides</h4>
              <ul className='space-y-3 text-sm'>
                <li>
                  <a href='/' className='text-gray-400 hover:text-blue-400 transition duration-200 inline-flex items-center gap-1'>
                    <span>→</span> Accueil
                  </a>
                </li>
                <li>
                  <a href='/student' className='text-gray-400 hover:text-blue-400 transition duration-200 inline-flex items-center gap-1'>
                    <span>→</span> Emploi du temps
                  </a>
                </li>
                <li>
                  <a href='/login' className='text-gray-400 hover:text-blue-400 transition duration-200 inline-flex items-center gap-1'>
                    <span>→</span> Accès Admin
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className='font-semibold text-white mb-4 text-base'>Contact</h4>
              <ul className='space-y-3 text-sm'>
                <li className='flex items-start gap-3'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0'>📞</span>
                  <a href={`tel:${UNIVERSITY_INFO.phone}`} className='text-gray-400 hover:text-blue-400 transition duration-200 break-all'>{UNIVERSITY_INFO.phone}</a>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0'>✉️</span>
                  <a href={`mailto:${UNIVERSITY_INFO.email}`} className='text-gray-400 hover:text-blue-400 transition duration-200 break-all'>{UNIVERSITY_INFO.email}</a>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0'>📍</span>
                  <span className='text-gray-400'>{UNIVERSITY_INFO.address}</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0'>🌐</span>
                  <a href={UNIVERSITY_INFO.website} target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-blue-400 transition duration-200'>Site web</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className='border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
            <p className='text-xs text-gray-500'>
              &copy; {APP_INFO.year} {UNIVERSITY_INFO.name} - Système de Gestion des Emplois du Temps. Tous droits réservés.
            </p>
            <div className='flex gap-4 text-xs text-gray-500'>
              <a href='#' className='hover:text-blue-400 transition'>Conditions d'utilisation</a>
              <span>|</span>
              <a href='#' className='hover:text-blue-400 transition'>Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

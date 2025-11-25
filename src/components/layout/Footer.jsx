import React from 'react';
import { UNIVERSITY_INFO, APP_INFO } from '../../constants';

const Footer = () => {
  return (
    <footer className='bg-gray-50 border-t border-gray-200 text-gray-700 py-12 mt-auto'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-8'>
          <div>
            <h4 className='font-semibold text-gray-900 mb-3 text-sm'>À propos</h4>
            <p className='text-sm text-gray-600 leading-relaxed'>L'Université de Yaoundé I est l'une des plus grandes universités du Cameroun avec plus de {UNIVERSITY_INFO.students} étudiants répartis dans {UNIVERSITY_INFO.faculties} grandes facultés majeurs. Notre système d'emploi du temps facilite l'accès aux informations pédagogiques pour tous.</p>
          </div>
          <div>
            <h4 className='font-semibold text-gray-900 mb-3 text-sm'>Liens rapides</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href='/' className='text-gray-600 hover:text-blue-600 transition'>Accueil</a></li>
              <li><a href='/student' className='text-gray-600 hover:text-blue-600 transition'>Emploi du temps</a></li>
              <li><a href='/login' className='text-gray-600 hover:text-blue-600 transition'>Accès Admin</a></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-gray-900 mb-3 text-sm'>Informations de Contact</h4>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-center gap-2'>
                <span>📞</span>
                <a href={`tel:${UNIVERSITY_INFO.phone}`} className='text-gray-600 hover:text-blue-600 transition'>{UNIVERSITY_INFO.phone}</a>
              </li>
              <li className='flex items-center gap-2'>
                <span>✉️</span>
                <a href={`mailto:${UNIVERSITY_INFO.email}`} className='text-gray-600 hover:text-blue-600 transition'>{UNIVERSITY_INFO.email}</a>
              </li>
              <li className='flex items-center gap-2'>
                <span>📍</span>
                <span className='text-gray-600'>{UNIVERSITY_INFO.address}</span>
              </li>
              <li className='flex items-center gap-2'>
                <span>🌐</span>
                <a href={UNIVERSITY_INFO.website} target='_blank' rel='noopener noreferrer' className='text-gray-600 hover:text-blue-600 transition'>Site web</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-200 pt-6'>
          <p className='text-gray-500 text-xs text-center'>
            &copy; {APP_INFO.year} {UNIVERSITY_INFO.name} - Système de Gestion des Emplois du Temps. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

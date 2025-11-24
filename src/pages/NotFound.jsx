import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const NotFound = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center'>
      <div className='max-w-5xl w-full mx-auto bg-white shadow-xl rounded-lg overflow-hidden'>
        <Header />

        <main className='py-16 px-6 text-center grow flex flex-col items-center justify-center min-h-[500px]'>
          <div className='text-9xl font-bold text-gray-300 mb-4'>404</div>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Page non trouvée
          </h1>
          <p className='text-lg text-gray-600 mb-8 max-w-md'>
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className='flex gap-4'>
            <Button to='/' size='lg'>
              Retour à l'accueil
            </Button>
            <Button to='/student' size='lg' variant='secondary'>
              Voir les emplois du temps
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default NotFound;

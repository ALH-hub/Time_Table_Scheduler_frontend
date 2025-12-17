import React from 'react';
import { Button } from '../components/common';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const NotFound = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center'>
      <div className='max-w-5xl w-full mx-auto bg-white shadow-xl rounded-lg overflow-hidden'>
        <Header />

        <main className='py-8 sm:py-16 px-4 sm:px-6 text-center grow flex flex-col items-center justify-center min-h-[500px]'>
          <div className='text-6xl sm:text-8xl md:text-9xl font-bold text-gray-300 mb-4'>404</div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Page Not Found
          </h1>
          <p className='text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-md px-4'>
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4'>
            <Button to='/' size='lg' className='w-full sm:w-auto'>
              Back to Home
            </Button>
            <Button to='/student' size='lg' variant='secondary' className='w-full sm:w-auto'>
              View Timetables
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center'>
      <div className='w-full mx-auto bg-white shadow-xl rounded-lg overflow-hidden h-screen flex flex-col'>
        <Header currentPath={pathname} />
        <main className='py-16 px-6 text-center grow flex flex-col justify-center items-center gap-4'>
          <h1 className='text-4xl font-extrabold text-gray-900 mb-4'>
            {APP_INFO.name}
          </h1>
          <h2 className='text-xl text-gray-700 mb-10'>{APP_INFO.tagline}</h2>
          <div className='flex flex-col md:flex-row justify-center items-center gap-6 px-3 py-2 m-3'>
            <Button to='/student' size='lg'>
              Consulter les emplois du temps
            </Button>
            <Button to='/login' size='lg' variant='secondary'>
              Connexion Admin
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='flex-grow'>
        {/* Description */}
        <section className='py-20 px-4 bg-white'>
          <div className='max-w-3xl mx-auto text-center'>
            <p className='text-gray-600 text-lg leading-relaxed'>
              The University of Yaoundé I timetable system allows students, teachers and parents to easily view class schedules, classrooms and professional information in one place.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

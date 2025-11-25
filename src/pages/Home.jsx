import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import { APP_INFO } from '../constants';

const Home = () => {
  return (
    <div className='min-h-screen bg-white flex flex-col'>
      {/* Header */}
      <header className='bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center gap-2'>
              <div className='text-2xl font-bold text-blue-600'>UY</div>
              <div className='text-sm font-semibold text-gray-900'>UniSchedule</div>
            </div>
            <nav className='flex gap-8 text-sm font-medium text-gray-600'>
              <a href='#home' className='text-blue-600 font-semibold'>Home</a>
              <Link to='/student' className='hover:text-blue-600'>Timetables</Link>
              <Link to='/login' className='hover:text-blue-600'>Admin Login</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative h-96 bg-cover bg-center flex items-center justify-center text-white' style={{ backgroundImage: 'url(/public/assets/bg-university.png)', backgroundAttachment: 'fixed' }}>
        <div className='absolute inset-0 bg-black/30'></div>
        <div className='relative z-10 text-center px-4'>
          <h1 className='text-5xl font-bold mb-4'>University Timetable Scheduler</h1>
          <p className='text-xl text-white/90 mb-8'>Access your course schedules anytime, anywhere. Simple, fast, and always up-to-date.</p>
          <div className='flex gap-4 justify-center'>
            <Link to='/student' className='bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition'>
              View Timetables
            </Link>
            <Link to='/login' className='bg-white text-blue-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition'>
              Admin Access
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='flex-grow'>
        {/* Description */}
        <section className='py-16 px-4 bg-gray-50'>
          <div className='max-w-3xl mx-auto text-center'>
            <p className='text-gray-700 text-lg leading-relaxed'>
              UniSchedule provides easy access to university timetables for students, parents, and staff. View course schedules, room assignments, and professor information all in one place.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className='py-16 px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-blue-600 mb-4'>1</div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>For Students</h3>
                <p className='text-gray-600'>View weekly course schedules, room assignments, and professor information all in one place.</p>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-blue-600 mb-4'>2</div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>For Administration</h3>
                <p className='text-gray-600'>Manage timetables easily with an intuitive interface designed for efficiency.</p>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-blue-600 mb-4'>3</div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Efficient & Fast</h3>
                <p className='text-gray-600'>Modern and responsive interface that works seamlessly on all devices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Legend */}
        <section className='py-12 px-4 bg-gray-50 border-t border-gray-200'>
          <div className='max-w-6xl mx-auto'>
            <h3 className='text-lg font-bold text-gray-900 mb-6'>Color coding by department</h3>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
              <div className='flex items-center gap-2'>
                <div className='w-6 h-6 bg-blue-500 rounded'></div>
                <span className='text-sm text-gray-700'>Computer Science</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-6 h-6 bg-blue-400 rounded'></div>
                <span className='text-sm text-gray-700'>Engineering</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-6 h-6 bg-blue-300 rounded'></div>
                <span className='text-sm text-gray-700'>Business</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-6 h-6 bg-indigo-500 rounded'></div>
                <span className='text-sm text-gray-700'>Medicine</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-6 h-6 bg-purple-400 rounded'></div>
                <span className='text-sm text-gray-700'>Arts</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

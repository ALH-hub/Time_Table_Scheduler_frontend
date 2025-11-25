import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className='min-h-screen bg-white flex flex-col'>
      {/* Header */}
      <header className='bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center gap-2'>
              <div className='text-2xl font-bold text-blue-600'>UY1</div>
              <div className='text-sm font-semibold text-gray-900'>Emploi du temps</div>
            </div>
            <nav className='flex gap-16 text-sm font-medium text-gray-600'>
              <a href='#home' className='text-blue-600 font-semibold'>Accueil</a>
              <Link to='/student' className='hover:text-blue-600 transition'>Emploi du temps</Link>
              <Link to='/login' className='hover:text-blue-600 transition'>Connexion Admin</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative h-96 bg-cover bg-center flex items-center justify-center text-white' style={{ backgroundImage: 'url(/public/assets/bg-university.png)', backgroundAttachment: 'fixed' }}>
        <div className='absolute inset-0 bg-black/35'></div>
        <div className='relative z-10 text-center px-4'>
          <h1 className='text-5xl font-bold mb-4'>Système d'Emploi du Temps</h1>
          <p className='text-lg text-white/95 mb-8 font-normal'>Consultez vos cours n'importe quand, n'importe où. Simple, rapide et toujours à jour.</p>
          <div className='flex gap-4 justify-center'>
            <Link to='/student' className='bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition flex items-center gap-2 shadow-sm'>
              Consulter les emplois du temps
              <span>→</span>
            </Link>
            <Link to='/login' className='bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition border border-gray-200 shadow-sm'>
              Accès Administration
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='flex-grow'>
        {/* Description */}
        <section className='py-16 px-4 bg-white'>
          <div className='max-w-3xl mx-auto text-center'>
            <p className='text-gray-600 text-base leading-relaxed'>
              Le système d'emploi du temps de l'Université de Yaoundé I permet aux étudiants, enseignants et parents de consulter facilement les horaires des cours, les salles de classe et les informations professionnelles en un seul endroit.
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

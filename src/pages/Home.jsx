import { useLocation } from 'react-router-dom';
import { Button } from '../components/common';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { APP_INFO } from '../constants';

const Home = () => {
  const { pathname } = useLocation();

  return (
    <div className='min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center gap-2'>
      <Header currentPath={pathname} />
      <main className='py-16 px-6 text-center flex flex-col items-center justify-center gap-16 grow'>
        <h1 className='text-4xl font-extrabold text-gray-900 mb-4'>
          {APP_INFO.name}
        </h1>
        <h2 className='text-xl text-gray-700 mb-10'>{APP_INFO.tagline}</h2>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
          <Button to='/student' size='lg' variant='primary'>
            Consulter les emplois du temps
          </Button>
          <Button to='/login' size='lg' variant='secondary'>
            Connexion Admin
          </Button>
        </div>
        <p className='text-base text-gray-600 mt-16 max-w-2xl mx-auto italic'>
          {APP_INFO.description}
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

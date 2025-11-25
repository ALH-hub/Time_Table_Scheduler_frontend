import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/common';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useForm } from '../hooks';
import { validateForm } from '../utils/helpers';

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { values, errors, handleChange, handleBlur, setErrors } = useForm({
    identifiant: '',
    motdepasse: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation rules
    const validationErrors = validateForm(values, {
      identifiant: { required: true, message: "L'identifiant est requis" },
      motdepasse: {
        required: true,
        minLength: 4,
        message: 'Le mot de passe doit contenir au moins 4 caractères',
      },
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log('Login attempt:', values);
      navigate('/admin');
    }, 1000);
  };

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Header />

      <main className='flex-grow flex items-center justify-center px-4 py-20 bg-gray-50'>
        <div className='max-w-md w-full bg-white rounded-md shadow-sm p-8 border border-gray-200'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-2'>Portail Administration</h2>
            <p className='text-gray-500 text-sm'>Entrez vos identifiants pour accéder au tableau de bord</p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Identifiant</label>
              <input
                type='text'
                name='identifiant'
                value={values.identifiant}
                onChange={handleChange}
                onBlur={handleBlur}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm'
                placeholder='admin'
              />
              {errors.identifiant && <p className='text-red-600 text-xs mt-1'>{errors.identifiant}</p>}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Mot de passe</label>
              <input
                type='password'
                name='motdepasse'
                value={values.motdepasse}
                onChange={handleChange}
                onBlur={handleBlur}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm'
                placeholder='Entrez votre mot de passe'
              />
              {errors.motdepasse && <p className='text-red-600 text-xs mt-1'>{errors.motdepasse}</p>}
            </div>

            <div className='flex items-center'>
              <input type='checkbox' id='remember' className='h-4 w-4 border-gray-300 rounded' />
              <label htmlFor='remember' className='ml-2 text-sm text-gray-600'>Se souvenir de moi</label>
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition text-sm'
            >
              {isSubmitting ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          <div className='mt-6 text-center'>
            <Link to='/' className='text-sm text-blue-600 hover:text-blue-700 transition'>
              Retour à l'accueil
            </Link>
          </div>

          <div className='mt-6 p-3 bg-blue-50 border border-blue-200 rounded-md'>
            <p className='text-xs text-blue-700'>
              <span className='font-medium'>Accès démo :</span> Utilisez n'importe quels identifiants
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;

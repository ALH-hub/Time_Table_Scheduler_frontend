import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '../components/common';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { BackIcon } from '../components/icons';
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

    // TODO: Implement actual authentication logic
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to admin dashboard after successful login
      console.log('Login attempt:', values);
    }, 1000);
  };

  return (
    <div className='min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center'>
      <div className='max-w-5xl w-full mx-auto bg-white shadow-xl rounded-lg overflow-hidden'>
        <Header />

        <main className='py-16 px-6 flex justify-center grow'>
          <div className='p-10 border border-gray-300 rounded-lg shadow-md max-w-sm w-full bg-gray-50'>
            <h2 className='text-xl font-bold text-gray-800 mb-6 text-center'>
              Accès administration
            </h2>

            <form onSubmit={handleSubmit}>
              <Input
                label='Identifiant'
                type='text'
                name='identifiant'
                value={values.identifiant}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.identifiant}
                required
                className='mb-4'
              />

              <Input
                label='Mot de passe'
                type='password'
                name='motdepasse'
                value={values.motdepasse}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.motdepasse}
                required
                className='mb-8'
              />

              <div className='flex flex-col items-center space-y-4'>
                <Button
                  type='submit'
                  variant='primary'
                  disabled={isSubmitting}
                  className='w-full'
                >
                  {isSubmitting ? 'Connexion...' : 'Se connecter'}
                </Button>

                <Link
                  to='/'
                  className='text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center'
                >
                  <BackIcon className='h-4 w-4 mr-1' />
                  Retour à l'accueil
                </Link>
              </div>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Login;

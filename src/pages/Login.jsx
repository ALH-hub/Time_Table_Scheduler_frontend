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
    }, 1000);
  };

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Header />

      <main className='flex-grow flex items-center justify-center px-4 py-20' style={{ backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 250, 251, 0.95) 100%)' }}>
        <div className='max-w-md w-full bg-white rounded-lg shadow-md p-8 border border-gray-200'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-2'>Admin Portal</h2>
            <p className='text-gray-600 text-sm'>Enter your credentials to access the admin dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-gray-900 mb-1'>Username</label>
              <input
                type='text'
                name='identifiant'
                value={values.identifiant}
                onChange={handleChange}
                onBlur={handleBlur}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600'
                placeholder='admin'
              />
              {errors.identifiant && <p className='text-red-600 text-xs mt-1'>{errors.identifiant}</p>}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-900 mb-1'>Password</label>
              <input
                type='password'
                name='motdepasse'
                value={values.motdepasse}
                onChange={handleChange}
                onBlur={handleBlur}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600'
                placeholder='Enter your password'
              />
              {errors.motdepasse && <p className='text-red-600 text-xs mt-1'>{errors.motdepasse}</p>}
            </div>

            <div className='flex items-center'>
              <input type='checkbox' id='remember' className='h-4 w-4 border-gray-300 rounded' />
              <label htmlFor='remember' className='ml-2 text-sm text-gray-700'>Remember me</label>
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition'
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className='mt-6 text-center'>
            <Link to='/' className='text-sm text-blue-600 hover:text-blue-700'>
              Back to home
            </Link>
          </div>

          <div className='mt-6 p-3 bg-amber-50 border border-amber-200 rounded'>
            <p className='text-xs text-amber-800'>
              <span className='font-semibold'>Demo access:</span> Use any credentials to login
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;

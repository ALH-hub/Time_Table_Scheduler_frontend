import React, { useState } from 'react';

const AddAdminModal = ({
  showModal,
  handleClose,
  handleSave,
  isSubmitting,
}) => {
  const [adminData, setAdminData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    role: 'admin',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!showModal) {
    return null;
  }

  const handleSaveClick = () => {
    if (adminData.password !== adminData.confirm_password) {
      return;
    }
    handleSave({
      username: adminData.username,
      email: adminData.email,
      password: adminData.password,
      role: adminData.role,
    });
  };

  const handleCloseModal = () => {
    setAdminData({
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      role: 'admin',
    });
    handleClose();
  };

  return (
    <div className='fixed inset-0 z-50'>
      <div
        className='fixed inset-0 bg-opacity-50'
        onClick={handleCloseModal}
      />
      <div className='fixed inset-0 flex items-center justify-center p-4 pointer-events-none'>
        <div
          className='bg-white rounded-lg shadow-2xl max-w-md w-full border border-gray-200 transform transition-all max-h-[90vh] overflow-y-auto pointer-events-auto'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='bg-gray-900 text-white px-6 py-4 rounded-t-lg flex items-center justify-between sticky top-0'>
            <h2 className='text-xl font-bold'>Add New Admin</h2>
            <button
              onClick={handleCloseModal}
              className='text-white hover:text-gray-300 text-2xl'
            >
              ×
            </button>
          </div>
          <div className='p-6'>
            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Username <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  placeholder='Username'
                  value={adminData.username}
                  onChange={(e) =>
                    setAdminData({
                      ...adminData,
                      username: e.target.value,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Email <span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  placeholder='email@example.com'
                  value={adminData.email}
                  onChange={(e) =>
                    setAdminData({
                      ...adminData,
                      email: e.target.value,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Role
                </label>
                <select
                  value={adminData.role}
                  onChange={(e) =>
                    setAdminData({
                      ...adminData,
                      role: e.target.value,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                >
                  <option value='admin'>Admin</option>
                  <option value='super_admin'>Super Admin</option>
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Password <span className='text-red-500'>*</span>
                </label>
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter password'
                    value={adminData.password}
                    onChange={(e) =>
                      setAdminData({
                        ...adminData,
                        password: e.target.value,
                      })
                    }
                    className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent pr-10'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-2 top-2 text-gray-500 hover:text-gray-700'
                  >
                    {showPassword ? (
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m13.42 13.42l-3.29-3.29M3 3l13.42 13.42'
                        />
                      </svg>
                    ) : (
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Confirm Password <span className='text-red-500'>*</span>
                </label>
                <div className='relative'>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirm password'
                    value={adminData.confirm_password}
                    onChange={(e) =>
                      setAdminData({
                        ...adminData,
                        confirm_password: e.target.value,
                      })
                    }
                    className={`w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent pr-10 ${
                      adminData.password &&
                      adminData.confirm_password &&
                      adminData.password !== adminData.confirm_password
                        ? 'border-red-300'
                        : 'border-gray-300'
                    }`}
                  />
                  <button
                    type='button'
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className='absolute right-2 top-2 text-gray-500 hover:text-gray-700'
                  >
                    {showConfirmPassword ? (
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m13.42 13.42l-3.29-3.29M3 3l13.42 13.42'
                        />
                      </svg>
                    ) : (
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {adminData.password &&
                  adminData.confirm_password &&
                  adminData.password !== adminData.confirm_password && (
                    <p className='mt-1 text-xs text-red-600'>
                      Passwords do not match
                    </p>
                  )}
              </div>
            </div>
            <div className='flex justify-end gap-3 mt-6'>
              <button
                onClick={handleCloseModal}
                className='px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-all duration-200 ease-in-out text-sm font-medium transform hover:scale-105 active:scale-95'
              >
                Cancel
              </button>
              <button
                onClick={handleSaveClick}
                disabled={
                  isSubmitting ||
                  !adminData.username ||
                  !adminData.email ||
                  !adminData.password ||
                  !adminData.confirm_password ||
                  adminData.password !== adminData.confirm_password
                }
                className='px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-all duration-200 ease-in-out text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100 flex items-center gap-2 transform hover:scale-105 active:scale-95 hover:shadow-lg'
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className='animate-spin h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  'Create Admin'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdminModal;


import React from 'react';

const TeacherModal = ({
  showModal,
  isEditMode,
  handleClose,
  teacherData,
  setTeacherData,
  departments,
  handleSave,
  isSubmitting,
}) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50'>
      <div
        className='fixed inset-0 bg-opacity-50'
        onClick={handleClose}
      />
      <div className='fixed inset-0 flex items-center justify-center p-4 pointer-events-none'>
        <div
          className='bg-white rounded-lg shadow-2xl max-w-2xl w-full border border-gray-200 transform transition-all max-h-[90vh] overflow-y-auto pointer-events-auto'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='bg-gray-900 text-white px-6 py-4 rounded-t-lg flex items-center justify-between sticky top-0'>
            <h2 className='text-xl font-bold'>
              {isEditMode ? 'Edit Teacher' : 'Add New Teacher'}
            </h2>
            <button
              onClick={handleClose}
              className='text-white hover:text-gray-300 text-2xl'
            >
              ×
            </button>
          </div>
          <div className='p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Name <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  placeholder='Teacher Name'
                  value={teacherData.name || ''}
                  onChange={(e) =>
                    setTeacherData({
                      ...teacherData,
                      name: e.target.value,
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
                  placeholder='teacher@example.com'
                  value={teacherData.email || ''}
                  onChange={(e) =>
                    setTeacherData({
                      ...teacherData,
                      email: e.target.value,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Department <span className='text-red-500'>*</span>
                </label>
                <select
                  value={teacherData.department_id || ''}
                  onChange={(e) =>
                    setTeacherData({
                      ...teacherData,
                      department_id: e.target.value,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                >
                  <option value=''>Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Phone
                </label>
                <input
                  type='text'
                  placeholder='Phone Number'
                  value={teacherData.phone || ''}
                  onChange={(e) =>
                    setTeacherData({
                      ...teacherData,
                      phone: e.target.value,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                />
              </div>
              <div className='md:col-span-2'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Specialization
                </label>
                <input
                  type='text'
                  placeholder='Specialization'
                  value={teacherData.specialization || ''}
                  onChange={(e) =>
                    setTeacherData({
                      ...teacherData,
                      specialization: e.target.value,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                />
              </div>
              <div className='md:col-span-2'>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    checked={teacherData.is_active !== false}
                    onChange={(e) =>
                      setTeacherData({
                        ...teacherData,
                        is_active: e.target.checked,
                      })
                    }
                    className='mr-2'
                  />
                  <span className='text-sm font-medium text-gray-700'>
                    Is Active
                  </span>
                </label>
              </div>
            </div>
            <div className='flex justify-end gap-3 mt-6'>
              <button
                onClick={handleClose}
                className='px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition text-sm font-medium'
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSubmitting}
                className='px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
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
                    {isEditMode ? 'Updating...' : 'Creating...'}
                  </>
                ) : isEditMode ? (
                  'Update Teacher'
                ) : (
                  'Create Teacher'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherModal;


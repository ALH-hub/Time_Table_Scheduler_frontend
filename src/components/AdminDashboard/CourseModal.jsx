import React from 'react';

const CourseModal = ({
  showModal,
  isEditMode,
  handleClose,
  courseData,
  setCourseData,
  departments,
  teachers,
  levels,
  handleSave,
  isSubmitting,
}) => {
  if (!showModal) {
    return null;
  }

  // Filter teachers by selected department
  const getFilteredTeachers = (departmentId) => {
    if (!departmentId) return [];
    return teachers.filter(
      (teacher) =>
        teacher.department_id &&
        Number(teacher.department_id) === Number(departmentId) &&
        teacher.is_active !== false,
    );
  };

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
              {isEditMode ? 'Edit Course' : 'Add New Course'}
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
                  placeholder='Course Name'
                  value={courseData.name || ''}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      name: e.target.value,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Code <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  placeholder='Course Code (e.g., CS101)'
                  value={courseData.code || ''}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      code: e.target.value,
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
                  value={courseData.department_id || ''}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      department_id: e.target.value,
                      teacher_id: '', // Reset teacher when department changes
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
                  Teacher
                </label>
                <select
                  value={courseData.teacher_id || ''}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      teacher_id: e.target.value,
                    })
                  }
                  disabled={!courseData.department_id}
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed'
                >
                  <option value=''>Select Teacher (Optional)</option>
                  {getFilteredTeachers(courseData.department_id).map(
                    (teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name}
                      </option>
                    ),
                  )}
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Level
                </label>
                <select
                  value={courseData.level_id || ''}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      level_id: e.target.value || null,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                >
                  <option value=''>Select Level (Optional)</option>
                  {levels
                    .filter((l) => l.is_active !== false)
                    .map((level) => (
                      <option key={level.id} value={level.id}>
                        {level.name || level.code}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Weekly Sessions
                </label>
                <input
                  type='number'
                  min='1'
                  placeholder='1'
                  value={courseData.weekly_sessions || 1}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      weekly_sessions: parseInt(e.target.value) || 1,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Semester
                </label>
                <input
                  type='text'
                  placeholder='e.g., Fall 2024'
                  value={courseData.semester || ''}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      semester: e.target.value,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Year
                </label>
                <input
                  type='number'
                  placeholder='e.g., 2024'
                  value={courseData.year || ''}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      year: e.target.value ? parseInt(e.target.value) : null,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                />
              </div>
              <div className='md:col-span-2'>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    checked={courseData.is_active !== false}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
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
                  'Update Course'
                ) : (
                  'Create Course'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;


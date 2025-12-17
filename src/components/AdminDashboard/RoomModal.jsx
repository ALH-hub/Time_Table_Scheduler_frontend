import React from 'react';

const RoomModal = ({
  showModal,
  isEditMode,
  handleClose,
  roomData,
  setRoomData,
  handleSave,
  isSubmitting,
}) => {
  if (!showModal) {
    return null;
  }

  const roomTypes = [
    { value: 'classroom', label: 'Classroom' },
    { value: 'lab', label: 'Lab' },
    { value: 'lecture_hall', label: 'Lecture Hall' },
  ];

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
              {isEditMode ? 'Edit Room' : 'Add New Room'}
            </h2>
            <button
              onClick={handleClose}
              className='text-white hover:text-gray-300 text-2xl transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-95 rounded-md p-1 hover:bg-gray-800'
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
                  placeholder='Room Name (e.g., A101)'
                  value={roomData.name || ''}
                  onChange={(e) =>
                    setRoomData({
                      ...roomData,
                      name: e.target.value,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Room Type <span className='text-red-500'>*</span>
                </label>
                <select
                  value={roomData.room_type || ''}
                  onChange={(e) =>
                    setRoomData({
                      ...roomData,
                      room_type: e.target.value,
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                >
                  <option value=''>Select Room Type</option>
                  {roomTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Capacity <span className='text-red-500'>*</span>
                </label>
                <input
                  type='number'
                  min='1'
                  placeholder='Capacity'
                  value={roomData.capacity || ''}
                  onChange={(e) =>
                    setRoomData({
                      ...roomData,
                      capacity: parseInt(e.target.value) || '',
                    })
                  }
                  className='w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                />
              </div>
              <div className='md:col-span-2'>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    checked={roomData.is_available !== false}
                    onChange={(e) =>
                      setRoomData({
                        ...roomData,
                        is_available: e.target.checked,
                      })
                    }
                    className='mr-2'
                  />
                  <span className='text-sm font-medium text-gray-700'>
                    Is Available
                  </span>
                </label>
              </div>
            </div>
            <div className='flex justify-end gap-3 mt-6'>
              <button
                onClick={handleClose}
                className='px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-all duration-200 ease-in-out text-sm font-medium transform hover:scale-105 active:scale-95'
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSubmitting}
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
                    {isEditMode ? 'Updating...' : 'Creating...'}
                  </>
                ) : isEditMode ? (
                  'Update Room'
                ) : (
                  'Create Room'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;


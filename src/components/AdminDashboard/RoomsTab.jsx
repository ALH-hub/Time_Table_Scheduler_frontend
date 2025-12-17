import React, { useState, useMemo } from 'react';

const RoomsTab = ({
  rooms,
  handleOpenAddRoomModal,
  handleEditRoom,
  handleDeleteRoom,
}) => {
  const [selectedRoomTypeFilter, setSelectedRoomTypeFilter] = useState('');

  const roomTypes = [
    { value: 'classroom', label: 'Classroom' },
    { value: 'lab', label: 'Lab' },
    { value: 'lecture_hall', label: 'Lecture Hall' },
  ];

  const getRoomTypeLabel = (type) => {
    const roomType = roomTypes.find((rt) => rt.value === type);
    return roomType ? roomType.label : type || 'N/A';
  };

  // Filter rooms by selected type
  const filteredRooms = useMemo(() => {
    if (!selectedRoomTypeFilter) return rooms;
    return rooms.filter(
      (room) => room.room_type === selectedRoomTypeFilter,
    );
  }, [rooms, selectedRoomTypeFilter]);

  // Group rooms by type
  const groupedRooms = useMemo(() => {
    const groups = new Map();
    filteredRooms.forEach((room) => {
      const type = room.room_type || 'unassigned';
      const typeLabel = getRoomTypeLabel(room.room_type);
      if (!groups.has(type)) {
        groups.set(type, {
          roomType: type,
          roomTypeLabel: typeLabel,
          rooms: [],
        });
      }
      groups.get(type).rooms.push(room);
    });
    return Array.from(groups.values()).sort((a, b) =>
      a.roomTypeLabel.localeCompare(b.roomTypeLabel),
    );
  }, [filteredRooms]);

  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6'>
        <h2 className='text-xl font-bold text-gray-900'>Rooms</h2>
        <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
          <select
            value={selectedRoomTypeFilter}
            onChange={(e) => setSelectedRoomTypeFilter(e.target.value)}
            className='px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white'
          >
            <option value=''>All Types</option>
            {roomTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label} ({rooms.filter((r) => r.room_type === type.value).length})
              </option>
            ))}
          </select>
          <button
            onClick={handleOpenAddRoomModal}
            className='bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-200 ease-in-out text-sm font-medium whitespace-nowrap transform hover:scale-105 active:scale-95 hover:shadow-lg'
          >
            Add Room
          </button>
        </div>
      </div>

      {/* Rooms Table - Desktop View */}
      <div className='hidden md:block bg-white/10 backdrop-blur-3xl rounded-md overflow-hidden'>
        {filteredRooms.length === 0 ? (
          <div className='p-8 text-center text-gray-400'>
            {selectedRoomTypeFilter
              ? 'No rooms found for selected type'
              : 'No rooms found'}
          </div>
        ) : (
          <div className='overflow-x-auto'>
            {groupedRooms.map((group) => (
              <div key={group.roomType} className='mb-6'>
                <div className='bg-gray-100 px-6 py-3 border-b border-gray-200'>
                  <h3 className='text-sm font-semibold text-gray-900'>
                    {group.roomTypeLabel} ({group.rooms.length}{' '}
                    {group.rooms.length === 1 ? 'room' : 'rooms'})
                  </h3>
                </div>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b'>
                    <tr>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Name
                      </th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Capacity
                      </th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Availability
                      </th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y'>
                    {group.rooms.map((item) => (
                      <tr key={item.id} className='hover:bg-gray-50'>
                        <td className='px-6 py-4 text-sm text-gray-900 font-medium'>
                          {item.name}
                        </td>
                        <td className='px-6 py-4 text-sm text-gray-400'>
                          {item.capacity}
                        </td>
                        <td className='px-6 py-4 text-sm'>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              item.is_available !== false
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {item.is_available !== false
                              ? 'Available'
                              : 'Unavailable'}
                          </span>
                        </td>
                        <td className='px-6 py-4 text-sm'>
                          <div className='flex space-x-4 whitespace-nowrap'>
                            <button
                              onClick={() => handleEditRoom(item.id)}
                              className='text-gray-900 hover:text-gray-700 text-sm font-medium transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-md px-2 py-1 hover:bg-gray-100'
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteRoom(item.id)}
                              className='text-gray-400 hover:text-gray-700 text-sm font-medium transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-md px-2 py-1 hover:bg-gray-100'
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Rooms Cards - Mobile View */}
      <div className='md:hidden space-y-6'>
        {filteredRooms.length === 0 ? (
          <div className='bg-white/10 backdrop-blur-3xl rounded-md p-8 text-center text-gray-400'>
            {selectedRoomTypeFilter
              ? 'No rooms found for selected type'
              : 'No rooms found'}
          </div>
        ) : (
          groupedRooms.map((group) => (
            <div key={group.roomType}>
              <div className='bg-gray-100 px-4 py-2 rounded-t-md border-b border-gray-200 mb-2'>
                <h3 className='text-sm font-semibold text-gray-900'>
                  {group.roomTypeLabel} ({group.rooms.length}{' '}
                  {group.rooms.length === 1 ? 'room' : 'rooms'})
                </h3>
              </div>
              <div className='space-y-4'>
                {group.rooms.map((item) => (
                  <div
                    key={item.id}
                    className='bg-white/10 backdrop-blur-3xl rounded-md p-4 border border-gray-200'
                  >
                    <div className='space-y-3'>
                      <div className='space-y-2'>
                        <div>
                          <span className='text-sm font-medium text-gray-700'>
                            Name:
                          </span>
                          <span className='ml-2 text-sm text-gray-900 font-semibold'>
                            {item.name}
                          </span>
                        </div>
                        <div>
                          <span className='text-sm font-medium text-gray-700'>
                            Capacity:
                          </span>
                          <span className='ml-2 text-sm text-gray-600'>
                            {item.capacity}
                          </span>
                        </div>
                        <div>
                          <span className='text-sm font-medium text-gray-700'>
                            Availability:
                          </span>
                          <span
                            className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                              item.is_available !== false
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {item.is_available !== false
                              ? 'Available'
                              : 'Unavailable'}
                          </span>
                        </div>
                      </div>
                      <div className='flex space-x-3 pt-3 border-t border-gray-200'>
                        <button
                          onClick={() => handleEditRoom(item.id)}
                          className='flex-1 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-200 ease-in-out text-sm font-medium transform hover:scale-105 active:scale-95 hover:shadow-lg'
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteRoom(item.id)}
                          className='flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-all duration-200 ease-in-out text-sm font-medium transform hover:scale-105 active:scale-95'
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RoomsTab;

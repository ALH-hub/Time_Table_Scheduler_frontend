import React, { useState } from 'react';
import { Select } from '../common';
import { DAYS_OF_WEEK, TIME_SLOTS } from '../../constants';
import { timetableData } from '../../data/timetableData';

const TimetableView = ({ selectedProgram, departments, weeks }) => {
  const [selectedWeek, setSelectedWeek] = useState('week1');

  const getCourseForSlot = (day, timeSlot) => {
    if (!selectedProgram || !timetableData[selectedProgram]) return null;

    const weekData = timetableData[selectedProgram][selectedWeek];
    return weekData?.find(
      (course) => course.day === day && course.time === timeSlot,
    );
  };

  const getCourseStyle = (type) => {
    switch (type) {
      case 'Cours Magistral':
        return 'bg-gradient-to-br from-blue-100 to-blue-200 border-l-4 border-blue-600';
      case 'Travaux Pratiques':
        return 'bg-gradient-to-br from-green-100 to-green-200 border-l-4 border-green-600';
      case 'Travaux Dirigés':
        return 'bg-gradient-to-br from-purple-100 to-purple-200 border-l-4 border-purple-600';
      default:
        return 'bg-gradient-to-br from-gray-100 to-gray-200 border-l-4 border-gray-600';
    }
  };

  return (
    <div>
      {/* Filters */}
      <div className='flex flex-wrap gap-4 mb-8 justify-start bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg'>
        <div className='flex-1 min-w-[200px]'>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>Semaine</label>
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            className='w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors'
          >
            <option value='week1'>Semaine 1</option>
            <option value='week2'>Semaine 2</option>
            <option value='week3'>Semaine 3</option>
            <option value='week4'>Semaine 4</option>
          </select>
        </div>
        <div className='flex items-end'>
          <div className='text-sm text-gray-600 font-semibold bg-white px-4 py-2 rounded-lg border border-gray-200'>
            Programme: <span className='text-blue-600'>{selectedProgram}</span>
          </div>
        </div>
      </div>

      {/* Timetable Grid */}
      <div className='overflow-x-auto rounded-lg shadow-lg'>
        <table className='w-full border-collapse'>
          {/* Header */}
          <thead>
            <tr>
              <th className='gradient-primary text-white p-4 text-center font-bold border-2 border-gray-300 w-24'>
                Heure
              </th>
              {DAYS_OF_WEEK.map((day) => (
                <th
                  key={day}
                  className='bg-gradient-to-br from-blue-600 to-purple-600 text-white p-4 text-center font-bold border-2 border-gray-300 flex-1 min-w-32'
                >
                  <div className='font-extrabold text-sm'>{day}</div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {TIME_SLOTS.map((timeSlot) => (
              <tr key={timeSlot} className='hover:bg-blue-50 transition-colors'>
                <td className='bg-gradient-to-r from-gray-200 to-gray-100 p-4 text-center font-bold border-2 border-gray-300 text-gray-800 whitespace-nowrap'>
                  {timeSlot}
                </td>
                {DAYS_OF_WEEK.map((day) => {
                  const course = getCourseForSlot(day, timeSlot);
                  return (
                    <td
                      key={`${day}-${timeSlot}`}
                      className='border-2 border-gray-300 p-2 min-h-[120px] align-top bg-gray-50 hover:bg-gray-100 transition-colors'
                    >
                      {course ? (
                        <div className={`p-3 rounded-lg h-full ${getCourseStyle(course.type)}`}>
                          <div className='font-bold text-sm text-gray-900 mb-1'>
                            {course.course}
                          </div>
                          <div className='text-xs text-gray-700 mb-1'>
                            <span className='font-semibold'>Enseignant:</span> {course.teacher}
                          </div>
                          <div className='text-xs text-gray-700 mb-1'>
                            <span className='font-semibold'>Salle:</span> {course.room}
                          </div>
                          <div className='text-xs font-semibold text-gray-600 border-t pt-1 mt-1'>
                            {course.type}
                          </div>
                        </div>
                      ) : (
                        <div className='text-gray-400 italic text-center text-sm h-full flex items-center justify-center'>
                          -
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='flex items-center gap-2 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600'>
          <div className='w-4 h-4 bg-blue-300 rounded'></div>
          <span className='text-sm text-gray-700'>Cours Magistral</span>
        </div>
        <div className='flex items-center gap-2 p-3 bg-green-50 rounded-lg border-l-4 border-green-600'>
          <div className='w-4 h-4 bg-green-300 rounded'></div>
          <span className='text-sm text-gray-700'>Travaux Pratiques</span>
        </div>
        <div className='flex items-center gap-2 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-600'>
          <div className='w-4 h-4 bg-purple-300 rounded'></div>
          <span className='text-sm text-gray-700'>Travaux Dirigés</span>
        </div>
      </div>
    </div>
  );
};

export default TimetableView;

import React from 'react';
import { Select } from '../common';
import { DAYS_OF_WEEK, TIME_SLOTS } from '../../constants';

const TimetableView = ({ selectedProgram, departments, weeks }) => {
  return (
    <div>
      {/* Filters */}
      <div className='flex flex-wrap gap-4 mb-8 justify-start'>
        <Select
          placeholder='Départements'
          options={departments}
          className='min-w-[200px]'
        />
        <Select
          placeholder='Niveau'
          options={[
            { id: '1', name: 'Licence 1' },
            { id: '2', name: 'Licence 2' },
            { id: '3', name: 'Licence 3' },
            { id: '4', name: 'Master 1' },
            { id: '5', name: 'Master 2' },
          ]}
          className='min-w-[200px]'
        />
        <Select
          placeholder='Semaine'
          options={weeks}
          className='min-w-[200px]'
        />
      </div>

      {/* Timetable Grid */}
      <div className='overflow-x-auto bg-white'>
        <table className='min-w-full divide-y divide-gray-200 border border-gray-300'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-3 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-r border-gray-300 w-1/12'>
                Heure
              </th>
              {DAYS_OF_WEEK.map((day) => (
                <th
                  key={day}
                  className='px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider border-r border-gray-300 w-1/5'
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {TIME_SLOTS.map((time, timeIdx) => (
              <tr key={timeIdx} className='hover:bg-blue-50 transition-colors'>
                <td className='px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50 border-r border-gray-300'>
                  {time}
                </td>
                {DAYS_OF_WEEK.map((_, dayIdx) => (
                  <td
                    key={dayIdx}
                    className='px-4 py-8 whitespace-nowrap border-r border-gray-300'
                  >
                    {/* Course content will be populated dynamically */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimetableView;

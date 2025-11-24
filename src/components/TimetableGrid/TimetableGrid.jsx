import React from 'react';
import { DAYS_OF_WEEK, TIME_SLOTS, COURSE_TYPES } from '../../constants';

const TimetableGrid = ({ schedule = [] }) => {
  const getCourseForSlot = (day, timeSlot) => {
    return schedule.find(
      (course) => course.day === day && course.time === timeSlot,
    );
  };

  const getCourseStyle = (type) => {
    switch (type) {
      case COURSE_TYPES.LECTURE:
        return 'bg-blue-100 border-blue-300';
      case COURSE_TYPES.LAB:
        return 'bg-green-100 border-green-300';
      case COURSE_TYPES.TUTORIAL:
        return 'bg-purple-100 border-purple-300';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className='overflow-x-auto'>
      <div className='min-w-[800px]'>
        <table className='w-full border-collapse'>
          {/* Header */}
          <thead>
            <tr>
              <th className='bg-blue-800 text-white p-3 text-center font-bold border border-gray-300'></th>
              {DAYS_OF_WEEK.map((day) => (
                <th
                  key={day}
                  className='bg-blue-600 text-white p-3 text-center font-bold border border-gray-300'
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {TIME_SLOTS.map((timeSlot) => (
              <tr key={timeSlot}>
                <td className='bg-gray-100 p-3 text-center font-medium border border-gray-300 whitespace-nowrap'>
                  {timeSlot}
                </td>
                {DAYS_OF_WEEK.map((day) => {
                  const course = getCourseForSlot(day, timeSlot);
                  return (
                    <td
                      key={`${day}-${timeSlot}`}
                      className='border border-gray-300 p-2 min-h-[100px] align-top'
                    >
                      {course ? (
                        <div
                          className={`p-2 rounded border ${getCourseStyle(
                            course.type,
                          )}`}
                        >
                          <div className='font-semibold text-sm'>
                            {course.course}
                          </div>
                          <div className='text-xs text-gray-600'>
                            {course.teacher}
                          </div>
                          <div className='text-xs text-green-600'>
                            {course.room}
                          </div>
                          <div className='text-xs text-gray-500 italic'>
                            {course.type}
                          </div>
                        </div>
                      ) : (
                        <div className='text-gray-400 italic text-center text-sm'>
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
    </div>
  );
};

export default TimetableGrid;

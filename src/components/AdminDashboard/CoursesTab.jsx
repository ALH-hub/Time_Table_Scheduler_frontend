import React, { useState, useMemo } from 'react';

const CoursesTab = ({
  courses,
  departments,
  teachers,
  levels,
  handleOpenAddCourseModal,
  handleEditCourse,
  handleDeleteCourse,
}) => {
  const [selectedDepartmentFilter, setSelectedDepartmentFilter] = useState('');

  // Get department name by ID
  const getDepartmentName = (departmentId) => {
    const dept = departments.find((d) => d.id === departmentId);
    return dept ? dept.name : 'N/A';
  };

  // Get teacher name by ID
  const getTeacherName = (teacherId) => {
    if (!teacherId) return 'N/A';
    const teacher = teachers.find((t) => t.id === teacherId);
    return teacher ? teacher.name : 'N/A';
  };

  // Get level name by ID
  const getLevelName = (levelId) => {
    if (!levelId) return 'N/A';
    const level = levels.find((l) => l.id === levelId);
    return level ? level.name || level.code : 'N/A';
  };

  // Filter courses by selected department
  const filteredCourses = useMemo(() => {
    if (!selectedDepartmentFilter) return courses;
    return courses.filter(
      (course) =>
        course.department_id &&
        Number(course.department_id) === Number(selectedDepartmentFilter),
    );
  }, [courses, selectedDepartmentFilter]);

  // Group courses by department
  const groupedCourses = useMemo(() => {
    const groups = new Map();
    filteredCourses.forEach((course) => {
      const deptId = course.department_id || 'unassigned';
      const deptName = getDepartmentName(course.department_id);
      if (!groups.has(deptId)) {
        groups.set(deptId, {
          departmentId: deptId,
          departmentName: deptName,
          courses: [],
        });
      }
      groups.get(deptId).courses.push(course);
    });
    return Array.from(groups.values()).sort((a, b) =>
      a.departmentName.localeCompare(b.departmentName),
    );
  }, [filteredCourses, departments]);

  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6'>
        <h2 className='text-xl font-bold text-gray-900'>Courses</h2>
        <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
          <select
            value={selectedDepartmentFilter}
            onChange={(e) => setSelectedDepartmentFilter(e.target.value)}
            className='px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white'
          >
            <option value=''>All Departments</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name} (
                {courses.filter((c) => c.department_id === dept.id).length})
              </option>
            ))}
          </select>
          <button
            onClick={handleOpenAddCourseModal}
            className='bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition text-sm font-medium whitespace-nowrap'
          >
            Add Course
          </button>
        </div>
      </div>

      {/* Courses Table - Desktop View */}
      <div className='hidden md:block bg-white/10 backdrop-blur-3xl rounded-md overflow-hidden'>
        {filteredCourses.length === 0 ? (
          <div className='p-8 text-center text-gray-400'>
            {selectedDepartmentFilter
              ? 'No courses found for selected department'
              : 'No courses found'}
          </div>
        ) : (
          <div className='overflow-x-auto'>
            {groupedCourses.map((group) => (
              <div key={group.departmentId} className='mb-6'>
                <div className='bg-gray-100 px-6 py-3 border-b border-gray-200'>
                  <h3 className='text-sm font-semibold text-gray-900'>
                    {group.departmentName} ({group.courses.length}{' '}
                    {group.courses.length === 1 ? 'course' : 'courses'})
                  </h3>
                </div>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b'>
                    <tr>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Code
                      </th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Name
                      </th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Teacher
                      </th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Level
                      </th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Status
                      </th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y'>
                    {group.courses.map((item) => (
                      <tr key={item.id} className='hover:bg-gray-50'>
                        <td className='px-6 py-4 text-sm text-gray-900 font-medium'>
                          {item.code}
                        </td>
                        <td className='px-6 py-4 text-sm text-gray-900'>
                          {item.name}
                        </td>
                        <td className='px-6 py-4 text-sm text-gray-400'>
                          {getTeacherName(item.teacher_id)}
                        </td>
                        <td className='px-6 py-4 text-sm text-gray-400'>
                          {getLevelName(item.level_id)}
                        </td>
                        <td className='px-6 py-4 text-sm'>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              item.is_active !== false
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {item.is_active !== false ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className='px-6 py-4 text-sm'>
                          <div className='flex space-x-4 whitespace-nowrap'>
                            <button
                              onClick={() => handleEditCourse(item.id)}
                              className='text-gray-900 hover:text-gray-700 text-sm font-medium'
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteCourse(item.id)}
                              className='text-gray-400 hover:text-gray-700 text-sm font-medium'
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

      {/* Courses Cards - Mobile View */}
      <div className='md:hidden space-y-6'>
        {filteredCourses.length === 0 ? (
          <div className='bg-white/10 backdrop-blur-3xl rounded-md p-8 text-center text-gray-400'>
            {selectedDepartmentFilter
              ? 'No courses found for selected department'
              : 'No courses found'}
          </div>
        ) : (
          groupedCourses.map((group) => (
            <div key={group.departmentId}>
              <div className='bg-gray-100 px-4 py-2 rounded-t-md border-b border-gray-200 mb-2'>
                <h3 className='text-sm font-semibold text-gray-900'>
                  {group.departmentName} ({group.courses.length}{' '}
                  {group.courses.length === 1 ? 'course' : 'courses'})
                </h3>
              </div>
              <div className='space-y-4'>
                {group.courses.map((item) => (
                  <div
                    key={item.id}
                    className='bg-white/10 backdrop-blur-3xl rounded-md p-4 border border-gray-200'
                  >
                    <div className='space-y-3'>
                      <div className='space-y-2'>
                        <div>
                          <span className='text-sm font-medium text-gray-700'>
                            Code:
                          </span>
                          <span className='ml-2 text-sm text-gray-900 font-semibold'>
                            {item.code}
                          </span>
                        </div>
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
                            Teacher:
                          </span>
                          <span className='ml-2 text-sm text-gray-600'>
                            {getTeacherName(item.teacher_id)}
                          </span>
                        </div>
                        <div>
                          <span className='text-sm font-medium text-gray-700'>
                            Level:
                          </span>
                          <span className='ml-2 text-sm text-gray-600'>
                            {getLevelName(item.level_id)}
                          </span>
                        </div>
                        <div>
                          <span className='text-sm font-medium text-gray-700'>
                            Status:
                          </span>
                          <span
                            className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                              item.is_active !== false
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {item.is_active !== false ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </div>
                      <div className='flex space-x-3 pt-3 border-t border-gray-200'>
                        <button
                          onClick={() => handleEditCourse(item.id)}
                          className='flex-1 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition text-sm font-medium'
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteCourse(item.id)}
                          className='flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition text-sm font-medium'
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

export default CoursesTab;

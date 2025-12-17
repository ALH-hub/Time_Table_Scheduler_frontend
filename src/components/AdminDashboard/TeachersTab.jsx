import React, { useState, useMemo } from 'react';

const TeachersTab = ({
  teachers,
  departments,
  handleOpenAddTeacherModal,
  handleEditTeacher,
  handleDeleteTeacher,
}) => {
  const [selectedDepartmentFilter, setSelectedDepartmentFilter] = useState('');

  // Get department name by ID
  const getDepartmentName = (departmentId) => {
    const dept = departments.find((d) => d.id === departmentId);
    return dept ? dept.name : 'N/A';
  };

  // Filter teachers by selected department
  const filteredTeachers = useMemo(() => {
    if (!selectedDepartmentFilter) return teachers;
    return teachers.filter(
      (teacher) =>
        teacher.department_id &&
        Number(teacher.department_id) === Number(selectedDepartmentFilter),
    );
  }, [teachers, selectedDepartmentFilter]);

  // Group teachers by department
  const groupedTeachers = useMemo(() => {
    const groups = new Map();
    filteredTeachers.forEach((teacher) => {
      const deptId = teacher.department_id || 'unassigned';
      const deptName = getDepartmentName(teacher.department_id);
      if (!groups.has(deptId)) {
        groups.set(deptId, {
          departmentId: deptId,
          departmentName: deptName,
          teachers: [],
        });
      }
      groups.get(deptId).teachers.push(teacher);
    });
    return Array.from(groups.values()).sort((a, b) =>
      a.departmentName.localeCompare(b.departmentName),
    );
  }, [filteredTeachers, departments]);

  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6'>
        <h2 className='text-xl font-bold text-gray-900'>Teachers</h2>
        <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
          <select
            value={selectedDepartmentFilter}
            onChange={(e) => setSelectedDepartmentFilter(e.target.value)}
            className='px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white'
          >
            <option value=''>All Departments</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name} ({teachers.filter((t) => t.department_id === dept.id).length})
              </option>
            ))}
          </select>
          <button
            onClick={handleOpenAddTeacherModal}
            className='bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-200 ease-in-out text-sm font-medium whitespace-nowrap transform hover:scale-105 active:scale-95 hover:shadow-lg'
          >
            Add Teacher
          </button>
        </div>
      </div>

      {/* Teachers Table - Desktop View */}
      <div className='hidden md:block bg-white/10 backdrop-blur-3xl rounded-md overflow-hidden'>
        {filteredTeachers.length === 0 ? (
          <div className='p-8 text-center text-gray-400'>
            {selectedDepartmentFilter
              ? 'No teachers found for selected department'
              : 'No teachers found'}
          </div>
        ) : (
          <div className='overflow-x-auto'>
            {groupedTeachers.map((group) => (
              <div key={group.departmentId} className='mb-6'>
                <div className='bg-gray-100 px-6 py-3 border-b border-gray-200'>
                  <h3 className='text-sm font-semibold text-gray-900'>
                    {group.departmentName} ({group.teachers.length}{' '}
                    {group.teachers.length === 1 ? 'teacher' : 'teachers'})
                  </h3>
                </div>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b'>
                    <tr>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Name
                      </th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Email
                      </th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Phone
                      </th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap'>
                        Specialization
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
                    {group.teachers.map((item) => (
                      <tr key={item.id} className='hover:bg-gray-50'>
                        <td className='px-6 py-4 text-sm text-gray-900 font-medium'>
                          {item.name}
                        </td>
                        <td className='px-6 py-4 text-sm text-gray-400'>
                          {item.email}
                        </td>
                        <td className='px-6 py-4 text-sm text-gray-400'>
                          {item.phone || 'N/A'}
                        </td>
                        <td className='px-6 py-4 text-sm text-gray-400'>
                          {item.specialization || 'N/A'}
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
                              onClick={() => handleEditTeacher(item.id)}
                              className='text-gray-900 hover:text-gray-700 text-sm font-medium transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-md px-2 py-1 hover:bg-gray-100'
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteTeacher(item.id)}
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

      {/* Teachers Cards - Mobile View */}
      <div className='md:hidden space-y-6'>
        {filteredTeachers.length === 0 ? (
          <div className='bg-white/10 backdrop-blur-3xl rounded-md p-8 text-center text-gray-400'>
            {selectedDepartmentFilter
              ? 'No teachers found for selected department'
              : 'No teachers found'}
          </div>
        ) : (
          groupedTeachers.map((group) => (
            <div key={group.departmentId}>
              <div className='bg-gray-100 px-4 py-2 rounded-t-md border-b border-gray-200 mb-2'>
                <h3 className='text-sm font-semibold text-gray-900'>
                  {group.departmentName} ({group.teachers.length}{' '}
                  {group.teachers.length === 1 ? 'teacher' : 'teachers'})
                </h3>
              </div>
              <div className='space-y-4'>
                {group.teachers.map((item) => (
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
                            Email:
                          </span>
                          <span className='ml-2 text-sm text-gray-600'>
                            {item.email}
                          </span>
                        </div>
                        <div>
                          <span className='text-sm font-medium text-gray-700'>
                            Phone:
                          </span>
                          <span className='ml-2 text-sm text-gray-600'>
                            {item.phone || 'N/A'}
                          </span>
                        </div>
                        <div>
                          <span className='text-sm font-medium text-gray-700'>
                            Specialization:
                          </span>
                          <span className='ml-2 text-sm text-gray-600'>
                            {item.specialization || 'N/A'}
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
                          onClick={() => handleEditTeacher(item.id)}
                          className='flex-1 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-200 ease-in-out text-sm font-medium transform hover:scale-105 active:scale-95 hover:shadow-lg'
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteTeacher(item.id)}
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

export default TeachersTab;

import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { authAPI } from '../../utils/api';

const SettingsTab = forwardRef(({
  currentAdmin,
  handleOpenEditProfileModal,
  handleOpenChangePasswordModal,
  handleOpenAddAdminModal,
  refreshTrigger,
}, ref) => {
  const [allAdmins, setAllAdmins] = useState([]);
  const [loadingAdmins, setLoadingAdmins] = useState(true);

  const fetchAllAdmins = async () => {
    try {
      setLoadingAdmins(true);
      const data = await authAPI.getAllAdmins();
      setAllAdmins(data.admins || []);
    } catch (err) {
      console.error('Error fetching admins:', err);
    } finally {
      setLoadingAdmins(false);
    }
  };

  useEffect(() => {
    fetchAllAdmins();
  }, []);

  // Refresh when refreshTrigger changes
  useEffect(() => {
    if (refreshTrigger) {
      fetchAllAdmins();
    }
  }, [refreshTrigger]);

  // Expose refresh function to parent
  useImperativeHandle(ref, () => ({
    refreshAdmins: fetchAllAdmins,
  }));
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div>
      <h2 className='text-xl font-bold text-gray-900 mb-6'>Settings</h2>

      <div className='space-y-6'>
        {/* Current Admin Profile Section */}
        <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden'>
          <div className='bg-gray-50 px-6 py-4 border-b border-gray-200'>
            <h3 className='text-lg font-semibold text-gray-900'>
              My Profile
            </h3>
            <p className='text-sm text-gray-600 mt-1'>
              Manage your account information and security settings
            </p>
          </div>
          <div className='p-6'>
            {currentAdmin ? (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                  <div>
                    <label className='block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1'>
                      Username
                    </label>
                    <p className='text-sm text-gray-900 font-medium'>
                      {currentAdmin.username || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <label className='block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1'>
                      Email
                    </label>
                    <p className='text-sm text-gray-900 font-medium'>
                      {currentAdmin.email || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <label className='block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1'>
                      Role
                    </label>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800'>
                      {currentAdmin.role || 'admin'}
                    </span>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div>
                    <label className='block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1'>
                      Account Created
                    </label>
                    <p className='text-sm text-gray-900'>
                      {formatDate(currentAdmin.created_at)}
                    </p>
                  </div>
                  <div>
                    <label className='block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1'>
                      Last Updated
                    </label>
                    <p className='text-sm text-gray-900'>
                      {formatDate(currentAdmin.updated_at)}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className='text-center py-8'>
                <p className='text-gray-500 text-sm'>
                  Loading profile information...
                </p>
              </div>
            )}
            <div className='flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200'>
              <button
                onClick={handleOpenEditProfileModal}
                className='px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition text-sm font-medium flex items-center gap-2'
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                  />
                </svg>
                Edit Profile
              </button>
              <button
                onClick={handleOpenChangePasswordModal}
                className='px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition text-sm font-medium flex items-center gap-2'
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
                  />
                </svg>
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Admin Management Section */}
        <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden'>
          <div className='bg-gray-50 px-6 py-4 border-b border-gray-200'>
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>
                  Admin Management
                </h3>
                <p className='text-sm text-gray-600 mt-1'>
                  Create and manage administrator accounts
                </p>
              </div>
              <button
                onClick={handleOpenAddAdminModal}
                className='px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition text-sm font-medium flex items-center gap-2 whitespace-nowrap'
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 4v16m8-8H4'
                  />
                </svg>
                Add New Admin
              </button>
            </div>
          </div>
          <div className='p-6'>
            {loadingAdmins ? (
              <div className='text-center py-8'>
                <p className='text-gray-500 text-sm'>Loading admins...</p>
              </div>
            ) : allAdmins.length === 0 ? (
              <div className='text-center py-8'>
                <p className='text-gray-500 text-sm mb-4'>
                  No admins found in the system.
                </p>
              </div>
            ) : (
              <>
                {/* Desktop Table View */}
                <div className='hidden md:block overflow-x-auto'>
                  <table className='w-full'>
                    <thead className='bg-gray-50 border-b'>
                      <tr>
                        <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>
                          Username
                        </th>
                        <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>
                          Email
                        </th>
                        <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>
                          Role
                        </th>
                        <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>
                          Created
                        </th>
                        <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y'>
                      {allAdmins.map((admin) => (
                        <tr
                          key={admin.id}
                          className={`hover:bg-gray-50 ${
                            currentAdmin?.id === admin.id
                              ? 'bg-blue-50'
                              : ''
                          }`}
                        >
                          <td className='px-6 py-4 text-sm text-gray-900 font-medium'>
                            <div className='flex items-center gap-2'>
                              {admin.username}
                              {currentAdmin?.id === admin.id && (
                                <span className='px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800'>
                                  You
                                </span>
                              )}
                            </div>
                          </td>
                          <td className='px-6 py-4 text-sm text-gray-600'>
                            {admin.email}
                          </td>
                          <td className='px-6 py-4 text-sm'>
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                admin.role === 'super_admin'
                                  ? 'bg-purple-100 text-purple-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {admin.role === 'super_admin'
                                ? 'Super Admin'
                                : 'Admin'}
                            </span>
                          </td>
                          <td className='px-6 py-4 text-sm text-gray-600'>
                            {formatDate(admin.created_at)}
                          </td>
                          <td className='px-6 py-4 text-sm'>
                            <span className='px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800'>
                              Active
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className='md:hidden space-y-4'>
                  {allAdmins.map((admin) => (
                    <div
                      key={admin.id}
                      className={`bg-gray-50 border rounded-lg p-4 ${
                        currentAdmin?.id === admin.id
                          ? 'border-blue-300 bg-blue-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className='flex items-start justify-between mb-3'>
                        <div className='flex-1'>
                          <div className='flex items-center gap-2 mb-1'>
                            <h4 className='text-sm font-semibold text-gray-900'>
                              {admin.username}
                            </h4>
                            {currentAdmin?.id === admin.id && (
                              <span className='px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800'>
                                You
                              </span>
                            )}
                            <span
                              className={`px-2 py-0.5 rounded text-xs font-medium ${
                                admin.role === 'super_admin'
                                  ? 'bg-purple-100 text-purple-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {admin.role === 'super_admin'
                                ? 'Super Admin'
                                : 'Admin'}
                            </span>
                          </div>
                          <p className='text-sm text-gray-600'>{admin.email}</p>
                        </div>
                      </div>
                      <div className='grid grid-cols-2 gap-3 pt-3 border-t border-gray-200'>
                        <div>
                          <label className='block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1'>
                            Created
                          </label>
                          <p className='text-sm text-gray-900'>
                            {formatDate(admin.created_at)}
                          </p>
                        </div>
                        <div>
                          <label className='block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1'>
                            Status
                          </label>
                          <span className='inline-flex px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800'>
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* System Information Section */}
        <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden'>
          <div className='bg-gray-50 px-6 py-4 border-b border-gray-200'>
            <h3 className='text-lg font-semibold text-gray-900'>
              System Information
            </h3>
            <p className='text-sm text-gray-600 mt-1'>
              Application details and version information
            </p>
          </div>
          <div className='p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1'>
                  Application Name
                </label>
                <p className='text-sm text-gray-900 font-medium'>
                  Timetable Scheduler
                </p>
              </div>
              <div>
                <label className='block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1'>
                  Version
                </label>
                <p className='text-sm text-gray-900 font-medium'>1.0.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

SettingsTab.displayName = 'SettingsTab';

export default SettingsTab;

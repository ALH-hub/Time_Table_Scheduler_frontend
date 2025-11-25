import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <Header />

      <main className='flex-grow'>
        {/* Dashboard Header */}
        <div className='bg-white border-b border-gray-200'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            <div>
              <h1 className='text-3xl font-bold text-gray-900 mb-1'>Tableau de bord Administration</h1>
              <p className='text-gray-600 text-sm'>Gérez les emplois du temps et les horaires de l'université</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className='bg-white border-b border-gray-200'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <nav className='flex gap-12 text-sm font-medium'>
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 border-b-2 transition ${
                  activeTab === 'overview'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-700'
                }`}
              >
                Aperçu
              </button>
              <button
                onClick={() => setActiveTab('timetables')}
                className={`py-4 border-b-2 transition ${
                  activeTab === 'timetables'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-700'
                }`}
              >
                Emplois du temps
              </button>
              <button
                onClick={() => setActiveTab('faculty')}
                className={`py-4 border-b-2 transition ${
                  activeTab === 'faculty'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-700'
                }`}
              >
                Facultés & Départements
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 border-b-2 transition ${
                  activeTab === 'settings'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-700'
                }`}
              >
                Paramètres
              </button>
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h2 className='text-xl font-bold text-gray-900 mb-6'>Dashboard Overview</h2>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
                {/* Stats Cards */}
                <div className='bg-white rounded-lg shadow p-6 border-t-4 border-blue-600'>
                  <div className='text-gray-600 text-sm font-medium'>Total Faculties</div>
                  <div className='text-3xl font-bold text-gray-900 mt-2'>5</div>
                  <div className='text-xs text-gray-500 mt-2'>Active</div>
                </div>
                <div className='bg-white rounded-lg shadow p-6 border-t-4 border-green-600'>
                  <div className='text-gray-600 text-sm font-medium'>Total Departments</div>
                  <div className='text-3xl font-bold text-gray-900 mt-2'>18</div>
                  <div className='text-xs text-gray-500 mt-2'>Across all faculties</div>
                </div>
                <div className='bg-white rounded-lg shadow p-6 border-t-4 border-purple-600'>
                  <div className='text-gray-600 text-sm font-medium'>Programs</div>
                  <div className='text-3xl font-bold text-gray-900 mt-2'>42</div>
                  <div className='text-xs text-gray-500 mt-2'>Active programs</div>
                </div>
                <div className='bg-white rounded-lg shadow p-6 border-t-4 border-orange-600'>
                  <div className='text-gray-600 text-sm font-medium'>Last Updated</div>
                  <div className='text-sm font-bold text-gray-900 mt-2'>Today</div>
                  <div className='text-xs text-gray-500 mt-2'>2:30 PM</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='bg-white rounded-lg shadow p-6'>
                  <h3 className='text-lg font-bold text-gray-900 mb-4'>Recent Timetables</h3>
                  <div className='space-y-3'>
                    <div className='flex items-center justify-between py-3 border-b'>
                      <div>
                        <div className='font-medium text-gray-900'>Computer Science L1</div>
                        <div className='text-xs text-gray-500'>Faculty of Sciences</div>
                      </div>
                      <span className='text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded'>Updated</span>
                    </div>
                    <div className='flex items-center justify-between py-3 border-b'>
                      <div>
                        <div className='font-medium text-gray-900'>Engineering L2</div>
                        <div className='text-xs text-gray-500'>Faculty of Engineering</div>
                      </div>
                      <span className='text-xs bg-green-100 text-green-700 px-2 py-1 rounded'>New</span>
                    </div>
                    <div className='flex items-center justify-between py-3'>
                      <div>
                        <div className='font-medium text-gray-900'>Business Administration</div>
                        <div className='text-xs text-gray-500'>Faculty of Business</div>
                      </div>
                      <span className='text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded'>Pending</span>
                    </div>
                  </div>
                </div>

                <div className='bg-white rounded-lg shadow p-6'>
                  <h3 className='text-lg font-bold text-gray-900 mb-4'>Quick Actions</h3>
                  <div className='space-y-2'>
                    <button className='w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 text-blue-600 font-medium transition'>
                      + Add New Timetable
                    </button>
                    <button className='w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition'>
                      📋 View All Schedules
                    </button>
                    <button className='w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition'>
                      ⚙️ System Settings
                    </button>
                    <button className='w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 font-medium transition'>
                      📊 Generate Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Timetables Tab */}
          {activeTab === 'timetables' && (
            <div>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-bold text-gray-900'>Manage Timetables</h2>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'>
                  + Add Timetable
                </button>
              </div>
              <div className='bg-white rounded-lg shadow overflow-hidden'>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b'>
                    <tr>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>Name</th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>Faculty</th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>Courses</th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>Status</th>
                      <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>Actions</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y'>
                    <tr className='hover:bg-gray-50'>
                      <td className='px-6 py-4 text-sm text-gray-900 font-medium'>CS L1 - 2024/2025</td>
                      <td className='px-6 py-4 text-sm text-gray-600'>Sciences</td>
                      <td className='px-6 py-4 text-sm text-gray-600'>24</td>
                      <td className='px-6 py-4 text-sm'>
                        <span className='bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-medium'>Active</span>
                      </td>
                      <td className='px-6 py-4 text-sm space-x-2'>
                        <button className='text-blue-600 hover:text-blue-700 font-medium'>Edit</button>
                        <button className='text-red-600 hover:text-red-700 font-medium'>Delete</button>
                      </td>
                    </tr>
                    <tr className='hover:bg-gray-50'>
                      <td className='px-6 py-4 text-sm text-gray-900 font-medium'>Eng L2 - 2024/2025</td>
                      <td className='px-6 py-4 text-sm text-gray-600'>Engineering</td>
                      <td className='px-6 py-4 text-sm text-gray-600'>20</td>
                      <td className='px-6 py-4 text-sm'>
                        <span className='bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-medium'>Active</span>
                      </td>
                      <td className='px-6 py-4 text-sm space-x-2'>
                        <button className='text-blue-600 hover:text-blue-700 font-medium'>Edit</button>
                        <button className='text-red-600 hover:text-red-700 font-medium'>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Faculty Tab */}
          {activeTab === 'faculty' && (
            <div>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-bold text-gray-900'>Faculty & Departments</h2>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'>
                  + Add Faculty
                </button>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {['Sciences', 'Engineering', 'Letters & Human Sciences', 'Business', 'Education'].map((faculty, idx) => (
                  <div key={idx} className='bg-white rounded-lg shadow p-6'>
                    <h3 className='text-lg font-bold text-gray-900 mb-4'>Faculty of {faculty}</h3>
                    <div className='space-y-2 mb-4'>
                      <p className='text-sm text-gray-600'>Departments: <span className='font-semibold text-gray-900'>4</span></p>
                      <p className='text-sm text-gray-600'>Programs: <span className='font-semibold text-gray-900'>8</span></p>
                    </div>
                    <div className='flex gap-2'>
                      <button className='flex-1 text-blue-600 hover:bg-blue-50 px-3 py-2 rounded font-medium transition text-sm'>
                        Edit
                      </button>
                      <button className='flex-1 text-red-600 hover:bg-red-50 px-3 py-2 rounded font-medium transition text-sm'>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <h2 className='text-xl font-bold text-gray-900 mb-6'>System Settings</h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='bg-white rounded-lg shadow p-6'>
                  <h3 className='text-lg font-bold text-gray-900 mb-4'>General Settings</h3>
                  <div className='space-y-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-900 mb-1'>University Name</label>
                      <input type='text' placeholder='Université de Yaoundé I' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600' />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-900 mb-1'>Academic Year</label>
                      <input type='text' placeholder='2024/2025' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600' />
                    </div>
                    <button className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium'>
                      Save Changes
                    </button>
                  </div>
                </div>

                <div className='bg-white rounded-lg shadow p-6'>
                  <h3 className='text-lg font-bold text-gray-900 mb-4'>Backup & Export</h3>
                  <div className='space-y-3'>
                    <button className='w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition font-medium'>
                      📥 Export All Data
                    </button>
                    <button className='w-full border-2 border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition font-medium'>
                      🔄 Create Backup
                    </button>
                    <button className='w-full border-2 border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition font-medium'>
                      📋 View Backups
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;

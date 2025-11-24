import React from 'react';
import { Card } from '../common';
import {
  FacultyIcon,
  DepartmentIcon,
  ProgramIcon,
  ArrowRightIcon,
} from '../icons';

export const FacultyCard = ({ faculty, onSelect }) => (
  <Card hoverable onClick={() => onSelect(faculty)} className='cursor-pointer'>
    <div className='flex items-center'>
      <div className='w-12 h-12 p-3 bg-blue-100 rounded-full mr-4 shrink-0 flex items-center justify-center'>
        <FacultyIcon />
      </div>
      <div className='grow'>
        <div className='font-bold text-lg text-gray-900 mb-1'>
          {faculty.name}
        </div>
        <div className='text-sm text-gray-500'>
          {faculty.departments?.length || 0} départements
        </div>
      </div>
      <ArrowRightIcon className='text-gray-500 font-bold ml-4' />
    </div>
  </Card>
);

export const DepartmentCard = ({ department, onSelect }) => (
  <Card
    hoverable
    onClick={() => onSelect(department)}
    className='cursor-pointer'
  >
    <div className='flex items-center'>
      <div className='w-12 h-12 p-3 bg-green-100 rounded-full mr-4 shrink-0 flex items-center justify-center'>
        <DepartmentIcon />
      </div>
      <div className='grow'>
        <div className='font-bold text-lg text-gray-900 mb-1'>
          {department.name}
        </div>
        <div className='text-sm text-gray-500'>
          {department.programs?.length || 0} programmes
        </div>
      </div>
      <ArrowRightIcon className='text-gray-500 font-bold ml-4' />
    </div>
  </Card>
);

export const ProgramCard = ({ program, onSelect }) => (
  <Card hoverable onClick={() => onSelect(program)} className='cursor-pointer'>
    <div className='flex items-center justify-between'>
      <div className='flex items-center'>
        <div className='w-10 h-10 p-2 bg-purple-100 rounded-full mr-4 flex items-center justify-center'>
          <ProgramIcon />
        </div>
        <div className='font-semibold text-gray-900'>{program}</div>
      </div>
      <ArrowRightIcon className='text-gray-500 font-bold' />
    </div>
  </Card>
);

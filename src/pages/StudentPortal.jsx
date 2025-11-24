import React from 'react';
import { Button } from '../components/common';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {
  FacultyCard,
  DepartmentCard,
  ProgramCard,
} from '../components/StudentPortal/SelectionCards';
import TimetableView from '../components/StudentPortal/TimetableView';
import { BackIcon } from '../components/icons';
import { facultiesData } from '../data/sampleData';
import { useStepNavigation, useTimetableFilters } from '../hooks';
import { STUDENT_PORTAL_STEPS, WEEKS } from '../constants';

const StudentPortal = () => {
  const { currentStep, previousStep, nextStep } = useStepNavigation(1, 4);
  const {
    selectedFaculty,
    setSelectedFaculty,
    selectedDepartment,
    setSelectedDepartment,
    selectedProgram,
    setSelectedProgram,
    availableDepartments,
    availablePrograms,
  } = useTimetableFilters(facultiesData);

  const handleFacultySelect = (faculty) => {
    setSelectedFaculty(faculty);
    nextStep();
  };

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    nextStep();
  };

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    nextStep();
  };

  const handleBack = () => {
    if (currentStep === 4) {
      setSelectedProgram('');
    } else if (currentStep === 3) {
      setSelectedDepartment(null);
    } else if (currentStep === 2) {
      setSelectedFaculty(null);
    }
    previousStep();
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return 'Sélectionnez une faculté pour continuer.';
      case 2:
        return `Départements de la faculté ${selectedFaculty?.name || ''}.`;
      case 3:
        return `Programmes du département ${selectedDepartment?.name || ''}.`;
      case 4:
        return `Emploi du temps pour ${selectedProgram}.`;
      default:
        return '';
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center'>
      <div className='max-w-5xl w-full mx-auto bg-white shadow-xl rounded-lg overflow-hidden'>
        <Header />

        <div className='px-6 py-12'>
          {/* Step Title and Description */}
          <div className='mb-8 text-center'>
            <h2 className='text-3xl font-bold text-gray-900 mb-2'>
              {STUDENT_PORTAL_STEPS[currentStep - 1].name}
            </h2>
            <p className='text-lg text-gray-600'>{getStepDescription()}</p>
          </div>

          {/* Back Button */}
          {currentStep > 1 && (
            <Button
              onClick={handleBack}
              variant='ghost'
              className='mb-6 flex items-center'
            >
              <BackIcon className='h-5 w-5 mr-1' />
              Retour
            </Button>
          )}

          {/* Step 1: Faculties */}
          {currentStep === 1 && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {facultiesData.faculties.map((faculty) => (
                <FacultyCard
                  key={faculty.id}
                  faculty={faculty}
                  onSelect={handleFacultySelect}
                />
              ))}
            </div>
          )}

          {/* Step 2: Departments */}
          {currentStep === 2 && selectedFaculty && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {availableDepartments.map((dept) => (
                <DepartmentCard
                  key={dept.id}
                  department={dept}
                  onSelect={handleDepartmentSelect}
                />
              ))}
            </div>
          )}

          {/* Step 3: Programs */}
          {currentStep === 3 && selectedDepartment && (
            <div className='grid grid-cols-1 gap-4'>
              {availablePrograms.map((program, idx) => (
                <ProgramCard
                  key={idx}
                  program={program}
                  onSelect={handleProgramSelect}
                />
              ))}
            </div>
          )}

          {/* Step 4: Timetable */}
          {currentStep === 4 && (
            <TimetableView
              selectedProgram={selectedProgram}
              departments={availableDepartments}
              weeks={WEEKS}
            />
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default StudentPortal;

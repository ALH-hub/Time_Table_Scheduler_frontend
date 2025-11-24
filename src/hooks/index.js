import { useState, useEffect } from 'react';

/**
 * Custom hook for managing multi-step navigation
 * @param {number} initialStep - Starting step number
 * @param {number} totalSteps - Total number of steps
 */
export const useStepNavigation = (initialStep = 1, totalSteps = 4) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goToStep = (step) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  const reset = () => {
    setCurrentStep(initialStep);
  };

  return {
    currentStep,
    nextStep,
    previousStep,
    goToStep,
    reset,
    isFirstStep: currentStep === 1,
    isLastStep: currentStep === totalSteps,
  };
};

/**
 * Custom hook for managing timetable filters
 */
export const useTimetableFilters = (data) => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('');

  const [availableDepartments, setAvailableDepartments] = useState([]);
  const [availablePrograms, setAvailablePrograms] = useState([]);

  // Update departments when faculty changes
  useEffect(() => {
    if (selectedFaculty) {
      setAvailableDepartments(selectedFaculty.departments || []);
      setSelectedDepartment(null);
      setSelectedProgram('');
    } else {
      setAvailableDepartments([]);
      setSelectedDepartment(null);
      setSelectedProgram('');
    }
  }, [selectedFaculty]);

  // Update programs when department changes
  useEffect(() => {
    if (selectedDepartment) {
      setAvailablePrograms(selectedDepartment.programs || []);
      setSelectedProgram('');
    } else {
      setAvailablePrograms([]);
      setSelectedProgram('');
    }
  }, [selectedDepartment]);

  const reset = () => {
    setSelectedFaculty(null);
    setSelectedDepartment(null);
    setSelectedProgram('');
    setSelectedWeek('');
    setAvailableDepartments([]);
    setAvailablePrograms([]);
  };

  return {
    selectedFaculty,
    setSelectedFaculty,
    selectedDepartment,
    setSelectedDepartment,
    selectedProgram,
    setSelectedProgram,
    selectedWeek,
    setSelectedWeek,
    availableDepartments,
    availablePrograms,
    reset,
  };
};

/**
 * Custom hook for managing form state
 */
export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const setFieldValue = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const setFieldError = (name, error) => {
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldError,
    setErrors,
    reset,
  };
};

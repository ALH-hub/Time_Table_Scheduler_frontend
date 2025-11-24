/**
 * Find a faculty by ID
 * @param {Array} faculties - Array of faculties
 * @param {string|number} facultyId - Faculty ID to search for
 * @returns {Object|null} - Found faculty or null
 */
export const findFacultyById = (faculties, facultyId) => {
  return (
    faculties.find((f) => f.id.toString() === facultyId.toString()) || null
  );
};

/**
 * Find a department by ID within a faculty
 * @param {Object} faculty - Faculty object
 * @param {string|number} departmentId - Department ID to search for
 * @returns {Object|null} - Found department or null
 */
export const findDepartmentById = (faculty, departmentId) => {
  if (!faculty || !faculty.departments) return null;
  return (
    faculty.departments.find(
      (d) => d.id.toString() === departmentId.toString(),
    ) || null
  );
};

/**
 * Get all departments from faculties data
 * @param {Array} faculties - Array of faculties
 * @returns {Array} - Flattened array of all departments
 */
export const getAllDepartments = (faculties) => {
  return faculties.flatMap((faculty) =>
    (faculty.departments || []).map((dept) => ({
      ...dept,
      facultyId: faculty.id,
      facultyName: faculty.name,
    })),
  );
};

/**
 * Filter data based on search query
 * @param {Array} items - Array of items to filter
 * @param {string} query - Search query
 * @param {Array} fields - Fields to search in
 * @returns {Array} - Filtered items
 */
export const filterByQuery = (items, query, fields = ['name']) => {
  if (!query) return items;

  const lowerQuery = query.toLowerCase();
  return items.filter((item) =>
    fields.some((field) => {
      const value = item[field];
      return value && value.toString().toLowerCase().includes(lowerQuery);
    }),
  );
};

/**
 * Format time slot for display
 * @param {string} timeSlot - Time slot string
 * @returns {string} - Formatted time slot
 */
export const formatTimeSlot = (timeSlot) => {
  return timeSlot.replace(/\s*-\s*/, ' - ');
};

/**
 * Check if two time slots overlap
 * @param {string} slot1 - First time slot
 * @param {string} slot2 - Second time slot
 * @returns {boolean} - True if slots overlap
 */
export const timeSlotsOverlap = (slot1, slot2) => {
  const parseTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const [start1, end1] = slot1.split('-').map((s) => parseTime(s.trim()));
  const [start2, end2] = slot2.split('-').map((s) => parseTime(s.trim()));

  return start1 < end2 && start2 < end1;
};

/**
 * Validate form data
 * @param {Object} values - Form values
 * @param {Object} rules - Validation rules
 * @returns {Object} - Validation errors
 */
export const validateForm = (values, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const value = values[field];
    const fieldRules = rules[field];

    if (fieldRules.required && (!value || value.toString().trim() === '')) {
      errors[field] = fieldRules.message || 'Ce champ est requis';
    }

    if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
      errors[field] =
        fieldRules.message ||
        `Minimum ${fieldRules.minLength} caractères requis`;
    }

    if (fieldRules.pattern && value && !fieldRules.pattern.test(value)) {
      errors[field] = fieldRules.message || 'Format invalide';
    }
  });

  return errors;
};

/**
 * Group array items by a key
 * @param {Array} array - Array to group
 * @param {string} key - Key to group by
 * @returns {Object} - Grouped object
 */
export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
};

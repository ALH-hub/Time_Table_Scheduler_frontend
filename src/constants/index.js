// Navigation configuration
export const NAV_LINKS = [
  { to: '/', label: 'Accueil', showOn: ['all'] },
  { to: '/student', label: 'Emploi du temps', showOn: ['all'], hideOn: [] },
  {
    to: '/login',
    label: 'Connexion Admin',
    showOn: ['all'],
    hideOn: ['/login'],
  },
];

// Days of the week
export const DAYS_OF_WEEK = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

// Time slots for timetable
export const TIME_SLOTS = [
  '08:00 - 10:00',
  '10:00 - 12:00',
  '13:00 - 15:00',
  '15:00 - 17:00',
];

// Weeks configuration
export const WEEKS = [
  { id: '1', name: 'Semaine 1' },
  { id: '2', name: 'Semaine 2' },
  { id: '3', name: 'Semaine 3' },
  { id: '4', name: 'Semaine 4' },
];

// Course types
export const COURSE_TYPES = {
  LECTURE: 'Cours Magistral',
  LAB: 'Travaux Pratiques',
  TUTORIAL: 'Travaux Dirigés',
};

// University information
export const UNIVERSITY_INFO = {
  name: 'Université de Yaoundé I',
  shortName: 'UY1',
  contact: 'info@uy1.cm',
  address: 'BP 812 Yaoundé',
};

// Application metadata
export const APP_INFO = {
  name: 'Unischeduler',
  tagline: 'Une consultation simplifiée des horaires',
  description:
    'Unischeduler est une plateforme permettant aux étudiants, enseignants et parents de consulter les emplois du temps',
  year: new Date().getFullYear(),
};

// Step navigation for StudentPortal
export const STUDENT_PORTAL_STEPS = [
  { id: 1, name: 'Facultés', icon: 'faculty' },
  { id: 2, name: 'Départements', icon: 'department' },
  { id: 3, name: 'Programmes', icon: 'program' },
  { id: 4, name: 'Emploi du temps', icon: 'timetable' },
];

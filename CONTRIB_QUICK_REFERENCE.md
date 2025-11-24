# Quick Reference Guide

## Common Tasks

### Starting Development

```bash
pnpm dev
```

### Building for Production

```bash
pnpm build
```

### Project Structure at a Glance

```
src/
├── components/      # Reusable components
│   ├── common/     # Button, Card, Input, Select
│   ├── icons/      # SVG icons
│   ├── layout/     # Header, Footer
│   └── [feature]/  # Feature-specific components
├── constants/       # App-wide constants
├── hooks/          # Custom React hooks
├── pages/          # Route components
└── utils/          # Helper functions
```

---

## Component Usage

### Button

```jsx
import { Button } from '../components/common';

// As link
<Button to="/path" variant="primary" size="lg">Text</Button>

// As button
<Button onClick={handleClick} variant="secondary">Text</Button>

// Variants: primary, secondary, success, danger, ghost
// Sizes: sm, md, lg
```

### Card

```jsx
import { Card } from '../components/common';

<Card hoverable padding='md' onClick={handleClick}>
  Content here
</Card>;
```

### Input

```jsx
import { Input } from '../components/common';

<Input
  label='Username'
  type='text'
  name='username'
  value={value}
  onChange={handleChange}
  error={error}
  required
/>;
```

### Select

```jsx
import { Select } from '../components/common';

<Select
  label='Choose option'
  options={[
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
  ]}
  value={selected}
  onChange={handleChange}
  placeholder='Select...'
/>;
```

---

## Custom Hooks

### useStepNavigation

```jsx
import { useStepNavigation } from '../hooks';

const { currentStep, nextStep, previousStep, goToStep, reset } =
  useStepNavigation(1, 4);

// Use in multi-step forms/wizards
```

### useTimetableFilters

```jsx
import { useTimetableFilters } from '../hooks';

const {
  selectedFaculty,
  setSelectedFaculty,
  selectedDepartment,
  setSelectedDepartment,
  availableDepartments,
  availablePrograms,
  reset,
} = useTimetableFilters(data);
```

### useForm

```jsx
import { useForm } from '../hooks';

const {
  values,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
  setFieldError,
  reset,
} = useForm({ username: '', password: '' });

<Input
  name='username'
  value={values.username}
  onChange={handleChange}
  onBlur={handleBlur}
  error={errors.username}
/>;
```

---

## Utility Functions

### helpers.js

```jsx
import {
  findFacultyById,
  filterByQuery,
  validateForm,
  groupBy,
} from '../utils/helpers';

// Find faculty
const faculty = findFacultyById(faculties, '1');

// Filter data
const filtered = filterByQuery(items, 'search', ['name', 'code']);

// Validate form
const errors = validateForm(values, {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Email invalide',
  },
});

// Group array
const grouped = groupBy(items, 'category');
```

### storage.js

```jsx
import {
  saveToStorage,
  getFromStorage,
  removeFromStorage,
  clearStorage,
} from '../utils/storage';

// Save data
saveToStorage('key', { data: 'value' });

// Get data
const data = getFromStorage('key', defaultValue);

// Remove data
removeFromStorage('key');

// Clear all
clearStorage();
```

---

## Constants

### Import from constants

```jsx
import {
  NAV_LINKS,
  DAYS_OF_WEEK,
  TIME_SLOTS,
  COURSE_TYPES,
  UNIVERSITY_INFO,
  APP_INFO,
  WEEKS,
} from '../constants';

// Use directly in components
{
  DAYS_OF_WEEK.map((day) => <th key={day}>{day}</th>);
}
```

---

## Icons

```jsx
import {
  FacultyIcon,
  DepartmentIcon,
  ProgramIcon,
  BackIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from '../components/icons';

<FacultyIcon className='w-6 h-6 text-blue-600' />;
```

---

## Adding New Routes

1. Create page component in `src/pages/`

```jsx
// src/pages/NewPage.jsx
const NewPage = () => {
  return (
    <div>
      <Header />
      {/* Content */}
      <Footer />
    </div>
  );
};
export default NewPage;
```

2. Export from `src/pages/index.js`

```jsx
export { default as NewPage } from './NewPage';
```

3. Add route in `src/App.jsx`

```jsx
import { NewPage } from './pages';
// ...
<Route path='/new' element={<NewPage />} />;
```

4. Add to navigation in `src/constants/index.js`

```jsx
export const NAV_LINKS = [
  // ...
  { to: '/new', label: 'New Page', showOn: ['all'] },
];
```

---

## Creating New Components

### Structure

```jsx
// src/components/category/ComponentName.jsx
import React from 'react';

const ComponentName = ({ prop1, prop2, ...props }) => {
  return <div {...props}>{/* Component content */}</div>;
};

export default ComponentName;
```

### Export

```jsx
// src/components/category/index.js
export { default as ComponentName } from './ComponentName';
export { default as AnotherComponent } from './AnotherComponent';
```

### Usage

```jsx
import { ComponentName } from '../components/category';
```

---

## Debugging Tips

### Check Console

Open browser DevTools (F12) and check Console tab for errors

### Verify Imports

Ensure all imports use correct paths:

- `../` for parent directory
- `./` for same directory
- No file extension for `.jsx` files

### Check Constants

Make sure constants are imported from `src/constants/index.js`

### Component Props

Verify prop names match between parent and child components

### Network Tab

Check if data is loading correctly in Network tab

---

## Code Style

### Naming Conventions

- **Components**: PascalCase (`Button`, `StudentPortal`)
- **Files**: Match component name (`Button.jsx`)
- **Hooks**: camelCase with 'use' prefix (`useForm`, `useStepNavigation`)
- **Utils**: camelCase (`validateForm`, `saveToStorage`)
- **Constants**: SCREAMING_SNAKE_CASE (`DAYS_OF_WEEK`, `NAV_LINKS`)

### File Organization

- One component per file
- Related components in same folder
- Barrel exports (index.js) for clean imports

### Import Order

1. React and external libraries
2. Components
3. Hooks
4. Utils and helpers
5. Constants and data
6. Styles (if any)

---

## Best Practices

1. Always use constants instead of hardcoded values
2. Extract reusable logic into custom hooks
3. Use common components for consistency
4. Keep components small and focused
5. Add meaningful prop names
6. Use semantic HTML
7. Include ARIA labels for accessibility
8. Handle loading and error states
9. Validate user inputs
10. Comment complex logic

---

## Learning Resources

### React

- [React Docs](https://react.dev/)
- [React Hooks](https://react.dev/reference/react)

### Tailwind CSS

- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/)

### React Router

- [React Router Docs](https://reactrouter.com/)

---

## Getting Help

1. Check the error message in console
2. Review component props and imports
3. Check `PROJECT_STRUCTURE.md` for architecture
4. Look at similar working components for reference

---

**Happy Coding!**

# Timetable Scheduler Frontend

A modern, well-structured React application for managing and viewing university timetables.

## Project Structure

```
src/
├── components/
│   ├── common/                 # Reusable UI components
│   │   ├── Button.jsx         # Customizable button component
│   │   ├── Card.jsx           # Card wrapper component
│   │   ├── Input.jsx          # Form input component
│   │   ├── Select.jsx         # Dropdown select component
│   │   └── index.js           # Barrel export
│   │
│   ├── icons/                 # SVG icon components
│   │   └── index.jsx          # All icon exports
│   │
│   ├── layout/                # Layout components
│   │   ├── Header.jsx         # Global header with navigation
│   │   └── Footer.jsx         # Global footer
│   │
│   ├── StudentPortal/         # Student portal specific components
│   │   ├── SelectionCards.jsx # Faculty/Department/Program cards
│   │   └── TimetableView.jsx  # Timetable display view
│   │
│   └── TimetableGrid/         # Timetable grid components
│       └── TimetableGrid.jsx  # Grid layout for schedules
│
├── constants/                 # Application constants
│   └── index.js              # Navigation, time slots, days, etc.
│
├── data/                     # Sample/mock data
│   └── sampleData.js        # Faculty and department data
│
├── hooks/                    # Custom React hooks
│   └── index.js             # useStepNavigation, useTimetableFilters, useForm
│
├── pages/                    # Page components (routes)
│   ├── Home.jsx             # Landing page
│   ├── Login.jsx            # Admin login page
│   ├── StudentPortal.jsx    # Student timetable selection flow
│   └── NotFound.jsx         # 404 error page
│
├── utils/                    # Utility functions
│   ├── helpers.js           # General helper functions
│   └── storage.js           # LocalStorage utilities
│
├── App.jsx                   # Main application component with routing
├── main.jsx                  # Application entry point
└── index.css                 # Global styles
```

## Key Features

### Component Architecture

- **Reusable Components**: Button, Card, Input, Select components with consistent styling
- **Icon System**: Centralized SVG icon components for consistency
- **Layout Components**: Shared Header and Footer across pages
- **Smart Routing**: Clean route structure with 404 handling

### Custom Hooks

- `useStepNavigation`: Multi-step form/wizard navigation
- `useTimetableFilters`: Cascading filter management (Faculty → Department → Program)
- `useForm`: Form state management with validation

### Utility Functions

- Data filtering and searching
- Form validation
- LocalStorage management
- Time slot helpers

### Constants Management

- Navigation links configuration
- Days of the week and time slots
- Course types
- University information
- Application metadata

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Routes

- `/` - Home page with introduction and navigation
- `/student` - Student portal for browsing timetables
- `/login` - Admin login page
- `*` - 404 Not Found page

## Styling

The project uses **Tailwind CSS v4** for styling with:

- Consistent color scheme defined in CSS variables
- Responsive design for mobile, tablet, and desktop
- Accessible focus states
- Print-friendly styles

Data Structure

### Faculty Structure

```javascript
{
  id: number,
  name: string,
  code: string,
  description: string,
  departments: [
    {
      id: number,
      name: string,
      programs: string[]
    }
  ]
}
```

### Schedule Structure

```javascript
{
  id: number,
  course: string,
  teacher: string,
  room: string,
  day: string,
  time: string,
  type: string // 'Cours Magistral' | 'Travaux Pratiques' | 'Travaux Dirigés'
}
```

## Customization

### Adding New Constants

Edit `src/constants/index.js` to add new application-wide constants.

### Creating New Components

1. Create component in appropriate directory under `src/components/`
2. Export from directory's `index.js` if creating a group
3. Import and use in pages

### Adding New Routes

1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/constants/index.js`

## Architecture Decisions

### Why This Structure?

- **Separation of Concerns**: Clear distinction between components, pages, utilities
- **Reusability**: Common components can be used across the application
- **Maintainability**: Easy to locate and update specific functionality
- **Scalability**: New features can be added without restructuring

### Component Organization

- `common/` - Generic, reusable UI components
- `layout/` - Application-wide layout components
- Feature-specific folders - Components tied to specific features

### State Management

- Local state with React hooks for component-specific state
- Custom hooks for shared logic and complex state
- No global state library needed for current complexity

## Best Practices

1. **Import from index files**: Use barrel exports for cleaner imports
2. **Use constants**: Don't hardcode values that appear multiple times
3. **Custom hooks**: Extract complex logic into reusable hooks
4. **Component composition**: Build complex UIs from simple components
5. **Prop validation**: Use PropTypes or TypeScript for type safety
6. **Accessibility**: Include ARIA labels and keyboard navigation

## Development Notes

### Common Issues

- Ensure all imports use correct relative paths
- Check that constants are imported from `src/constants/index.js`
- Verify component exports match import statements

### Performance Tips

- Components are functional with hooks for better performance
- Avoid unnecessary re-renders by proper state placement
- Use React.memo for expensive components if needed

## License

This project is part of the University of Yaoundé I timetable management system.

## Contributors

Frontend Development Team - 2025

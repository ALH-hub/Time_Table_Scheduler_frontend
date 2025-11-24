# Timetable Scheduler - Replit Project

## Overview
Une application web de gestion des emplois du temps pour l'Université de Yaoundé II. Le projet est une application React + Vite avec Tailwind CSS pour la création d'une plateforme publique permettant de consulter les emplois du temps sans connexion.

## Current State
- **Frontend Framework**: React 18 + React Router v6
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.17
- **Dev Server**: Runs on port 5000

## Project Structure
```
src/
├── components/
│   ├── common/        # Reusable UI components (Button, Card, Input, Select)
│   ├── icons/         # Icon components
│   ├── layout/        # Header and Footer layout components
│   ├── StudentPortal/ # Student portal specific components
│   ├── TimetableGrid/ # Timetable grid display component
├── constants/         # Constants and configuration
├── data/              # Sample timetable data
├── hooks/             # Custom React hooks
├── pages/             # Page components (Home, Login, StudentPortal, NotFound)
├── utils/             # Helper functions and storage utilities
├── App.jsx            # Main application component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Sprints Overview

### Sprint 1: Basic Website & Public View (Completed)
- [x] Landing page with university branding
- [x] Public timetable view with filters
- [x] Basic navigation menu
- [x] Sample data structure

### Sprint 2: Admin System & Basic Editing (In Progress)
- [ ] Admin login system with authentication
- [ ] Admin dashboard with statistics
- [ ] Basic timetable editor
- [ ] Data management forms

### Sprint 3: Enhanced Features & Polish (Planned)
- [ ] Conflict detection for class scheduling
- [ ] Export functionality (PDF, Print, Image)
- [ ] UI/UX improvements
- [ ] Mobile responsiveness
- [ ] Testing and bug fixes

## Recent Changes
- Fixed JSX structure in Header component (proper closing tags)
- Configured Vite for Replit environment (host: 0.0.0.0, port: 5000, allowedHosts: true)
- Installed all npm dependencies
- Dev server running successfully

## Dev Server Configuration
- **Port**: 5000
- **Host**: 0.0.0.0 (allows proxy access)
- **Command**: `npm run dev`
- **HMR Enabled**: Yes (hot module replacement)

## Workflow
- **Dev Server** workflow is configured to run `npm run dev`
- Access the app through the web preview

## Notes for Development
- Keep React Router warnings about future flags in mind for v7 upgrade
- The public view is read-only for non-admin users
- Admin login is currently hardcoded for development
- Sample data is stored in `src/data/sampleData.js`

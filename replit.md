# Timetable Scheduler - Replit Project

## Overview
**Unischeduler** - Une plateforme complète de gestion des emplois du temps pour l'Université de Yaoundé II. Application web moderne permettant aux étudiants de consulter les emplois du temps sans inscription et aux administrateurs de gérer les plannings.

## Current State - Sprint 1 Complete ✅

### Frontend Stack
- **Framework**: React 18.2.0 + React Router v6
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.17
- **Design**: Modern gradients, responsive layout (mobile & desktop)
- **Color Scheme**: Blue-Purple gradients (no emojis)

### Project Architecture
```
src/
├── pages/
│   ├── Home.jsx              # Landing page with feature cards
│   ├── StudentPortal.jsx     # 4-step wizard for timetable search
│   ├── Login.jsx             # Admin authentication page
│   ├── Loading.jsx           # Loading animation page
│   └── NotFound.jsx          # 404 page
├── components/
│   ├── common/               # Reusable UI components
│   ├── layout/               # Header, Footer
│   ├── StudentPortal/        # Selection cards, TimetableView
│   ├── TimetableGrid/        # Timetable grid display
│   └── icons/                # SVG icons
├── data/
│   ├── sampleData.js         # Faculty/Department structure
│   └── timetableData.js      # Real course schedules (3 programs, 2 weeks)
├── constants/                # App configuration
├── hooks/                    # Custom React hooks
├── utils/                    # Helper functions
└── App.jsx                   # Main app with routing
```

## Sprint 1 Features - All Complete ✅

### User Story 1: Attractive Landing Page ✅
- Page d'accueil professionnelle avec gradient bleu-violet
- Logo et nom de l'école (Unischeduler - Université de Yaoundé)
- Description claire du système
- 3 cartes d'information (Étudiants, Administration, Efficacité)
- Boutons d'action vers les différentes sections
- Design responsive (mobile & desktop)

### User Story 2: Public Timetable View ✅
- Page sans connexion requise
- 4-step selection wizard:
  1. Sélection de la Faculté
  2. Sélection du Département
  3. Sélection du Programme
  4. Affichage de l'emploi du temps
- Filtre par semaine (Semaine 1-4)
- Grille hebdomadaire (Lundi-Vendredi)
- Informations complètes par cours:
  - Nom du cours
  - Enseignant
  - Salle
  - Type (Cours Magistral, TP, TD)
- Codes couleurs par type de cours
- Légende explicative
- Lecture seule - pas de modification possible

### User Story 3: Responsive Navigation ✅
- Menu cohérent sur toutes les pages
- Navigation fluide: Accueil → Emplois du Temps → Connexion Admin
- Pied de page avec informations de l'université
- Design responsive sur tous les appareils

### Additional Features - Page de Chargement ✅
- Loading page professionnelle avec:
  - Barre de progression animée
  - Boules d'animation
  - Logo de l'université
  - Redirection automatique

### Admin Login ✅
- Page de connexion sécurisée
- Formulaire avec validation
- Message d'information d'accès démo
- Design cohérent avec le reste de l'app

## Timetable Data - Sample Programs ✅

### Programmes Disponibles:
1. **Licence Informatique**
   - Cours Magistraux: Algorithmes, Bases de Données, Réseaux, Génie Logiciel, Sécurité, Cloud Computing
   - Travaux Pratiques: Programming C++, Labo SQL, TCP/IP, Projets
   - Travaux Dirigés: UML et Design Patterns, Cryptographie

2. **Licence Mathématiques**
   - Cours: Analyse Réelle, Algèbre Linéaire, Géométrie Différentielle, Statistiques
   - Travaux Dirigés: Exercices, Théorie des Nombres, Topologie

3. **Licence Chimie**
   - Cours: Chimie Organique, Chimie Inorganique, Biochimie, Chimie Analytique
   - Travaux Pratiques: Labo Chimie Organique, Chimie Analytique

## Routes Disponibles
- `/` - Page d'accueil
- `/student` - Consulter les emplois du temps (4-step wizard)
- `/login` - Connexion administrateur
- `/loading` - Animation de chargement
- `/*` - Page 404

## Dev Server Configuration
- **Port**: 5000
- **Host**: 0.0.0.0 (proxy-ready for Replit)
- **Command**: `npm run dev`
- **HMR**: Enabled (hot module replacement)

## Design System

### Color Palette
- **Primary**: Blue (#1e40af) → Purple (#7c3aed)
- **Secondary**: Pink (#ec4899)
- **Accent**: Orange (#f59e0b)
- **Backgrounds**: Soft gradients (blue/purple/pink tones)

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana
- Headings: Bold, large sizes
- Text: Clear hierarchy, accessible

### Components
- Cards with hover effects and shadows
- Gradients on headers and footers
- Rounded borders (xl, lg)
- Smooth transitions (0.3s)
- Progress indicators
- Course type legend

## Recent Changes
1. Created Loading page with progress animation
2. Added real timetable data (timetableData.js)
3. Enhanced TimetableView with:
   - Week selector dropdown
   - Course information display
   - Color-coded course types
   - Legend for course types
4. Improved responsive design across all pages
5. Removed all emojis for professional appearance
6. Added Loading route to App.jsx

## Next Steps (Sprint 2)
- Admin login system with authentication
- Admin dashboard with statistics
- Basic timetable editor
- Data management forms
- Save/update functionality

## Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

## Performance Notes
- Fast initial load with Vite
- Hot module replacement for development
- Optimized re-renders with React hooks
- Smooth animations and transitions
- No external API calls (mock data only)

## Deployment Ready
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Ready for production deployment with proper backend integration

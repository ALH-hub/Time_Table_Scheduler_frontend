import React from 'react'
import { Link } from 'react-router-dom'

// Composant de l'en-tête (HeaderPastel) corrigé pour l'espacement et la navigation
const HeaderPastel = ({ currentPath }) => (
    <div className="bg-gray-200 py-4 px-6 md:px-12 rounded-t-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            
            {/* Logo et Nom de l'Université (Utilisation de flex-grow pour l'alignement) */}
            <div className="flex items-center space-x-4 flex-grow">
                <div className="w-12 h-12 bg-white rounded-full border border-gray-300">
                    {/* Placeholder pour le logo */}
                </div>
                <span className="text-gray-700 font-semibold text-sm hidden sm:block">Université de Yaoundé I</span>
            </div>
            
            {/* Navigation Générale (Accueil & Emploi du temps & Connexion Admin) */}
            {currentPath !== '/login' && (
                <nav className="flex text-gray-700 font-medium ml-auto"> 
                    <Link to="/" className="hover:text-blue-600 transition-colors mr-10">Accueil</Link> 
                    <Link to="/student" className="hover:text-blue-600 transition-colors mr-10">Emploi du temps</Link>
                    <Link to="/login" className="hover:text-blue-600 transition-colors">Connexion Admin</Link>
                </nav>
            )}
            
            {/* Navigation simplifiée (uniquement Accueil pour Login) */}
            {currentPath === '/login' && (
                 <nav className="flex text-gray-700 font-medium ml-auto">
                     <Link to="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
                 </nav>
            )}
        </div>
    </div>
)

const Login = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center">
            <div className="max-w-5xl w-full mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                
                {/* Passage du chemin actuel pour la logique de navigation */}
                <HeaderPastel currentPath="/login" />

                {/* Reste du contenu Login.jsx */}
                <main className="py-16 px-6 flex justify-center flex-grow">
                    
                    <div className="p-10 border border-gray-300 rounded-lg shadow-md max-w-sm w-full bg-gray-50">
                        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Accès administration</h2>
                        
                        <div className="mb-4">
                            <label htmlFor="identifiant" className="block text-gray-700 font-semibold mb-2">Identifiant</label>
                            <input 
                                type="text" 
                                id="identifiant" 
                                name="identifiant"
                                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="motdepasse" className="block text-gray-700 font-semibold mb-2">Mot de passe</label>
                            <input 
                                type="password" 
                                id="motdepasse" 
                                name="motdepasse"
                                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                            />
                        </div>

                        <div className="flex flex-col items-center space-y-4">
                            <button 
                                type="submit"
                                className="w-full px-6 py-2 rounded-full font-bold text-gray-700 bg-gray-300 hover:bg-gray-400 transition-colors shadow-md"
                            >
                                Se connecter
                            </button>
                            
                            <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                Retour à l'accueil
                            </Link>
                        </div>
                    </div>
                </main>

                <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
                    &copy;2025 – Université de Yaoundé I | Contact : info@uy1.cm
                </footer>
            </div>
        </div>
    )
}

export default Login
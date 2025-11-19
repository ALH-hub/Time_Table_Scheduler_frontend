// Footer.jsx (Version Améliorée pour plus de subtilité)
import React from 'react'

const Footer = () => {
  return (
    // Changement de la couleur de fond (bg-gray-800 ou 900 est plus discret que le bleu lourd)
    <footer className="bg-gray-900 text-white py-6 mt-12"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-semibold text-sm mb-1">Université de Yaoundé I</p>
        <p className="text-gray-400 text-xs mb-3">Système de Gestion des Emplois du Temps</p>
        <div className="border-t border-gray-700 pt-3">
          <p className="text-gray-500 text-xs">&copy; 2025 Tous droits réservés | BP 812 Yaoundé</p>
        </div>
        {/* Ajouter ici des liens légaux si nécessaire (ex: Politique de confidentialité) */}
      </div>
    </footer>
  )
}

export default Footer
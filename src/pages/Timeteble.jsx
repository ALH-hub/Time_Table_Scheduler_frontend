import React, { useState, useEffect } from 'react'
import { sampleData } from '../data/sampleData'

const Timetable = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedWeek, setSelectedWeek] = useState('')
  const [filteredClasses, setFilteredClasses] = useState([])

  const weeks = [
    { id: '1', name: 'Semaine 1' },
    { id: '2', name: 'Semaine 2' },
    { id: '3', name: 'Semaine 3' }
  ]

  useEffect(() => {
    if (selectedDepartment) {
      const department = sampleData.departments.find(dept => dept.id.toString() === selectedDepartment)
      setFilteredClasses(department ? department.classes : [])
      setSelectedClass('')
    } else {
      setFilteredClasses([])
      setSelectedClass('')
    }
  }, [selectedDepartment])

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Emplois du Temps
        </h1>
        <p className="text-xl text-gray-600">
          Consultez les horaires de cours par département et classe
        </p>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Département
            </label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sélectionnez un département</option>
              {sampleData.departments.map(dept => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Classe
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              disabled={!selectedDepartment}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
            >
              <option value="">Sélectionnez une classe</option>
              {filteredClasses.map(cls => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Semaine
            </label>
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sélectionnez une semaine</option>
              {weeks.map(week => (
                <option key={week.id} value={week.id}>
                  {week.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {(selectedDepartment && selectedClass && selectedWeek) && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 text-center">
              Filtres appliqués ! La grille d'emploi du temps s'affichera ici.
            </p>
          </div>
        )}
      </div>

      {/* Message d'information */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">📅</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Interface Emplois du Temps
        </h3>
        <p className="text-gray-600 mb-4">
          Sélectionnez un département, une classe et une semaine pour afficher l'emploi du temps.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 inline-block">
          <p className="text-blue-700 text-sm">
            <strong>Département sélectionné :</strong> {selectedDepartment || 'Aucun'}<br/>
            <strong>Classe sélectionnée :</strong> {selectedClass || 'Aucune'}<br/>
            <strong>Semaine sélectionnée :</strong> {selectedWeek || 'Aucune'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Timetable
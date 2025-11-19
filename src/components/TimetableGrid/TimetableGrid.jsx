import React from 'react'

const TimetableGrid = () => {
  // Données de démonstration
  const schedule = [
    { id: 1, course: 'Algorithmique', teacher: 'Dr. Martin', room: 'Amphi A', day: 'Lundi', time: '08:00-10:00', type: 'Cours Magistral' },
    { id: 2, course: 'Base de Données', teacher: 'Prof. Wilson', room: 'Salle INFO 101', day: 'Lundi', time: '10:15-12:15', type: 'Travaux Pratiques' },
    { id: 3, course: 'Mathématiques', teacher: 'Dr. Johnson', room: 'Amphi B', day: 'Mardi', time: '08:00-10:00', type: 'Cours Magistral' }
  ]

  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']
  const timeSlots = ['08:00-10:00', '10:15-12:15', '13:00-15:00', '15:15-17:15']

  const getCourseForSlot = (day, timeSlot) => {
    return schedule.find(course => course.day === day && course.time === timeSlot)
  }

  return (
    <div className="overflow-x-auto">
      <div className="timetable-grid min-w-[800px]">
        {/* En-tête des jours */}
        <div className="timetable-corner bg-blue-800 text-white p-3 text-center font-bold"></div>
        {days.map(day => (
          <div key={day} className="bg-blue-600 text-white p-3 text-center font-bold">
            {day}
          </div>
        ))}
        
        {/* Grille des cours */}
        {timeSlots.map(timeSlot => (
          <React.Fragment key={timeSlot}>
            <div className="bg-gray-100 p-3 text-center font-medium border border-gray-300">
              {timeSlot}
            </div>
            {days.map(day => {
              const course = getCourseForSlot(day, timeSlot)
              return (
                <div key={`${day}-${timeSlot}`} className="border border-gray-300 p-2 min-h-[100px]">
                  {course ? (
                    <div className={`p-2 rounded ${
                      course.type === 'Cours Magistral' ? 'bg-blue-100 border border-blue-300' :
                      course.type === 'Travaux Pratiques' ? 'bg-green-100 border border-green-300' :
                      'bg-purple-100 border border-purple-300'
                    }`}>
                      <div className="font-semibold text-sm">{course.course}</div>
                      <div className="text-xs text-gray-600">{course.teacher}</div>
                      <div className="text-xs text-green-600">{course.room}</div>
                      <div className="text-xs text-gray-500 italic">{course.type}</div>
                    </div>
                  ) : (
                    <div className="text-gray-400 italic text-center text-sm">-</div>
                  )}
                </div>
              )
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default TimetableGrid
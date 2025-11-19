export const facultiesData = {
  faculties: [
    {
      id: 1,
      name: "Faculté des Arts",
      code: "ARTS",
      description: "Histoire de l'Art, Arts Plastiques et Arts du Spectacle",
      departments: [
        { 
          id: 101, 
          name: "Histoire de l'Art", 
          programs: ["Licence Histoire de l'Art", "Master Muséologie", "Doctorat Arts et Archéologie"] 
        },
        { 
          id: 102, 
          name: "Arts Plastiques", 
          programs: ["Licence Arts Plastiques", "Master Design", "Master Peinture et Sculpture"] 
        },
        { 
          id: 103, 
          name: "Arts du Spectacle", 
          programs: ["Licence Théâtre", "Licence Cinéma", "Licence Musique", "Master Mise en Scène"] 
        }
      ]
    },
    {
      id: 2,
      name: "Faculté des Lettres et Sciences Humaines",
      code: "FALSH", 
      description: "Langues, Littérature, Psychologie et Sciences Sociales",
      departments: [
        { 
          id: 201, 
          name: "Anglais", 
          programs: ["Licence Anglais", "Master Traduction", "Master Linguistique Anglaise"] 
        },
        { 
          id: 202, 
          name: "Français", 
          programs: ["Licence Français", "Master Littérature Française", "Master Linguistique"] 
        },
        { 
          id: 203, 
          name: "Psychologie", 
          programs: ["Licence Psychologie", "Master Psychologie Clinique", "Master Neuropsychologie"] 
        },
        { 
          id: 204, 
          name: "Sciences Sociales", 
          programs: ["Licence Sociologie", "Master Anthropologie", "Master Recherche Sociale"] 
        }
      ]
    },
    {
      id: 3,
      name: "Faculté des Sciences",
      code: "FS",
      description: "Biosciences, Chimie, Informatique, Mathématiques et Physique",
      departments: [
        { 
          id: 301, 
          name: "Informatique", 
          programs: ["Licence Informatique", "Master Intelligence Artificielle", "Master Réseaux et Sécurité"] 
        },
        { 
          id: 302, 
          name: "Mathématiques", 
          programs: ["Licence Mathématiques", "Master Statistiques", "Master Mathématiques Appliquées"] 
        },
        { 
          id: 303, 
          name: "Physique", 
          programs: ["Licence Physique", "Master Astrophysique", "Master Physique Quantique"] 
        },
        { 
          id: 304, 
          name: "Chimie", 
          programs: ["Licence Chimie", "Master Biochimie", "Master Chimie Analytique"] 
        },
        { 
          id: 305, 
          name: "Biosciences", 
          programs: ["Licence Biologie", "Master Génétique", "Master Biologie Moléculaire"] 
        }
      ]
    },
    {
      id: 4,
      name: "Faculté des Sciences de l'Éducation", 
      code: "FSE",
      description: "Sociologie, Psychologie et Technologies de l'Éducation",
      departments: [
        { 
          id: 401, 
          name: "Sciences de l'Éducation", 
          programs: ["Licence Sciences de l'Éducation", "Master Pédagogie", "Doctorat en Éducation"] 
        },
        { 
          id: 402, 
          name: "TIC et Éducation", 
          programs: ["Licence TIC", "Master e-Learning", "Master Technologies Éducatives"] 
        }
      ]
    },
    {
      id: 5,
      name: "Faculté de Médecine et des Sciences Biomédicales",
      code: "FMSB",
      description: "Médecine, Recherche Biomédicale et Santé Publique",
      departments: [
        { 
          id: 501, 
          name: "Médecine Générale", 
          programs: ["Doctorat en Médecine", "Spécialisation Chirurgie", "Spécialisation Pédiatrie"] 
        },
        { 
          id: 502, 
          name: "Sciences Biomédicales", 
          programs: ["Master Biomédecine", "Doctorat Recherche Biomédicale", "Master Santé Publique"] 
        }
      ]
    }
  ]
}
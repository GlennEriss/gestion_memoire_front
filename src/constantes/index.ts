/**
 * @module constantes
 */

export const apiRoutes = {
    annee: {
        get: 'getAllAnneeAcademiques',
        getById: 'get{id}',
        add: 'addAnneeAcademique',
        put: 'updateAnneeAcademique',
        delete: 'deletAnneeAcademique',
    },
    lector: {
        get: 'Lector/getAllLecteurrs',
        add: 'Lecteur/addLecteur'
    }
}
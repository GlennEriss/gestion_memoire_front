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
        get: 'getAllLecteurs',
        add: 'addLecteur',
        delete: 'deleteLecteur',
        getById: 'getLecteur',
        update: 'updateLecteur'
    },
    expert: {
        add: 'addExpert',
        get: 'getAllExperts',
        delete: 'deleteExpert',
        getById: 'getExpert',
        update: 'updateExpert'
    },
    auth: {
        login: 'api/Auth/login'
    }
}
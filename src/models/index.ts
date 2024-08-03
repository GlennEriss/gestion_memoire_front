type User = {
    id?: number,
    password: string,
    email: string,
}
type Person = {
    nom: string,
    prenom: string,
    dateNaissance: string|Date,
    sexe?: 'M'|'F',
    adresse: string,
    telephone: string
}
export type ExpertModel = User & Person & {
    fonction: string,
}

export type Utilisateur =  User & Person
export type YearModel = {
    id?: number,
    anneeDebut: string,
    anneeFin: string
}


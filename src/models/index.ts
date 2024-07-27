type User = {
    id?: number,
    password: string,
    email: string,
}
type Person = {
    nom: string,
    prenom: string,
    birthdate: Date,
    sexe: 'M'|'F'
}
export type ExpertModel = User & Person & {
    fonction: string,
    adresse: string,
    telephone: string,
}

export type YearModel = {
    id?: number,
    anneeDebut: string,
    anneeFin: string
}
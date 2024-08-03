export type LocalizedPath = {
    fr: string;
    en: string;
};

export type Pathnames = {
    '/': string;
    '/login': LocalizedPath;
    '/dashboard/theses': LocalizedPath;
};
export type Role = 'LIBRARIAN'|'LECTOR'
export type Creation = {
    createdAt: Date,
    updatedAt: Date
}
export type UserDetails = {
    id?: number,
    uid?: string,
    firstname: string,
    lastname: string,
    password? : string,
    email: string, 
    role: Role,
    adress: string,
    phoneNumber: string,
    searchableName?: string
}

export type Sexe = 'M'| 'F'
export type Lector = UserDetails & Creation & {
    birthday: string|Date,
    sexe: string,
    photoURL?: string
}

export type Student = Lector & {
    matricule: string
}

export type Expert = Lector & {
    fonction: string
}

export type AcademicYear = {
    id?: number,
    yearStart: string,
    yearEnd: string,
    isActived: boolean
}
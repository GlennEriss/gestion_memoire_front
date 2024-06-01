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

export type UserDetails = {
    id?: number,
    uid?: string,
    firstname: string,
    lastname: string,
    password? : string,
    email: string, 
    role: Role
}

export type Sexe = 'M'| 'F'
export type Lector = UserDetails &  {
    birthday: Date,
    sexe: string,
    photoURL?: string
}

export type Student = Lector & {
    matricule: string
}

export type Professor = Lector & {
    fonction: string
}
export interface PaisMin {
    flags: Flags;
    name: Name;
    cca3: string;
    capital: string[];
    region: string;
    population: number;
}

export interface Flags {
    png: string;
    svg: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

export interface NativeName {
    aym: Aym;
    que: Aym;
    spa: Aym;
}

export interface Aym {
    official: string;
    common: string;
}
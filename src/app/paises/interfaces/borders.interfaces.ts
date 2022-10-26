export interface Borders {
    name: Name;
    capital: string[];
    borders: string[];
}

export interface NameBorder {
    name: Name;
    cca3: string
}

export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

export interface NativeName {
    spa: SPA;
}

export interface SPA {
    official: string;
    common: string;
}


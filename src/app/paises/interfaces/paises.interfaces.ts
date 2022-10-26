export interface Paises {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc?: string;
    independent: boolean;
    status: Status;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: Region;
    subregion: Subregion;
    languages: Languages;
    translations: { [key: string]: Translation };
    latlng: number[];
    landlocked: boolean;
    borders?: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini?: { [key: string]: number };
    fifa?: string;
    car: Car;
    timezones: string[];
    continents: Region[];
    flags: CoatOfArms;
    coatOfArms: CoatOfArms;
    startOfWeek: StartOfWeek;
    capitalInfo: CapitalInfo;
    postalCode?: PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side: Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Region {
    Africa = "Africa",
    Asia = "Asia",
}

export interface Currencies {
    BWP?: Aoa;
    SSP?: Aoa;
    XAF?: Aoa;
    LYD?: Aoa;
    EUR?: Aoa;
    SLL?: Aoa;
    ZMW?: Aoa;
    RWF?: Aoa;
    XOF?: Aoa;
    GBP?: Aoa;
    SHP?: Aoa;
    SOS?: Aoa;
    MWK?: Aoa;
    GMD?: Aoa;
    BIF?: Aoa;
    MUR?: Aoa;
    TZS?: Aoa;
    ERN?: Aoa;
    MAD?: Aoa;
    GHS?: Aoa;
    SDG?: Sdg;
    SCR?: Aoa;
    USD?: Aoa;
    TND?: Aoa;
    NAD?: Aoa;
    ZAR?: Aoa;
    MGA?: Aoa;
    MRU?: Aoa;
    SZL?: Aoa;
    MZN?: Aoa;
    LSL?: Aoa;
    ETB?: Aoa;
    STN?: Aoa;
    CDF?: Aoa;
    CVE?: Aoa;
    GNF?: Aoa;
    KMF?: Aoa;
    DJF?: Aoa;
    EGP?: Aoa;
    DZD?: Aoa;
    LRD?: Aoa;
    UGX?: Aoa;
    ZWL?: Aoa;
    AOA?: Aoa;
    KES?: Aoa;
    NGN?: Aoa;
}

export interface Aoa {
    name: string;
    symbol: string;
}

export interface Sdg {
    name: string;
}

export interface Demonyms {
    eng: EngClass;
    fra?: EngClass;
}

export interface EngClass {
    f: string;
    m: string;
}

export interface Idd {
    root: string;
    suffixes: string[];
}

export interface Languages {
    eng?: EngEnum;
    tsn?: string;
    ara?: Ara;
    fra?: Fra;
    por?: string;
    spa?: string;
    kin?: string;
    som?: string;
    nya?: string;
    run?: string;
    mfe?: string;
    swa?: string;
    tir?: string;
    ber?: string;
    crs?: string;
    afr?: string;
    deu?: string;
    her?: string;
    hgm?: string;
    kwn?: string;
    loz?: string;
    ndo?: string;
    mlg?: string;
    ssw?: string;
    sot?: string;
    amh?: string;
    kon?: string;
    lin?: string;
    lua?: string;
    pov?: string;
    sag?: string;
    zdj?: string;
    nbl?: string;
    nso?: string;
    tso?: string;
    ven?: string;
    xho?: string;
    zul?: string;
    mey?: string;
    bwg?: string;
    kck?: string;
    khi?: string;
    ndc?: string;
    nde?: string;
    sna?: string;
    toi?: string;
    zib?: string;
}

export enum Ara {
    Arabic = "Arabic",
}

export enum EngEnum {
    English = "English",
}

export enum Fra {
    French = "French",
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common: string;
}

export interface PostalCode {
    format: string;
    regex: string;
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
}

export enum Subregion {
    EasternAfrica = "Eastern Africa",
    MiddleAfrica = "Middle Africa",
    NorthernAfrica = "Northern Africa",
    SouthernAfrica = "Southern Africa",
    WesternAfrica = "Western Africa",
}




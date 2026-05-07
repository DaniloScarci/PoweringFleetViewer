// 
export enum VehicleHeaders {
    "ID" = "ID",
    "Plate" = "Plate",
    "Maker" = "Maker",
    "Model" = "Model"
}


// Ovviamente qui bisognerebbe creare un Record<Maker, Modello> per poter mappare correttamente i modelli veicoli su base costruttore
export enum VehicleMakers {
    "IVECO" = "IVECO",
    "Mercedes" = "Mercedes",
    "DAF" = "DAF"
}

export enum VehicleModels {
    "Ducato" = "Ducato",
    "XAF" = "XAF",
    "MultiJet 2.0" = "MultiJet 2.0"
}

export type VehicleType = {
    ID: number;
    Plate: string;
    Maker: string;
    Model: string;
}

export type FleetType = {
    ID: number;
    Address: string;
    City: string;
    ZipCode: string;
}

export enum FleetKeys {
    "ID" = "ID",
    "Address" = "Indirizzo",
    "City" = "Città",
    "ZipCode" = "CAP"
}

export enum VehicleKeys {
    "ID" = "ID",
    "Plate" = "Targa",
    "Maker" = "Costruttore",
    "Model" = "Modello"
}

export enum RoutePoints {
    "/" = "/",
    "/fleet" = "Flotte",
    "/vehicle" = "Automezzi"
}
CREATE DATABASE PoweringSRL;

USE DB PoweringSRL;

-- Tabella per la flotta, bastano 10 numeri per un cap? Lo spero vivamente
CREATE TABLE
    IF NOT EXISTS FLEET (
        ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        Address VARCHAR(255) NOT NULL,
        City VARCHAR(255) NOT NULL,
        ZipCode INTEGER (10),
        Deleted TINYINT (1) DEFAULT 0,
    );

-- Tabella per i veicoli, ci sono veicoli con più di 10 caratteri? Bella domanda!
-- Il deleted serve per capire quale veicolo è stato eleminato e farne una soft delete
CREATE TABLE
    VEHICLE (
        ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        Plate VARCHAR(10) NOT NULL,
        Maker VARCHAR(100) NOT NULL,
        Model VARCHAR(100) NOT NULL,
        Deleted TINYINT (1) DEFAULT 0,
    );

-- Tabella di transizione JOIN Flotta & Veicoli per poter separare le future API e richieste
-- Alternativamente, se le informazioni dei veicoli viaggiassero sempre 1:1 con la flotta, allora si potrebbe
-- pensare di aggiungere fleetID come foreign key nella tabella "Vehicle"
CREATE TABLE
    IF NOT EXISTS FleetVehicles (
        FleetID INTEGER NOT NULL,
        VehicleID INTEGER NOT NULL,
        CONSTRAINT fk_fleet FOREIGN KEY (FleetID) REFERENCES Fleet (ID) ON DELETE CASCADE,
        CONSTRAINT fk_vehicle FOREIGN KEY (VehicleID) REFERENCES Vehicle (ID) ON DELETE CASCADE
    )
    -- Da qui parte l'operazione di seeding, valori generati randomicamente con uno script in JS
INSERT INTO
    FLEET (ID, Address, City, ZipCode)
VALUES
    (1, "Via della flotta n.1", "Taranto 1", 74021);

INSERT INTO
    FLEET (ID, Address, City, ZipCode)
VALUES
    (2, "Via della flotta n.2", "Taranto 2", 74121);

INSERT INTO
    FLEET (ID, Address, City, ZipCode)
VALUES
    (3, "Via della flotta n.3", "Taranto 3", 74221);

INSERT INTO
    FLEET (ID, Address, City, ZipCode)
VALUES
    (4, "Via della flotta n.4", "Taranto 4", 74321);

INSERT INTO
    FLEET (ID, Address, City, ZipCode)
VALUES
    (5, "Via della flotta n.5", "Taranto 5", 74421);

INSERT INTO
    FLEET (ID, Address, City, ZipCode)
VALUES
    (6, "Via della flotta n.6", "Taranto 6", 74521);

INSERT INTO
    FLEET (ID, Address, City, ZipCode)
VALUES
    (7, "Via della flotta n.7", "Taranto 7", 74621);

INSERT INTO
    FLEET (ID, Address, City, ZipCode)
VALUES
    (8, "Via della flotta n.8", "Taranto 8", 74721);

INSERT INTO
    FLEET (ID, Address, City, ZipCode)
VALUES
    (9, "Via della flotta n.9", "Taranto 9", 74821);

INSERT INTO
    FLEET (ID, Address, City, ZipCode)
VALUES
    (10, "Via della flotta n.10", "Taranto 10", 74921);

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (1, "XG788GN", "Fiat 1", "Ducato 1");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (2, "RQ863DN", "Fiat 2", "Ducato 2");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (3, "LW553KH", "Fiat 3", "Ducato 3");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (4, "PX724OI", "Fiat 4", "Ducato 4");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (5, "FL192BK", "Fiat 5", "Ducato 5");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (6, "NH103MV", "Fiat 6", "Ducato 6");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (7, "BF786HE", "Fiat 7", "Ducato 7");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (8, "VO575FC", "Fiat 8", "Ducato 8");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (9, "VJ789CT", "Fiat 9", "Ducato 9");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (10, "DQ959CW", "Fiat 10", "Ducato 10");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (11, "MI883XI", "Fiat 11", "Ducato 11");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (12, "JW221FF", "Fiat 12", "Ducato 12");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (13, "GH970VO", "Fiat 13", "Ducato 13");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (14, "IQ985QV", "Fiat 14", "Ducato 14");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (15, "BH339FG", "Fiat 15", "Ducato 15");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (16, "WF322CL", "Fiat 16", "Ducato 16");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (17, "AD361JX", "Fiat 17", "Ducato 17");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (18, "FK556ER", "Fiat 18", "Ducato 18");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (19, "AA415WN", "Fiat 19", "Ducato 19");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (20, "SP691EI", "Fiat 20", "Ducato 20");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (21, "EJ297GA", "Fiat 21", "Ducato 21");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (22, "HB552SO", "Fiat 22", "Ducato 22");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (23, "TA906RE", "Fiat 23", "Ducato 23");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (24, "CW023XN", "Fiat 24", "Ducato 24");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (25, "ED879OB", "Fiat 25", "Ducato 25");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (26, "KQ610PS", "Fiat 26", "Ducato 26");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (27, "FK321XL", "Fiat 27", "Ducato 27");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (28, "RQ392JE", "Fiat 28", "Ducato 28");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (29, "RV480FC", "Fiat 29", "Ducato 29");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (30, "KT695HX", "Fiat 30", "Ducato 30");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (31, "SK660PH", "Fiat 31", "Ducato 31");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (32, "IQ500IE", "Fiat 32", "Ducato 32");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (33, "PF952DL", "Fiat 33", "Ducato 33");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (34, "DF027CQ", "Fiat 34", "Ducato 34");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (35, "IO854WK", "Fiat 35", "Ducato 35");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (36, "LF924WE", "Fiat 36", "Ducato 36");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (37, "UI738PH", "Fiat 37", "Ducato 37");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (38, "QO007QS", "Fiat 38", "Ducato 38");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (39, "TO639VF", "Fiat 39", "Ducato 39");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (40, "MJ266WJ", "Fiat 40", "Ducato 40");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (41, "PC965RP", "Fiat 41", "Ducato 41");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (42, "AI058TF", "Fiat 42", "Ducato 42");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (43, "BN604DO", "Fiat 43", "Ducato 43");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (44, "NN483MF", "Fiat 44", "Ducato 44");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (45, "SP976XP", "Fiat 45", "Ducato 45");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (46, "XQ591KR", "Fiat 46", "Ducato 46");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (47, "SW636RG", "Fiat 47", "Ducato 47");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (48, "WU719AA", "Fiat 48", "Ducato 48");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (49, "GK462QK", "Fiat 49", "Ducato 49");

INSERT INTO
    Vehicle (ID, Plate, Maker, Model)
VALUES
    (50, "KJ451HA", "Fiat 50", "Ducato 50");

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (1, 1);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (9, 2);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (4, 3);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (4, 4);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (9, 5);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (5, 6);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (7, 7);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (8, 8);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (2, 9);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (3, 10);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (7, 11);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (9, 12);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (3, 13);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (5, 14);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (2, 15);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (1, 16);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (5, 17);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (4, 18);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (5, 19);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (6, 20);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (7, 21);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (4, 22);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (4, 23);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (2, 24);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (2, 25);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (8, 26);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (3, 27);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (3, 28);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (9, 29);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (6, 30);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (1, 31);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (5, 32);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (5, 33);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (5, 34);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (9, 35);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (5, 36);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (5, 37);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (8, 38);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (1, 39);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (6, 40);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (1, 41);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (4, 42);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (7, 43);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (4, 44);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (2, 45);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (5, 46);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (1, 47);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (7, 48);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (2, 49);

INSERT INTO
    FleetVehicles (FleetID, VehicleID)
VALUES
    (6, 50);
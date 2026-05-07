import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fleet = Array.from({ length: 10 }, (_, i) => ({
  ID: i + 1,
  Address: `Via della flotta n.${i + 1}`,
  City: `Taranto ${i + 1}`,
  ZipCode: `74${i}21`,
}));

const generateRandomPlate = () => {
  const randomCharArray = Array.from({ length: 90 - 65 }, (_, i) =>
    String.fromCharCode(i + 65),
  );
  const randomStartAndEndLetters = Array.from(
    { length: 4 },
    (_, i) =>
      randomCharArray[parseInt(Math.random() * (randomCharArray.length - 1))],
  );
  return `${randomStartAndEndLetters.slice(0, 2).join("")}${Array.from({ length: 3 }, () => parseInt(Math.random() * 10)).join("")}${randomStartAndEndLetters.slice(2, 4).join("")}`;
};

const vehicles = Array.from(
  new Set(
    Array.from({ length: fleet.length * 5 }, (_, i) => {
      return {
        ID: i + 1,
        Plate: generateRandomPlate(),
        Maker: `Fiat ${i + 1}`,
        Model: `Ducato ${i + 1}`,
      };
    }),
  ),
);


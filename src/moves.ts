import { Type } from "./typeAdvantage";
import * as fs from "fs";

// TODO: create a enum called SpecialMove which (Buff, DebuffAttack, DebuffAccuracy, Heal)
// Check best practices when creating an enum
enum SpecialMove {
  Buff = "Buff",
  DebuffAttack = "DebuffAttack",
  DebuffAccuracy = "DebuffAccuracy",
  Heal = "Heal",
}

// TODO: create an interface called Move which contains the fields: name, attackScore, special, accuracy, type
export interface Move {
  name: string;
  attackScore: number;
  special?: SpecialMove;
  accuracy: number;
  type: Type;
}
// TODO: why should we not use any? Replace the any with the new type create previously
export let moves: Array<Move> = [];
function readCSV(filePath: string) {
  const data = fs
    .readFileSync(filePath, "utf8")
    .split("\n")
    .map((row) => row.split(","));
  const headers = data[0];
  return data.slice(1).map((row) => {
    const typeString: String = row[4];
    const specialMove: String = row[3];
    let rowData: Move = {
      name: row[0],
      attackScore: parseInt(row[1]),
      accuracy: parseInt(row[2]),
      special: SpecialMove[specialMove as SpecialMove],
      type: Type[typeString as Type],
    };
    console.log(rowData);
    return rowData;
  });
}
moves = readCSV("src/Moves - Sheet1.csv");
console.log(moves);

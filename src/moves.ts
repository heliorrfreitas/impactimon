import { Type } from "./typeAdvantage";
import * as fs from "fs";

// TODO: create a enum called SpecialMove which (Buff, DebuffAttack, DebuffAccuracy, Heal)
// Check best practices when creating an enum

// TODO: create an interface called Move which contains the fields: name, attackScore, special, accuracy, type

// TODO: why should we not use any? Replace the any with the new type create previously
export let moves: Array<any> = [];
function readCSV(filePath: string) {
  const data = fs
    .readFileSync(filePath, "utf8")
    .split("\n")
    .map((row) => row.split(","));
  const headers = data[0];
  return data.slice(1).map((row) => {
    const rowData: Array<any> = [];
    headers.forEach((header: string, index) => {
      rowData.push(row[index]);
    });
    return rowData;
  });
}
moves = readCSV("src/Moves - Sheet1.csv");
console.log(moves);

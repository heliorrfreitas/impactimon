import * as readline from "readline";
import { Type } from "./typeAdvantage";
import { randomInt } from "crypto";
import { Move } from "./moves";
import { moves } from "./moves";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

interface Impactimon {
  name: string;
  type: Type;
  hp: number;
  moves: Move[];
}

let playerDamageMultiplyer = 1;
let opponentDamageMultiplyer = 1;
let playerAccuracyMultiplyer = 1;
let opponentAccuracyMultiplyer = 1;
let player;
let opponent;

async function buildImpactimon() {
  // input - name, type
  // hp is generate within a range
  // array of moves is created based on type (type specific attacks + tackle)
  // returns a impactimonObject which constains name, array of moves, hp, type
  console.log("Build your Mon!");
  const name: string = await new Promise((resolve) => {
    rl.question("Name your Impactimon \n", resolve);
  });
  console.log(`You named them: ${name}`);
  rl.pause();
  rl.resume();
  const type = await new Promise((resolve) => {
    rl.question(
      "What type is your Impactimon? Fire, Water, Ground, Grass \n",
      resolve
    );
  });
  console.log(`Their type is: ${type}`);
  rl.pause();

  const impactimon: Impactimon = {
    name,
    type: Type[type as Type],
    hp: randomInt(110) + 70, // effectively 70 - 180
    moves: moves.filter(
      (move) => move.type === type || move.type === Type.Normal
    ),
  };

  console.log(impactimon);
}

function generateRandomNameAndType() {
  let arr = [
    ["Squirtle", Type[Type.Water]],
    ["Charmander", Type[Type.Fire]],
    ["Turtwig", Type[Type.Grass]],
    ["Geodude", Type[Type.Ground]],
  ];
  let pos = randomInt(arr.length);
  console.log("You are fighting: ", arr[pos][0], " of type: ", arr[pos][1]);
  return arr[pos];
}

function generateRandomOpponent() {
  let nameType = generateRandomNameAndType();
}

async function gameRunner() {
  // gameRunner is the main function, it is the orchestrator
  // where is the type in here? Look at implicit typing.
  // menu to choose pokemon
  // start the game
  console.log("Welcome to Impactimon!");
  buildImpactimon().then(async (impactimon) => {
    generateRandomOpponent();
    // while(player.hp > 0 && computer.hp > 0)
    while (true) {
      await runTurn(); // run until someone wins
    }
  });
  // determine who won and display message
  // want to play again? Yes/No
}

async function runTurn() {
  // this will contain the logic of the turn which involves the battle happening
  // input from player
  // input from computer
  // resolve actions - battle function
  // a turn if over when a player and their opponent have selected a move and their moves have been resolved
  // turns happen at the same time.
  rl.resume();
  console.log("Here are your moves...\n");
  const move = await new Promise((resolve) => {
    rl.question("Choose your move [1,2,3,4] \n", resolve);
  });
  rl.pause();
  console.log(`You chose move number: ${move}`);
  battle();
}

function battle() {
  // input - playerMove, opponentMove
  // output
}

function resolveSpecial() {}

gameRunner();

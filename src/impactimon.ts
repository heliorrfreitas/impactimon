import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

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
  const name = await new Promise((resolve) => {
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
}
async function gameRunner() {
  // gameRunner is the main function, it is the orchestrator
  // where is the type in here? Look at implicit typing.
  // menu to choose pokemon
  // start the game
  buildImpactimon().then(async () => {
    // while(player.hp > 0 && computer.hp > 0)
    console.log("Welcome to Impactimon!");
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
}
function battle() {
  // input - playerMove, opponentMove
  // output
}
function resolveSpecial() {}

gameRunner();

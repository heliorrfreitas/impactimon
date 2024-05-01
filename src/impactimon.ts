let playerDamageMultiplyer = 1;
let opponentDamageMultiplyer = 1;
let playerAccuracyMultiplyer = 1;
let opponentAccuracyMultiplyer = 1;
let player;
let opponent;

function buildImpactimon() {
  // input - name, type
  // hp is generate within a range
  // array of moves is created based on type (type specific attacks + tackle)
  // returns a impactimonObject which constains name, array of moves, hp, type
}
function gameRunner() {
  // gameRunner is the main function, it is the orchestrator
  // where is the type in here? Look at implicit typing.
  // menu to choose pokemon
  // start the game
  // while(player.hp > 0 && computer.hp > 0)
  runTurn(); // run until someone wins
  // determine who won and display message
  // want to play again? Yes/No
}
function runTurn() {
  // this will contain the logic of the turn which involves the battle happening
  // input from player
  // input from computer
  // resolve actions - battle function
  // a turn if over when a player and their opponent have selected a move and their moves have been resolved
  // turns happen at the same time.
}
function battle() {
  // input - playerMove, opponentMove
  // output
}
function resolveSpecial() {}

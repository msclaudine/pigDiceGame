function Player(playerName) {
  this.totalScore = 0;
  this.turnScore = 0;
  this.dice = document.getElementById("die-box");
  this.playerName = playerName;
}
Player.prototype.pName = function() {
  this.name1 = $("input#p1input-name").val();
  this.name2 = $("input#p2input-name").val();
};
Player.prototype.rollDice = function() {
  var diceOutput = Math.floor(Math.random() * 6) + 1;
  this.dice.innerHTML = diceOutput;
  if (diceOutput === 1) {
    alert("You lost this turn, switch players!");
    $("#turn-message").text("It's the next player's turn!");
    this.turnScore = 0;
    this.dice.innerHTML = 0;
  } else {
    this.turnScore += diceOutput;
  }
};
Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0; //Resets turnScore value at the end of each turn
  this.dice.innerHTML = 0;
};
Player.prototype.restart = function() {
  this.totalScore = 0;
  this.turnScore = 0;
  this.dice.innerHTML = 0;
};

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//CONSOLE LOG PLAYER VARIABLES

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;





var fight = function(enemyName) {
    // Alert players that they are starting the round
    //window.alert("Welcome to Robot Gladiators!");

    while(playerHealth > 0 && enemyHealth > 0) {
      
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
    console.log(promptFight);
  
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {


    // BEGIN FIGHTING BETWEEN ROBOTS

      enemyHealth = enemyHealth - playerAttack;
      console.log (
          playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );


        //IF ELSE TO DETERMINE ENEMY HEALTH
      if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
          break;
      }
      else {
          window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
        

      playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );


      // check player's health
      if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
      } 
      else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
      } 
      
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you want to quit?");

      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
      }

      else {
        fight();
      }
    
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }

  };

  }

for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
;
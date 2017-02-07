var hit;
var playerDamageRecieved = ;
var damageDealt = ;
var diceRoll = math.random() * 10 + 1;

function enemyAttackAttempt (){
  if(diceRoll >= dexterity){
    hit = true;

  }else{
    hit = false;
  }
  if(hit = true){
  playerDamageRecieved = Math.random() * (player.Level / enemy.Level * 10) + 1;
  playerDamageRecieved = damageRecieved.toFixed();
  player.hp = player.hp - playerDamageRecieved;
  }
  if(player.hp <= 0){
    console.log("Game Over")
  }
}
function playerAttackAttempt (){
  if(diceRoll >= dexterity){
    hit = true;

  }else{
    hit = false;
  }
  if(hit = true){
  enemyDamageRecieved = Math.random() * (enemy.Level / player.Level * 10) + 1;
  enemyDamageRecieved = damageRecieved.toFixed();
  enemy.hp = enemy.hp - enemyDamageRecieved;
  }
  if(enemy.hp <= 0){
    
  }
}

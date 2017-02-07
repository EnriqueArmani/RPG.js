var player{
  name: playerName.value,
  hp: currentHp,
  mp: currentMp,
  stamina: currentStamina,
  level: baseLevel + addedLevel,
  exp: currentExp,
  speed: currentSpeed,
  dexterity: currentDexterity;
};
/*Base Stat Variables*/
var baseHp = 100;
var baseLevel = 1;
var baseMp = 25;
var baseStamina = 15;
var playerName = document.querySelector('#playerName');
var currentHp = baseHp + addedLevelHp - damageRecieved;
var currentMp = baseMp + addedLevelMp - mpUsed;
var currentStamina = baseStamina + addedLevelStamina - staminaUsed;
var currentExp;

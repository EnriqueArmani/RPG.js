var addedLevel = 0;
var baseExp = 75;
var levelExp = [];
var calculatedExp = (baseExp * .10) + baseExp;

/*Generate Experience Needed for each Level */
function leveling(){
var dataSet = (calculatedExp * .10) + calculatedExp;

for(i = 0; i <= 100; i++){
 var dataSet = (dataSet * .10) + dataSet;

levelExp.push(dataSet);

}
for(i = 0; i <= levelExp.length; i++){
 levelExp[i] = levelExp[i].toFixed();
}
for(1 = 0; i<= levelExp.length; i++){
  if(currentExp == levelExp[i]){
    addedLevel + 1;
  }
}
 console.log(levelExp);
}

leveling()

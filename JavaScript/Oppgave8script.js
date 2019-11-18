

var terninger = [];


var count2 = 0;
while(true){
  count2 += 1;
  var randomNumber = 0;
  terninger = [];
  for(let i = 0; i<6; i++){
    randomNumber = Math.floor(Math.random()*6) + 1;
    terninger.push(randomNumber);
  }
  console.log(terninger);
  var count = 0;
  for(terning of terninger){
    if(terning === terninger[0]){
      count += 1;
    }
  }
  if(count === 6){
    console.log("Yahtzee!!!");
    console.log(count2);
    break;
  }



}

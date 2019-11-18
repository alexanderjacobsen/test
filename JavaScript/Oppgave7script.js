
//Definerer variabler
var tilfeldigeTallArray = [];
var antallSeksere = 0;
var storreEnn50 = 0;


//For løkke som kjører 1000 ganger og genererer et tilfeldig tall for hver gang.
for(let i = 0; i<1000; i++){
  tilfeldigTall = Math.floor(Math.random()*101);
  tilfeldigeTallArray.push(tilfeldigTall);
  //Sjekker om det tilfeldige tallet er 6, og hvis det er det øker den antallSeksere med en.
  if(tilfeldigTall === 6){
    antallSeksere += 1;
  }
  //Sjekker om tallet er større eller lik 50, og hvis det er det øker den storreEnn50 med en
  if(tilfeldigTall >= 50){
    storreEnn50 += 1;
  }
}
//Utregner prosent av storreEnn50 og printer ut alle verdiene gjennom document.write
var prosent = (storreEnn50 / 1000)*100;
document.write("Antall seksere er: " + antallSeksere.toString() + "<br><br>");
document.write("Antall tall større eller lik 50 er: " + storreEnn50.toString() + "<br>");
document.write("Prosentvis er dette " + prosent.toString() + "% av alle tallene");

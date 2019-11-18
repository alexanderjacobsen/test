
//Definering av variabler
var sporsmal = ["Hvor mange mennesker bor i verden?", "Hvor mange centimeter er det i en meter", "Hva betyr dutch oven",
                "Hvorfor er Jo Bjørnar verdens beste lærer?"];
var sporsmalsTekst;
var tilfeldigSporsmalIndeks = 0;


//Funksjon som genererer et tilfeldig tall mellom 0 og lengden av arrayen.
//Vanligvis legger man til +1 når man bruker Math.floor(), men det trenger man ikke her siden array-indexen begynner på 0
//Deretter henter den ut spørsmålet som stemmer overens med indeksen og printer ut til sporsmalsTekst gjennom getElementById

function tilfeldigSporsmal(){
  var tilfeldigSporsmal = "";
  tilfeldigSporsmalIndeks = Math.floor(Math.random()*sporsmal.length);
  sporsmalsTekst = document.getElementById("sporsmalsTekst");
  tilfeldigSporsmal = sporsmal[tilfeldigSporsmalIndeks];
  sporsmalsTekst.innerHTML = tilfeldigSporsmal;
}
//Noen ganger velger funksjonen et spørsmål som allerede finnes i teksten.
//Da kan det se ut som at den ikke endrer seg.

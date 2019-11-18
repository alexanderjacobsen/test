

//Definerer variablene
var totalPris = 857;
var studentRabatt = 0.25;
var tips = 0.10;

//Utregning av ny pris og printer ut
var nyPris = (1-studentRabatt)*totalPris + tips*totalPris;
console.log("Den nye totale prisen er " + nyPris.toFixed(2).toString());

//Spør brukeren om antall personer
var personer = prompt("Skriv inn antall personer");

//Sjekker om det som er skrevet inn ikke er et tall.
//Hvis true skriver den en errormelding, hvis false skriver den ut pris per person og antall personer
if(isNaN(personer)){
  console.log("Det du skrev inn er ikke et tall");
}else{
  var prisPerPers = nyPris / Number(personer);
  console.log("Prisen per person er: " + prisPerPers.toFixed(2).toString());
  console.log("Antall personer er: " + personer.toString());
}

//Deklarering av variabler
var pris = 0;
var totalSum = 0;
var rabatt12til16 = 0.5;
var rabattOver65 = 0.7;
var alder = 0;
var rabattProsent = "";


//Funksjon som sjekker rabatt for alder og regner ut totalsum for hver av aldrene
function prisTilAlder(alder){
  if(alder<2){
    totalSum = 0;
    rabattProsent = "100%";
  }
  if(alder>=2 && alder<16){
    totalSum = pris*(1-rabatt12til16);
    rabattProsent = "-" + (rabatt12til16*100).toString() + "%";
  }
  if(alder>=16 && alder<65){
    totalSum = pris;
    rabattProsent = "-0%";
  }
  if(alder>=65){
    totalSum = pris*(1-rabattOver65);
    rabattProsent = "-" + (rabattOver65*100).toString() + "%";
  }
}
//Funksjon som printer ut verdiene som er utregnet
function printAlderOgPris(){

  document.write("<br><br> Standard pris er: " + pris.toString());
  document.write("<br><br> Din rabatt er på: " + rabattProsent);
  document.write("<br><br> Prisen du må betale er: " + totalSum.toFixed(2).toString() + " kroner");
  document.write("<br><br> Din alder er: " + alder.toString() + " år");
}
//Funksjon som kjører en prompt for alder og sjekker om det ikke er et tall
//Hvis true skriver den en errormelding, hvis false kjører den funksjoner som sjekker rabatt og pris for alderen og printer ut
function promptAlder(){
  alder = prompt("Hva er din alder?");
  if(isNaN(alder)){
    document.write("Det du skrev inn er ikke et tall");
  }else{
    prisTilAlder(Number(alder));
    printAlderOgPris();
  }
}
//Funksjoner som kjører når knappene blir trykket på. Gir prisen for den gitte ruten, og kjører funksjonen som sjekker alderen.
function byTilSjo(){
  pris = 150;
  promptAlder();
}
function sjoTilFjell(){
  pris = 250;
  promptAlder();
}
function fjellTilBy(){
  pris = 50;
  promptAlder();
}

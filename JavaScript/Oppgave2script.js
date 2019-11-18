

//Definering av variabler
var fornavn = prompt("Skriv inn ditt fornavn");
var etternavn = prompt("Skriv inn ditt etternavn");
var domene = "bedrift.no"

//Setter sammen til en adresse
var adresse1 = fornavn + "." + etternavn + "@" + domene;
var adresse2 = etternavn + "." + fornavn + "@" + domene;

//Fjerner mellomrom og gjør store bokstaver til små
adresse1 = adresse1.split(" ").join("");
adresse2 = adresse2.split(" ").join("");

//Skriver til dokumentet
var ferdigAdresse1 = "Et eksempel kan være: " + adresse1.toLowerCase() + "<br><br>";
var ferdigAdresse2 = "Et eksempel kan også være: " + adresse2.toLowerCase();
document.write(ferdigAdresse1);
document.write(ferdigAdresse2);


//Fikk ikke tid til å sjekke om prompt-verdien er null, altså tom.

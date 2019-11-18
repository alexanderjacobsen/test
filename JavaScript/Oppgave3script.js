

/*Oppg. a)
var gate = "Kongens gate";
var husnr = 432;
var oppgang = b; <- b må ha hermetegn siden det er ingen variabel som heter b
var adresse = gate + husnr + oppgang; <- husnr må gjøres om til en string
console.log(adresse);
Her er den rettet på:
*/

var gate = "Kongens gate";
var husnr = 432;
var oppgang = "b";
var adresse = gate + husnr.toString() + oppgang;
console.log(adresse);
//Kunne også lagt til mellomrom, men det spør ikke oppgaven om

//Oppg. b)
var husnrString = husnr.toString()
var adresseTekst1 = "Adressen er " + gate + " " + husnrString + oppgang;
var adresseTekst2 = "Gaten er " + gate + ", husnummeret er " + husnrString + ", oppgang " + oppgang;
console.log(adresseTekst1);
console.log(adresseTekst2);

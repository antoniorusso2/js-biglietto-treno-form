// TODO -
/**
 * Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 */

//form per inserimento km da percorrere ed eta' del paseggero
//km da percorrere
//eta' passeggero

//calcolo del prezzo del biglietto
//prezzo basato sui km
//km * 0.21 ;

//sconto:
//SE eta' < 18 = 20%
//SE eta' > 65 = 40%
//ALTRIMENTI prezzo al km

//output prezzo del biglietto con dati forniti dal prompt


// let userAge = parseFloat(prompt('Benvenuto/a, per il calcolo del preventivo inserisci qui di sotto l\'eta\'del passeggero')); //number - trasferire come dato ricevuto dal form
// // console.log(typeof userAge); //number
// console.log(userAge);

// //richiesta numero km da percorrere
// //prompt richiesta distanza espressa in km
// let tripDistance = parseFloat(prompt('Inserisci adesso la distanza del viaggio in KM')); //number
// //console.log(typeof tripDistance); //number
// console.log(tripDistance);

const outputPrice = getFinalPrice(tripDistance, userAge);
console.log(userPrice);

//funzione calcolo sconto
function getFinalPrice(km, age) {
  //PREZZO BASE
  //prezzo totale per la distanza da percorrere calcolato in base alle info fornite dal cliente:
  // 1. 1km = 0.21€ ;
  let kmPrice = (km * 0.21);
  console.log(`Il prezzo basato sulla distanza per questo biglietto è di ${kmPrice} €`);
  //console.log(typeof kmPrice) //number
  // console.log(typeof kmPrice) 

  //SCONTI DA APPLICARE  
  let discount = 0;

  // 1. se eta' < 18 = 20% di sconto
  // 2. se eta' > di 65 = 40% di sconto
  // 3. prezzo base in base ai km
  if (age < 18) {
    discount = kmPrice * 20 / 100; //number
  } else if (age > 65) {
    discount = kmPrice * 40 / 100; // number 
  }
  else {
    discount = 0;
  }

  let finalPrice = parseFloat((kmPrice - discount).toFixed(2)); //number
  // console.log(finalPrice);
  return finalPrice;
}


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
// debugger;

//!!!DOM data
//form 
const form = document.getElementById('price-form');
console.log(form);

//parte di file html contenente l'id #user-age
const ageInput = document.getElementById('user-age');
console.log(ageInput);

//parte di file html contenente l'id #trip-km 
const kmDistanceInput = document.getElementById('trip-km');
console.log(kmDistanceInput);

//ricerca pulsante submit
const submitBtn = document.getElementById('submit-btn');
console.log(submitBtn);

//ricerca spazio dedicato al messaggio da inviare all'utente
const message = document.getElementById('message');
console.log(message);
//event listener per bloccare il normale comportamento di submit ed eseguire calcolo prezzo finale con banner per utente

form.addEventListener('submit', function (event) {
  event.preventDefault();

  //memorizzo l'eta' inserita dall'utente in una nuova variabile
  const userAge = parseInt(Math.round(ageInput.value));
  console.log(userAge);


  //km inseriti dall'utente
  const userKm = parseFloat(Math.round(kmDistanceInput.value));
  console.log(userKm);

  const outputPrice = getFinalPrice(userKm, userAge);
  console.log(outputPrice);

  ageInput.value = '';
  kmDistanceInput.value = '';

  //banner utente gia' posizionato in pagina ma vuoto
  message.innerText = `Il prezzo per il biglietto è pari a ${outputPrice} €`;
  // console.log('ciao');
  // console.log(userAge, userKm);
});



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
    console.log(`sconto 20% = ${discount}`);
  } else if (age > 65) {
    discount = kmPrice * 40 / 100; // number 
    console.log(`sconto 40% = ${discount}`);
  }
  else {
    discount = 0;
  }

  let finalPrice = parseFloat((kmPrice - discount).toFixed(2)); //number
  // console.log(finalPrice);
  return finalPrice;
}


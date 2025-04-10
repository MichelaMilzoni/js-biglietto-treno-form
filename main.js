// ? Descrizione:

// ? Scrivere un programma che chieda all’utente:
// ? Il numero di chilometri da percorrere
// ? Età del passeggero

// ? Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, 
// ? secondo le seguenti regole:
// ? - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// ? - va applicato uno sconto del 20% per i minorenni
// ? - va applicato uno sconto del 40% per gli over 65.

// ? MILESTONE 1:
// ? Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone
// ?  (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) 
// ?  sarà anch’essa da scrivere in console.

// ? MILESTONE 2:
// ? Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo 
// ? un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
// ? Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
// ? (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
// ? Questo richiederà un minimo di ricerca.

// ? MILESTONE 3:
// ? Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, 
// ? raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
// ? ------------------------------------------------------------------------------

// INIZIO ESERCIZIO 

// * creo una variabile per conservare i dati inseriti dall'utente
// * e creare una card direttamente da javascript
const userData = {};

// * FUNZIONE PER BOTTONE CANCELLA DATI
document.getElementById('button-cancel').addEventListener('click', function(cancel) {
    document.querySelector('.input-name').value = "";
    document.querySelector('.input-surname').value = "";
    document.getElementById('input-km').value = "";
    document.getElementById('inputAge').value = "Choose...";
    console.log("Campi di input resettati");
    });


    // * FUNZIONE PER BOTTONE CONFERMA DATI 
document.getElementById('button-confirms').addEventListener("click", function (confirm) {
//! document.getElementById: selezionare un elemento HTML in una pagina utilizzando il suo attributo ID
//! addEventListener:        ascolta un evento 
//! change:                  si verifica quando il valore di un input, 
//!                          come un campo di testo o un menu a tendina, viene modificato.
//! calculatePrice:          nome della funzione che verrà eseguita quando si verifica 
//!                          l'evento "change".
// ? ogni volta che viene cambiato il valore del <select>, la funzione calculatePrice viene chiamata

    // - DICHIARO LE VARIABILI "IMPORTANDO" ID E CLASSI DA HTML - 
    // * VALORI NUMERICI VARIABILI - INSERITI DALL'UTENTE
    userData.kilometers = parseInt(document.getElementById('input-km').value);
    userData.age = document.getElementById('inputAge').value;
    // * VALORI TEXT - INSERITI DALL'UTENTE
    userData.name = document.querySelector('.input-name').value.trim();
    userData.surname = document.querySelector('.input-surname').value.trim();
//! document.querySelector:  cerca e restituisce il primo elemento HTML che corrisponde 
//!                          al selettore CSS specificato.
//!                          Se non trova nessun elemento corrispondente, restituisce null
//! #input-km input:         Cerco un elemento input contenuto all'interno dell'ID input-km
//! document.getElementById: selezionare un elemento HTML in una pagina utilizzando il suo attributo ID

    // * VALORI NUMERICI COSTANTI - DEFAULT O CALCOLATI DAL PROGRAMMA
    const pricePerKm = 0.21;
    const discount20 = 0.80; // ? sconto del 20 (80% di totalPrice 80/100-forma decimale)
    const discount40 = 0.60; // ? sconto del 40 (60% di totalPrice 60/100-forma decimale)
    let discountPerc = 0;
    let discountAmount = 0;
    let totalPrice = userData.kilometers * pricePerKm;

    // * CICLO IF PER EFFETTUARE IL CALCOLO OGNI VOLTA CHE VIENE MODIFICATO UN INPUT
    if (userData.age === "minorenne") {
        discountPerc = 20;
        discountAmount = totalPrice * (discountPerc / 100);
        totalPrice -= discountAmount; 
    } else if (userData.age === "over65") {
        discountPerc = 40;
        discountAmount = totalPrice * (discountPerc / 100);
        totalPrice -= discountAmount; 
    }

    // - SOVRASCRIVO userData CON I DATI UTENTE PER LA CARD -
        userData.inputName || "N/D", 
        userData.inputSurname || "N/D",
        userData.kilometers || "N/D",
        userData.ageGroup || "N/D",
//! uso N/D dopo OR Logico: se valore inputName non è valido 
//! (null, undefined, "vuoto", 0 o false),
//! allora uso valore dopo || 
//! N/D = in questo caso NON DISPONIBILE
        totalPrice.toFixed(2),
        discountPerc || 0,
        discountAmount.toFixed(2),

        console.log("Dati utente salvati:", userData);

        // * aggiorno dati della card
        document.getElementById('card-name').textContent = userData.name || "N/D";
        document.getElementById('card-surname').textContent = userData.surname || "N/D";
        document.getElementById('card-km').textContent = userData.kilometers ? `${userData.kilometers} km` : "N/D";
        document.getElementById('card-price').textContent = `€${totalPrice.toFixed(2)}`;
 
        // Rimuovi la classe d-none per mostrare la card
        const cardContainer = document.getElementById('card-container');
        cardContainer.classList.remove('d-none');
});


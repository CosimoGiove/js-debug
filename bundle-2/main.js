/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
// checkAge();
console.log(checkAge())
/*
questo codice è una funzione che ci  vuole dire se la mia  età è minore di 18 anni stampa un messaggio sei troppo giovane
altrimenti se l' età  è maggiore di 18 anni  ci indica che  hai  piu  di 18 anni,
in questo codice, noto che manca il return di message, in questo caso  bisogna inserire il return dopo l'if  ma all'interno
della funzione.
ovviamente bisogna salvare in una variabile il nome della mia funzione per poterla invocare.
noto che c'è  una  variabile const che deve essere sostituita assolutamente con let perche  stiamo riassegnando 
a message un altro valore.
volendo possiamo  anche passare gli argomenti come età senza utilizzare la costante myAge.
per renderla riutilizzabile. 
 ESEMPIO : 
 function checkAge(eta) {
    let message = '';      

    if (eta < 18) {
        message = `Sei troppo giovane! Hai ${eta} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message
}
const etaNew = checkAge(10);
console.log(etaNew)

*/


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

/*

questa funzione ci indica un array di colori, e un console.log dove ci indica la lista di colori che contiene 
quell 'array...
ma ha un errore di sintassi non può essere colors.lenght.
quindi la sintassi corretta è : 

function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

*/



// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

/* 
 questa funzione ci fa la somma di un numero preso da un input in questo caso da un prompt dove l'utente 
 inserisce un numero, e il totale deve essere dato dalla somma dell'input dell 'utente più 12;
 in qeusto  caso ci sono degli errori di logica ma anche di sintassi perchè bisogna prima trasformare il prompt
 da string a number quindi si potrebbe tranquillamente inserire prima del prompt Number.
 bisogna sostituire la const di entrambi le variabili con let altrimenti ci darà errore in console.
 -un altro errore che ho evidenziato  è che non bisogna utilizzare solo il + quando facciamo il totale perchè
 non ci farà la somma, ma bisogna inserire un +=
 esercizio corretto :

 function addNumbers() {
    let userNumber = Number(prompt('Inserisci un numero'));
    let total = userNumber += 12;

    console.log(`Il risultato finale è ${total}`);
}
 const numero = addNumbers();
console.log(numero)

*/


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

/*
questa funzione ha un array di email già esistenti nel database e attraverso un prompt chiedo all'utente di inserire 
un email se l'email è già presente nel database  l'accesso è consetito altrimenti, l'accesso  gli sarà negato,
a livello di struttura il codice è stato scritto in maniera corretta ma ci sono dei dettagli che non faranno 
eseguire il codice nella maniera più corretta
a let garantAccess  il valore booleano non deve essere scritto  tra apici.
esercizio corretto :

function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
 const accesso =checkAccess();
 console.log(accesso)

*/


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }
        }
   if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}
    checkAccessImproved();

/* 
questa funzione ci da un array di email da verificare, l'utente attraverso un prompt inserirsce un email, 
se l 'email è presente nell array l'accesso è consentito altrimenti è negato.
l'esercizio ci dice che ha un solo errore ma non è vero,
 ci sono  3 errori,
 1) manca una parentesi di fine funzione.
 2) il secondo if else non deve stare all'interno del ciclo for altrimenti ci dirà per N volte accesso consentito 
 o negato,
 in quessto caso bisogna spostare  le istruzioni condizionali fuori il ciclo for.
 3) i valori booleani non devono essere scritte con gli apici ma senza.
 esercizio  corretto :

 function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');
    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;

            }
        }
    }
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();

*/    



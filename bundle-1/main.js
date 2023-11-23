/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

/*

1. questo codice rappresenta un ciclo for,  in cui nell'esempio viene dichiarata una variabile contatore,
"i", ma sono prensenti degli errori, nella condizione ( i > 5 ).
la condizione corretta è la seguente:  for ( let i = 0; i < 5 ; i++);
il ciclo viene eseguito  fino al numero 4  quindi da 0 a 4.

*/




// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

/* 
- questo codice è una funzione, serve a semplificare il nostro codice  e per poterlo riutilizzare in altre parti
di codice quando dobbiamo ripetere la stessa cosa.
in questo esempio noto un errore   nella condizione di if , num % 2 NON DEVE ESSERE =  0 perchè non gli devo assegnare
il valore 0 ma devo confrontarlo, quindi nella maniera più corretta  è :
NUM %2 === 0.
affinchè questa funzione può funzionare  bisogna salvarla  in una variabile, al di fuori della funziona.
richiamando  il nome della funziona.
 esempio : const numero = addIfEven (),
 all'interno delle parentesi possiamo inserire qualsiasi valore.

 */



// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

/*

- questo codice è una funzione come l 'esercizio numero 2;  qui ci sono degli ORRORI  :) ;
nel ciclo for  non bisogna  inserire la (,) ma separare la dichiarazione del contatore, la condizione,
l'incremento da un punto  e virgola, 
- se non invochiamo la funzione  il console.log non funzionerà mai,
- salviamo in una variabile la nostra funzione,  e una volta invocata, possiamo vedere a schermo il nostro ciclo for
dove ci va a ciclare i numeri da 0 a 4.

function loopToFive() {
    for (let i = 0; i < 5 ; i++){
        console.log(i);
    }
}
const loop = loopToFive()

*/



// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/*
- questo codice rappresenta una funziona dove all'inerno  vengono dichiarate due variabili array di cui uno,
con dei numeri e un altro array vuoto.
- non è sbagliato assegnarli un valore let agli array ma è buona prassi utilizzare il const.
inoltre  all'interno del ciclo for vedo un errore di  sintassi  legata al  punto e virgola presente dopo  l'incremento.
-  inoltre vi è un altro errore di sintassi, nella dichiarazione della condizione all'interno del for;
(numbers.length -1),  deve essere (number.lenght) questo perchè se facciamo un console.log al ciclo for di,
numbers[i] ci accorgiamo che i numeri ciclati vanno da 0 a 7 mentre senza il - 1 possiamo ciclare i numeri da 0 a 8.
-un altro errore che ho evidenziato è la condizione all'interno del if non può MAI essere una conzione di assegnazione
 tra numbers[i] che è uguale a 0, perchè cosi gli sto dicendo che gli assegno a numbers [i] uguale a 0 ma devo inserire 
  3 uguali.
  - per potere fuznionare  if devo cambiare numbers  in  numbers[i], perchè devo prendere il valore del mio array
  e non l 'array come contenitore.
  - quando facciamo il push  non possiamo inserire solo  la (i) ma dobbiamo specificare prima, la variabile
  number e poi (i),
  - il return deve essere posizionato al di fuori del ciclo for ma all'interno della funzione.
ESERCIZIO AGGIORNATO : 

function displayEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const evenNumbers = []

    for (let i = 0; i < numbers.length; i++) {


        if (numbers[i] % 2 === 0) {
            console.log(numbers[i])
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers

} // dovrebbe restituire [2,4,6,8]
const display = displayEvenNumbers()
console.log(display);
 
se ora mandiamo a schermo possiamo visualizzare  l array [2,4,6,8];

*/

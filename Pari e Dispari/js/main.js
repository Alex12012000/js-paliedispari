// Chiedo all'utente pari o dispari e dopo porto tutto in lowercase per evitare errori
const evenOddInput = prompt('Scegli pari o dispari!');
let userChoice = evenOddInput.toLowerCase();
// Chiedo all'utente un numero da 1 a 5
const evenOddUserNmber = parseInt(prompt('Scegli un numero da 1 a 5'));
// Variabile che racchiude ai il numero random generato dalla funzione (numero che userà il computer per giocare contro l'utente)
const aiResult = aiEvenOdd(1, 5)
// Risultato fra il numero dell'utente e quello del computer
const finalResult = evenOddUserNmber + aiResult;

console.log(evenOddUserNmber)
console.log(aiResult)
console.log(finalResult);

// Se l'utente ha scelto pari e il risultato finale è divisibile per 2, l'utente vince
// Se l'utente ha scelto dispari e il risultato finale non è divisibile per 2, l'utente vince
// Altrimenti l'utente perde
if(userChoice === 'pari' && finalResult % 2 === 0) {
    alert('Pari! Hai Vinto');
} else if (userChoice === 'dispari' && finalResult % 2 !== 0) {
    alert('Dispari! Hai Vinto!');
} else {
    alert('Hai perso!')
}

// Funzione che calcola un numero casuale per il computer
function aiEvenOdd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

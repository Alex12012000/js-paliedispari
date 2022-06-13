// Array con parole palindrome
const palindromeArray = ['otto', 'anna'];
// Chiedo all'utente di dirmi una parola
const userName = prompt('dammi un nome');

// Se la parola inserita dall'utente è palindroma (booleano = true) la inserisco nell'array delle parole palindrome
if (palindrome(userName)) {
    // se è palindroma push
    palindromeArray.push(userName);
} else {
    // altrimenti alert
    alert('Non è una parola palindroma!');
}

// Console log dell'array finale
console.log(palindromeArray);




// Funzione che verifica se la parola inserita dall'utente sia una parola palindroma
function palindrome(name) {

    // Booleano
    let paliBool = false;
    // Variabili al di fuori dal ciclo for a cui assegnare le lettere in ordine di lettura e nel verso opposto
    // cosi da poterle riutilizzare successivamente 
    let reverseLetters;
    let straightLetters;

    // Leggo la parola inserita dall'utente nel verso opposto
    for(let i = userName.length - 1; i >= 0; i--) {
        reverseLetters = userName[i];
    } 

    // Leggo la parola inserita dall'utente nel verso giusto
    for(let i = 0; i < userName.length; i++) {
        straightLetters = userName[i]
    }

    // Se la parola inserita dall'utente è uguale sia letta al contrario che normalmente
    // la parola è palindroma quindi ritrona un booleano true
    if (letters === reverseLetters) {
        paliBool = true;
    }

    // Ritorno un booleano
    return paliBool;
}





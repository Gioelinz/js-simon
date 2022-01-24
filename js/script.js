/* Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero */

const getRndNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let memoryNumber = [];
const attempsNumber = 5;


// | Controllo per numeri non doppioni
while (memoryNumber.length < attempsNumber) {
    const generateNum = getRndNum(1, 50)
    if (!memoryNumber.includes(generateNum)) memoryNumber.push(generateNum);
}
// | Genera numeri da ricordare sull alert 
const showRndNums = alert(
    `Ricorda questi numeri:
${memoryNumber}`);

// | inizializzo gioco/funzione

let countCorrect = 0;
let correctNumbers = [];
const memoryGame = () => {
    for (let i = 0; i < attempsNumber; i++) {
        let userChoice = attempsNumber[i];
        userChoice = parseInt(prompt("Inserisci un numero").trim());
        if (isNaN(userChoice) || userChoice <= 0) {
            alert("Non hai inserito un numero valido");
            userChoice = parseInt(prompt("Inserisci un numero corretto (altrimenti perdi una possibilità)").trim());
        } else if (memoryNumber.includes(userChoice)) {
            correctNumbers.push(userChoice);
            countCorrect++;
        }
    }
    const finalResult = alert(`Hai indovinato ${countCorrect} Numeri
Sono: ${correctNumbers}`);
    return finalResult;
}

setTimeout(memoryGame, 30000);

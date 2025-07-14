/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.ù
function contavocali(stringa){

  const vocali = ['a','e','i','0','u'];
  let count = 0;

  for(let i=0; i<stringa.length; i++){
    if(vocali.includes(stringa[i])){
      count++;
    }
  }
  return count
}



// Invoca la funzione qui e stampa il risultato in console

count.log(contavocali(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
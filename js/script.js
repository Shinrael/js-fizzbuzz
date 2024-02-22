// Tramite FOR genero numeri da 1 a 100


for(let i = 1; i <= 100; i++){
  let word = i;

  // Vicino ai multipli di 3 metto la parola Fizz

  if(i % 3 === 0){
    word += 'fizz'
  }
  

  // Vicino ai multipli di 5 metto la parola Buzz

  if(i % 5 === 0){
    word += 'buzz'
  }
  console.log (word);

}


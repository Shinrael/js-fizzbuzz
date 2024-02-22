// Tramite FOR genero numeri da 1 a 100

const boxQ = document.getElementById('box-q');
let write = '';

for(let i = 1; i <= 100; i++){
  let word = i;
  boxQ.innerHTML = write;

  // Dentro i multipli di 3 e 5 metto la parola FizzBuzz
 
  if ((i % 3 === 0) && (i % 5 === 0)) {

    write += '<div class="box orange">FizzBuzz</div>';

    // Dentro i multipli di 3 metto Fizz

  } else if (i % 3 === 0) {

    write += '<div class="box yellow">Fizz</div>';

    // Dentro i multipli di 5 metto Buzz
  } else if (i % 5 === 0) {

    write += '<div class="box lightblue">Buzz</div>';

    // Altrimenti utilizzo i numeri
  } else {

    write += `<div class="box">${word}</div>`;
  }
}


// Tramite FOR genero numeri da 1 a 100

const boxQ = document.getElementById('box-q');

for(let i = 1; i <= 100; i++){
  let word = i;
 
  // Vicino ai multipli di 3 metto la parola Fizz

  if(i % 3 === 0){
    boxQ.innerHTML += `
    <div class="box">${'Fizz'}</div>
  `  
  // Vicino ai multipli di 5 metto la parola Buzz
  
  }else if(i % 5 === 0){
    boxQ.innerHTML += `
    <div class="box">${'Buzz'}</div>
  `  
  } else {
    boxQ.innerHTML += `
    <div class="box">${word}</div>
  `  
  }
  

  

  
  

}


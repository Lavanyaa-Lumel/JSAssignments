let name = 'Lavanyaa';
let nameLength = name.length;
let randomNumber = Math.random()*nameLength;
let value = name.charAt(Math.floor(randomNumber));
console.log(value +' at '+randomNumber +' position ');
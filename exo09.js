import readlineSync from 'readline-sync';
const nom_magasin = readlineSync.question('Quel est le nom du magasin ? ');

console.log(`Grand jeu FizzBuzz ! Nombres de 1 à 151 :`);
let nombre = 0;
let nombre_cible = 151;

while (nombre<nombre_cible) {
        nombre++ ;
    if ((nombre % 3 === 0) && (nombre % 5 === 0)) { 
        function fizzbuzz(nombre) { //Multiple de 3 et 5
            console.log(`FizzBuzz!`);
        }
        fizzbuzz(nombre);

        } else if (nombre % 3 === 0) {
        function fizz(nombre) { //Multiple de 3
            console.log(`Fizz!`);
        }
        fizz(nombre);

        } else if (nombre % 5 === 0) {
        function buzz(nombre) { //Multiple de 5
            console.log(`Buzz!`);
        }
        buzz(nombre);
        } else {
        console.log(nombre);
        }
    }
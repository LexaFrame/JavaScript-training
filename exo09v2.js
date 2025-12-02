import readlineSync from 'readline-sync';
const nom_magasin = readlineSync.question('Quel est le nom du magasin ? ');

console.log(`Grand jeu FizzBuzz ! Nombres de 1 à 151 :`);
let nombre = 0;
let nombre_cible = 151;
let multiple3 = 3;
let multiple5 = 5;

while (nombre<nombre_cible) {
        nombre++ ;

    } if (nombre % 3 === 0) && (nombre % 5 === 0) {
        function fizzbuzz(nombre, multiple3, multiple5) { //Multiple de 3 et 5
            return (nombre % multiple3 === 0) && (nombre % multiple5 === 0)
        }      
        console.log(`Le nombre ${nombre} est un multiple de 3 et 5 : FizzBuzz!`);
        nombre = fizzbuzz(nombre, multiple3, multiple5);
        // 
    } else if (nombre % 3 === 0) {
        function fizz(nombre, multiple3) { //Multiple de 3
            return nombre===(nombre % multiple3)
    }
        nombre = fizz(nombre, multiple3);
        console.log(`Le nombre ${nombre} est un multiple de 3 : Fizz!`);
    } else if ()

        function buzz(nombre, multiple5) { //Multiple de 5
            return nombre===(nombre % multiple3)
    }
        nombre = buzz(nombre, multiple3);
        console.log(`Le nombre ${nombre} est un multiple de 5 : Buzz!`);

    else (nombre % 2 !== 0) {
    console.log(nombre);
}
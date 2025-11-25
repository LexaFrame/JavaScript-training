// /* Ici un commentaire multiligne  comme en CSS */
// //Un commentaire sur une ligne en JS

// console.log("Hello world !");
// console.log('Salut tout le monde !!! je \"suis\" d accord');

// // Variables
// var nom = "Toto";

// // Array
// let names = ["Riri", "Fifi", "Loulou"];

// console.log(nom);

// console.log("Salut " + nom);
// console.log("Salut " + names[0]);

// nom = "Tutu";
// console.log(nom);

// const lastName = "Truc";

// console.log(lastName);

// // lastName = "Muche"; // Erreur car on n'assigne pas une valeur à une constante

// let age = 18; // type number
// age = "18"; // type string (chaîne de caractères)
// age = "18" + 1 ; // Attention "18" est une chaîne de caractères

// console.log(typeof age);

// let age = 18 + 4 ;
// let age = 18 / 3 ;
// console.log(age)

// console.log(5 > 2);
// Test à faire : Si âge supérieur à 18 ans, il a le droit de conduire 'tu as le droit de conduire', s'il a 18 ans pile, message 'joyeux anniversaire', sinon message "pas de bras, pas de chocolat"

// let age = "Bob"; //type number
// if (age > 18) {
//   console.log("Tu as le droit de conduire");
// } else if (age === 18) {
//   console.log("Joyeux anniversaire");
// } else {
//   console.log("Pas de bras, pas de chocolat");
// }

let age = "Bob";
console.log(typeof age);

if (typeof age !== "number") {
    console.log (age + " n'est pas un nombre");
    if (age>18) {
        console.log("Tu as le droit de conduire");
    }
    else if (age === 18) {
        console.log("Joyeux anniversaire");
    }
    else {
        console.log("Pas de bras, pas de chocolat");
    }
}
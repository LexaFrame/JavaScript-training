import readlineSync from 'readline-sync';
const nom_magasin = readlineSync.question('Quel est le nom du magasin ? ');

let produits = ["manette", "console", "accessoire", "jeu", "memcard"];

produits.push("console d'occasion", "jeu d'occasion") ;
produits.shift();
produits.forEach(function(listeproduits) {
    console.log(listeproduits);
})
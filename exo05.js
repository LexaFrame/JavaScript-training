import readlineSync from 'readline-sync';
const nom_magasin = readlineSync.question('Quel est le nom du magasin ? ');

let stock_jeux = 0;
let stock_cible = 100;
let jeux_par_livraison = 5;
let nombre_livraisons = 0;
console.log("Combien de jeux " + nom_magasin + " a-t-il en stock aujourd'hui ?");
console.log("Son stock de jeux est de : " + stock_jeux + " jeux.");
console.log("Pour atteindre le stock cible de 100 jeux, le nombre de livraisons nécessaires sera de : ");

while (stock_jeux<stock_cible) {
    stock_jeux = stock_jeux + jeux_par_livraison ;
    nombre_livraisons++ ;
}
console.log(nombre_livraisons);
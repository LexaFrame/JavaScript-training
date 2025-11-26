import readlineSync from 'readline-sync';
const nom = readlineSync.question('Quel est votre nom ? ');
console.log('Bonjour, ' + nom + ' !');

const nom_magasin = "PixelBay";
let stock_jeux = 0;
let livraison_jeux = 5;

while (stock_jeux<100) {
    stock_jeux = stock_jeux + livraison_jeux ;
    console.log("Quantité actuelle de jeux en stock chez " + nom_magasin + " : " + stock_jeux);
    stock_jeux + livraison_jeux;
}    
console.log("Nombre de livraisons de jeux : " + stock_jeux / livraison_jeux);
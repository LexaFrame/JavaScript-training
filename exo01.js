import readlineSync from 'readline-sync';
const nom = readlineSync.question('Quel est votre nom ? ');
console.log('Bonjour, ' + nom + ' !');

const nom_magasin = "PixelBay";
let nombre_jeux = 500;
const prix_jeu = 15;
console.log("Bienvenue chez " + nom_magasin + " ! Nous vous proposons " + nombre_jeux + " jeux à " + prix_jeu + " € !");
let nombre_jeux_vendus = nombre_jeux * 30 / 100 ;
console.log("La promotion a bien marché, nous avons vendu " + nombre_jeux_vendus + " jeux !")
nombre_jeux = nombre_jeux-nombre_jeux_vendus;
console.log("Il nous reste " + nombre_jeux + " jeux en stock.");
const chiffre_affaires = nombre_jeux_vendus * prix_jeu ;
console.log("Avec cette promotion, nous avons réalisé un chiffre d'affaires de " + chiffre_affaires + " € !");
const nombre_jeux_initial = 500;
console.log("Bilan des ventes lors de la journée promotionnelle de " + nom_magasin + " : nous avions " + nombre_jeux_initial + " jeux et il nous en reste " + nombre_jeux + " ce qui représente un CA de " + chiffre_affaires + " €.");

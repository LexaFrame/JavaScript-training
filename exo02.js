import readlineSync from 'readline-sync';
const nom = readlineSync.question('Quel est votre nom ? ');
console.log('Bonjour, ' + nom + ' !');

const nom_magasin = "PixelBay";
let catalogue_jeux = ["Ragnarok Online", " Odin Sphere", " Shin Megami Tensei : Persona 3", " Soul Calibur 2", " Dead or Alive 2"];
console.log("Voici nos jeux préférés : " + catalogue_jeux + ".");
console.log("Voici le deuxième jeu : " + catalogue_jeux[1] + ".") ;
catalogue_jeux[2] = "Tekken 3";
console.log("Le troisième jeu est maintenant : " + catalogue_jeux[2] + ".");
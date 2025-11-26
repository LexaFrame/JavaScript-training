import readlineSync from 'readline-sync';
const nom = readlineSync.question('Quel est votre nom ? ');
console.log('Bonjour, ' + nom + ' !');

const nom_magasin = "PixelBay";
console.log("PixelBay est ouvert les jours suivants :");
let jours_semaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
for(let i=0; i<jours_semaine.length;i++) {
    console.log ("Jour " + (i+1) + " " + jours_semaine [i])
}
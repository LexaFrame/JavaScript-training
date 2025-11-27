import readlineSync from 'readline-sync';
const nom_magasin = readlineSync.question('Quel est le nom du magasin ? ');

let jeux = ["Space Adventure", "Castle Quest", "Mystery Island", "Robot Wars", "Jungle Journey", "Racing Rush", "Pirate's Treasure", "Alien Invasion", "Super Sports", "Haunted Mansion", "Galactic Odyssey", "Winter Wonderland"];
let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
for(let i=0; i<mois.length; i++) {
const phrase = `Voici le jeu du mois de ${mois[i]} de ${nom_magasin} : ${jeux[i]}.`;
console.log(phrase);
}
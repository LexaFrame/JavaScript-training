import readlineSync from 'readline-sync';

let jeux_retros = [];
let jeux_modernes = [];

function creerJeu(titre, annee_de_sortie, genre) { 
    let nouveauJeu = {
    titre: titre,
    annee_de_sortie: annee_de_sortie,
    genre: genre,
    };

    return nouveauJeu;
}

let nouveauJeu1 = creerJeu ("Tetris", 1984, "Puzzle");
jeux_retros.push(nouveauJeu1);
let nouveauJeu2 = creerJeu ("Space Invaders", 1978, "Shoot 'em up");
jeux_retros.push(nouveauJeu2);
let nouveauJeu3 = creerJeu("Pac-Man", 1980, "Labyrinthe");
jeux_retros.push(nouveauJeu3);
let nouveauJeu4 = creerJeu ("Pong", 1972, "Sport");
jeux_retros.push(nouveauJeu4);


let nouveauJeu5 = creerJeu("Octopath Traveler II", 2023, "RPG");
jeux_modernes.push(nouveauJeu5);
let nouveauJeu6 = creerJeu("Dragon Quest Monsters : Le Prince des Ombres", 2023, "RPG");
jeux_modernes.push(nouveauJeu6);
let nouveauJeu7 = creerJeu("Pathway", 2019, "Stratégie tour par tour");
jeux_modernes.push(nouveauJeu7);
let nouveauJeu8 = creerJeu("Wargroove", 2019, "Tactique tour par tour");
jeux_modernes.push(nouveauJeu8);


function afficherListeJeux(liste) {
liste.forEach(function(jeu) {
    console.log(jeu.titre, jeu.annee_de_sortie, jeu.genre);
});
    // console.log(liste);
}

afficherListeJeux(jeux_retros);
afficherListeJeux(jeux_modernes);

let NbJeuxRetros = jeux_retros.length;

let totalAnnees1 = jeux_retros.reduce((iAnnee, jeu) => {
    return iAnnee + jeu.annee_de_sortie; 
}, 0);

let moyenneAnnees1 = totalAnnees1 / NbJeuxRetros;

let NbJeuxModernes = jeux_modernes.length;

let totalAnnees2 = jeux_modernes.reduce((iAnnee, jeu) => {
    return iAnnee + jeu.annee_de_sortie; 
}, 0);

let moyenneAnnees2 = totalAnnees2 / NbJeuxModernes;

let totalNbJeux = NbJeuxRetros+NbJeuxModernes;
let totalGeneralMoyenneAnnees = (totalAnnees1 + totalAnnees2) / totalNbJeux;

console.log(`Moyenne des années de sortie des jeux : ${totalGeneralMoyenneAnnees.toFixed(1)}`);
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

// function afficherListeJeux(liste) {
//     console.log(jeux_retros+jeux_retros);
// }

let nouveauJeu1 = creerJeu ("Tetris", 1984, "Puzzle");
jeux_retros.push(nouveauJeu1);
let nouveauJeu2 = creerJeu ("Space Invaders", 1978, "Shoot 'em up");
jeux_retros.push(nouveauJeu2);
let nouveauJeu3 = creerJeu("Pac-Man", 1980, "Labyrinthe");
jeux_retros.push(nouveauJeu3);
let nouveauJeu4 = creerJeu ("Pong", 1972, "Sport");
jeux_retros.push(nouveauJeu4);
// console.log(jeux_retros);

let nouveauJeu5 = creerJeu("Octopath Traveler II", 2023, "RPG");
jeux_modernes.push(nouveauJeu5);
let nouveauJeu6 = creerJeu("Dragon Quest Monsters : Le Prince des Ombres", 2023, "RPG");
jeux_modernes.push(nouveauJeu6);
let nouveauJeu7 = creerJeu("Pathway", 2019, "Stratégie tour par tour");
jeux_modernes.push(nouveauJeu7);
let nouveauJeu8 = creerJeu("Wargroove", 2019, "Tactique tour par tour");
jeux_modernes.push(nouveauJeu8);
// console.log(jeux_modernes);


jeux_retros.forEach(function(titre, annee_de_sortie, genre) {
    console.log(titre, annee_de_sortie, genre);

});

// jeux_retros.push ("tetris", "space_invaders", "pac-man", "pong");
// jeux_modernes.push ("octopath_traveller_2", "wargroove", "pathway", "dragon_quest_monsters")

// console.log(jeux_retros);
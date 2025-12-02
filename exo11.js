import readlineSync from 'readline-sync';

let jeu1 = {
    titre: "Shin Megami Tensei Persona 3",
    annee_de_sortie: 2006,
    genre: "RPG",
    score: 8.1,
    scorePopularite: 0,

    afficher() {
        console.log(`Le jeu ${this.titre}, ${this.genre} sorti en ${this.annee_de_sortie}, a un score général de ${this.score}.`);
    }, 
    getPopularite() {
        this.scorePopularite = (this.score*this.annee_de_sortie/100);
        return this.scorePopularite;
    }
}
console.log(`Le score de popularité de ${jeu1.titre} est : ${jeu1.getPopularite().toFixed(2)}`);

let jeu2 = {
    titre: "Ragnarok Online",
    annee_de_sortie: 2007,
    genre: "MMORPG",
    score: 8.3,
    scorePopularite: 0,

    afficher() {
        console.log(`Le jeu ${jeu2.titre}, ${jeu2.genre} sorti en ${jeu2.annee_de_sortie}, a un score général de ${jeu2.score}.`);
    },
    getPopularite() {
        this.scorePopularite = (this.score*this.annee_de_sortie/100);
        return this.scorePopularite;
    }
}
console.log(`Le score de popularité de ${jeu2.titre} est : ${jeu2.getPopularite().toFixed(2)}`);
// console.log(jeu1.scorePopularite)
if (jeu1.getPopularite()>jeu2.getPopularite()) {
    console.log(`${jeu1.titre} est le jeu le plus populaire avec un score de : ${jeu1.getPopularite().toFixed(2)}`);
    jeu1.afficher();
} else {
    console.log(`${jeu2.titre} est le jeu le plus populaire avec un score de : ${jeu2.getPopularite().toFixed(2)}`);
    jeu2.afficher();
}

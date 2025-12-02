import readlineSync from 'readline-sync';
const nom_magasin = readlineSync.question('Quel est le nom du magasin ? ');

let jeu1 = {
    titre: "Shin Megami Tensei Persona 3",
    annee_de_sortie: 2006,
    genre: "RPG",
    score: 8.1,
    scorePopularite: 0,

    afficher() {
        console.log(`Le jeu ${this.titre}, ${this.genre} sorti en ${this.annee_de_sortie}, a un score de ${this.score}.`);
    },
// Voir pourquoi la méthode ne fonctionne pas 
    getPopularite() {
        this.scorePopularite = (this.score*this.annee_de_sortie/100);
        return this.scorePopularite;
    }
}
jeu1.afficher();
console.log(`Le score de popularité de ${jeu1.titre} est : ${jeu1.getPopularite()}`);

let jeu2 = {
    titre: "Ragnarok Online",
    annee_de_sortie: 2007,
    genre: "MMORPG",
    score: 8.3,

    afficher() {
        console.log(`Le jeu ${jeu2.titre}, ${jeu2.genre} sorti en ${jeu2.annee_de_sortie}, a un score de ${jeu2.score}.`);
    },
    getPopularite() {
        this.scorePopularite = (this.score*this.annee_de_sortie/100);
        return this.scorePopularite;
    }
}
jeu2.afficher();
console.log(`Le score de popularité de ${jeu2.titre} est : ${jeu2.getPopularite()}`);
// Voir comment comparer les deux scores et afficher les informations de celui qui a le score le plus élevé

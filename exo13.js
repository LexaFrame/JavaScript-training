let collection = [
  {
    titre: "Space Adventure",
    annee_de_sortie: 1984,
    scores: [85, 87, 90, 78, 88],
  },
  {
    titre: "Castle Quest",
    annee_de_sortie: 1990,
    scores: [92, 91, 89, 95, 94],
  },
  {
    titre: "Jungle Journey",
    annee_de_sortie: 2021,
    scores: [88, 90, 85, 87, 89],
  },
];

// Afficher un jeu :
function afficherJeu(titre, annee_de_sortie, scores) {
  console.log(titre, annee_de_sortie, scores);
}

afficherJeu(
  collection[0].titre,
  collection[0].annee_de_sortie,
  collection[0].scores
);

// Afficher la collection de jeux :
function afficherCollection(liste) {
  liste.forEach(function (jeu) {
    console.log(jeu.titre, jeu.annee_de_sortie, jeu.scores);
  });
}

afficherCollection(collection);

// Faire une fonction pour calculer la moyenne des jeux automatiquement, puis faire une fonction pour calculer la moyenne de la collection : 

function calculerMoyenneJeu(scores) {
    let NbTotalScoresJeu = scores.length;
    let sommeScoresJeu = scores.reduce((acc, scores) => {
          return acc + scores;
    }, 0);
    let totalMoyenneScoreJeu = sommeScoresJeu / NbTotalScoresJeu;
        return totalMoyenneScoreJeu ;
    }

calculerMoyenneJeu(collection[0].scores);


// function calculerMoyenneCollection(scores) {

// }
// let NbJeuxCollection = collection.length;
// console.log(`Il y a ${NbJeuxCollection} jeux dans la collection.`);
// let totalSommeMoyenneScoreTousJeux =
//   totalMoyenneScoreJeu1 + totalMoyenneScoreJeu2 + totalMoyenneScoreJeu3;
// let totalMoyenneScoreCollection =
//   totalSommeMoyenneScoreTousJeux / NbJeuxCollection;

// console.log(
//   `La moyenne de la collection est de ${totalMoyenneScoreCollection.toFixed(
//     1
//   )}.`
// );


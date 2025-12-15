import readlineSync from 'readline-sync';

let annee = 0
const anneeUtilisateur = readlineSync.question('Entrez une annee : ');
annee = Number (anneeUtilisateur);

function isBissextile(annee) {
    if (((annee % 4 === 0) && (annee % 100 !== 0)) || (annee % 400 === 0)) {
        console.log(`L'annee ${anneeUtilisateur} est une annee bissextile`);
} else {
    console.log(`L'annee n'est pas bissextile.`);
}};

isBissextile(annee);
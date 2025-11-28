import readlineSync from 'readline-sync';
const nom_magasin = readlineSync.question('Quel est le nom du magasin ? ');

let codes_secrets = "Delta";

switch (codes_secrets) {
    case "Alpha":
        console.log("Lancer la promotion de la semaine");
        break;
    case "Bravo":
        console.log("Réorganiser la section des jeux rétro");
        break;
    case "Charlie":
        console.log("Préparer la zone de démonstration pour les nouveaux arrivages");
        break;
    case "Delta":
        console.log("Vérifier l'inventaire des accessoires");
        break;
    default:
        console.log("Code inconnu");
}
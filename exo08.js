import readlineSync from 'readline-sync';
const nom_magasin = readlineSync.question('Quel est le nom du magasin ? ');

let prix_jeu = 50;
let reduction_ete = 0.2;
let reduction_hiver = 0.3;
let prix_final_ete = 0;
let prix_final_hiver =0;

function promotion_ete(prix_jeu, reduction_ete) { //Promotion : -20%
    return (prix_jeu * reduction_ete/100)+prix_jeu
}
prix_final_ete = promotion_ete(prix_jeu, reduction_ete);

function promotion_hiver(prix_jeu, reduction_hiver) { //Promotion : -30%
    return (prix_jeu * reduction_hiver/100)+prix_jeu
}
prix_final_hiver = promotion_hiver(prix_jeu, reduction_hiver);

const ete = prix_final_ete
const hiver = prix_final_hiver

const choix_promo = readlineSync.question('Saisir "ete" ou "hiver" pour connaitre le prix du jeu selon la promotion souhaitee : ')
// let codes_secrets = "Delta";

switch (choix_promo) {
    case "ete":
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

const phrase1 = `Les jeux de ${nom_magasin} sont habituellement vendus au prix de ${prix_jeu}, mais ${nom_magasin} fait parfois des promotions.`
console.log(phrase1)
readlineSync.question('Saisir "ete" ou "hiver" pour connaitre le prix du jeu selon la promotion souhaitee : ')
const phrase3 = `Prix du jeu apres application de la promotion souhaitee : ${prix_final} €.`;
console.log(phrase3);
//if ou switch : si l'utilisateur saisit ete, afficher promotion_ete, si l'utilisateur saisit hiver, afficher promotion_hiver
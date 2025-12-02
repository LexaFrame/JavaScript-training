import readlineSync from 'readline-sync';
const nom_magasin = readlineSync.question('Quel est le nom du magasin ? ');

let prix_jeu = 50;
let reduction_ete = 20;
let reduction_hiver = 30;
let reduction_autre = 15;
let prix_final_ete = 0;
let prix_final_hiver = 0;
let prix_final_autre = 0;

function promotion_ete(prix_jeu, reduction_ete) { //Promotion : -20%
    return prix_jeu-(prix_jeu * reduction_ete/100)
}
prix_final_ete = promotion_ete(prix_jeu, reduction_ete);

function promotion_hiver(prix_jeu, reduction_hiver) { //Promotion : -30%
    return prix_jeu-(prix_jeu * reduction_hiver/100)
}
prix_final_hiver = promotion_hiver(prix_jeu, reduction_hiver);

function promotion_autre(prix_jeu, reduction_autre) { //Promotion : -15%
    return prix_jeu-(prix_jeu * reduction_autre/100)
}
prix_final_autre = promotion_autre(prix_jeu, reduction_autre);

const phrase1 = `Les jeux de ${nom_magasin} sont habituellement vendus au prix de ${prix_jeu} € , mais ${nom_magasin} fait parfois des promotions.`
console.log(phrase1)

// Utilisation de readlinesyn+switch-case pour saisir le choix utilisateur et afficher le tarif promotionnel souhaité, avec une alternative si l'utilisateur ne respecte pas la saisie demandée.
let choix_promo = readlineSync.question(`Saisir "ete" ou "hiver" ou "autre" pour connaitre le prix du jeu selon la promotion souhaitee : `)

switch (choix_promo) {
    case "ete":
        // Pour économiser des ressources : exécution de la fonction à déplacer ici si possible
        console.log(`Prix du jeu après application de la promotion d'été : ${prix_final_ete} €.`);
        break;
    case "hiver":
        // Pour économiser des ressources : exécution de la fonction à déplacer ici si possible
        console.log(`Prix du jeu après application de la promotion d'hiver : ${prix_final_hiver} €.`);
        break;
    case "autre":
        // Pour économiser des ressources : exécution de la fonction à déplacer ici si possible
        console.log(`Prix du jeu après application de la promotion spéciale : ${prix_final_autre} €.`);
        break;
    default:
        console.log(`Le prix de départ du jeu est : ${prix_jeu} €.`);
}
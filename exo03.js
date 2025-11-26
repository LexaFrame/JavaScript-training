import readlineSync from 'readline-sync';
const nom = readlineSync.question('Quel est votre nom ? ');
console.log('Bonjour, ' + nom + ' !');

const nom_magasin = "PixelBay";
let jeuxVendus = 60 ;
if (jeuxVendus>100) {
    console.log("Le magasin organise une grande promotion !");
} else if (jeuxVendus>=50 && jeuxVendus<=100) {
    console.log("Le magasin fait une réorganisation de son espace de vente.");
} else {
    console.log("Le magasin lance une campagne de publicité.");
}
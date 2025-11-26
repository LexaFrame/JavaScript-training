import readlineSync from 'readline-sync';
const volume = readlineSync.question('Quel est le volume de vente du jour ? ');

const nom_magasin = "PixelBay";
let jeuxVendus = volume ;
if (jeuxVendus>100) {
    console.log("Le magasin organise une grande promotion !");
} else if (jeuxVendus>=50 && jeuxVendus<=100) {
    console.log("Le magasin fait une réorganisation de son espace de vente.");
} else {
    console.log("Le magasin lance une campagne de publicité.");
}
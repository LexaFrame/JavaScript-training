import readlineSync from 'readline-sync';

const temperature = Number(readlineSync.question('Quelle temperature ? Nombre : '));
console.log(typeof temperature);

// Convertir °F en °C :

// const F = 98.6
// const C = (F - 32) * 5/9
// console.log(C);

// const F = 98.6

// const testValue = 100;
// const testValue2= "ABC";


function fToC( F, symbol ){
  if (typeof F !== "number") {
    console.log("ERREUR");
  } else {
    console.log( `${(F - 32) * 5 / 9} ${symbol}` );
  }
}

// Mes tests de dev
fToC(98.6);
fToC(200);
fToC(300);

// Utilisateur
fToC(temperature, '°');
import readlineSync from 'readline-sync';
const volume = readlineSync.question("What are the store's sales'numbers today? ");

const store_name = "PixelBay";
let soldGames = volume ;
if (soldGames>100) {
    console.log("The store organizes a big sale"); 
    // If the store sold more than a hundred games the previous message will be displayed
} else if (soldGames>=50 && soldGames<=100) {
    console.log("The store reorganize its sales space");
    // If the store sold between 50 and less than a 100 games the previous message will be displayed
} else {
    console.log("The store launches an advertisement campaign");

    // If the store sold less than 50 games the previous message will be displayed
}
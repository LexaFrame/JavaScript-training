let collectionJeux = [
    {
        titre: "Space Adventure",
        anneeSortie: 1984,
        genre: "Arcade",
        scores: [85, 87, 90, 78, 88]
    },
    {
        titre: "Castle Quest",
        anneeSortie: 1990,
        genre : "Aventure",
        scores: [92, 91, 89, 95, 94],
    },
    {
        titre: "Jungle Journey",
        anneeSortie: 2021,
        genre : "Aventure",
        scores: [88, 90, 85, 87, 89],
    },
];
    let tableau2000 = collectionJeux.filter(element => element.anneeSortie >= 2000);
    console.log(`Les jeux modernes sont :`);
    console.log(tableau2000);

    let tableauGenre = collectionJeux.filter(element => element.genre == "Aventure");
    console.log(`Les jeux de genre Aventure sont : ${tableauGenre}.`);

    // let tableau2000 = collectionJeux.filter((annee) => {
    //     return(annee.anneeSortie >= 2000)}); 
    // console.log(`Les jeux modernes sont :`)
    // console.log(tableau2000);

    // let tableauGenre = collectionJeux.filter((genre) => {
    //     return (collectionJeux.genre = "Aventure")});
    // console.log(`Les jeux de genre Aventure sont :`)
    // console.log(tableauGenre);
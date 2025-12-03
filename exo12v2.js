import readlineSync from 'readline-sync';

// console.log(collection_jeux);
let collection_jeux = [];
collection_jeux.push ("jeux_retros", "jeux_modernes");
    collection_jeux.forEach(function(collection_jeux) {
    console.log(collection_jeux);
})

collection_jeux[0].push ("tetris", "space_invaders", "Pac-Man", "Pong");
    jeux_retros.forEach(function(jeux_retros) {
    console.log(jeux_retros);
})
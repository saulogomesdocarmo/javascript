/**
 * Jogo de cartas
 * Exemplo de uso de arrays
 * @author Saulo Gomes
 */

const input = require('readline-sync')
console.clear()
console.log("Sorteio de uma carta")
input.question("Pressione a tecla [ENTER] para sortear uma carta ")

//            0  1    2   3  ÍNDICES
let nipes = ["♠","♥","♣","♦" ]

//            0   1   2   3   4   5   6   7   8   9   10  11   12  INDICES 
let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
// apoio a lógica 
// Az de ouro
// console.log(`${faces[11]} ${nipes[1]}`)

// Lógica para sorteio de uma carta
 
let nipe = nipes [Math.floor(Math.random()* 4)]
let face = faces  [Math.floor(Math.random()* 13)]

console.log(`A sua carta é: ${[face]} ${[nipe]}`)
/**
 * Jogo do dado
 * @author Saulo Gomes
 */

const input = require("readline-sync")
const colors = require("colors")

// variavéis
let face

console.clear()
console.log("JOGO DO DADO".blue.bold)
console.log("")
input.question("Pressione a tecla ENTER para voce poder jogar o dado: ")


// Sorteio da face de um dado
// Math (classe matemática)
// .floor (conversão para números inteiros)
// .random() *6 (gerador de números aleatórios 0 1 2 3 4 5 )

face = Math.floor(Math.random() * 6 + 1)
console.log(`Face do dado: ${face}`)

switch (face) {
    case 0:
        console.log("⚀")
        console.log("Lado 0")
        break
    case 1:
        console.log("⚁")
        console.log("Lado 1")
        break
    case 2:
        console.log("⚂")
        console.log("Lado 2")
        break
    case 3:
        console.log("⚃")
        console.log("Lado 3")
        break
    case 4:
        console.log("⚄")
        console.log("Lado 4")
        break
    case 5:
        console.log("⚅")
        console.log("Lado 5")
        break
}
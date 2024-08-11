/**
 * Exercicio de soma, usando o laço de repetição FOR
 * @author Saulo Gomes
 */

const input = require("readline-sync")
let valor

console.clear()
console.log("Soma automática")
console.log("")

valor = Number(input.question("Digite um numero: "))
console.log("")
for (let i = 1; i <= 20; i++) {
    console.log(`O número ${valor} + ${i} = ${ valor + i}`)
}
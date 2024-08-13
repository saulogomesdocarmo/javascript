/**
 * Tabuda do utilizando a o laço de repetição While
 * @author Saulo Gomes do Carmo
 */

const input = require("readline-sync")
let valor
let x = 1

valor = Number(input.question("Digite um numero: "))

while (x < 11) {
    console.log(`${x} x ${valor} = ${x * valor} `)
    x++
}


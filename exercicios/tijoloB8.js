/**
 * Cáculo da Quantidade de Tijos Baianos por metro quadrado, sabendo que 1m2 = igual 28 blocos
 * @author Saulo Gomes do Carmo
 */

const input = require('readline-sync')

// variaveis
let m2,tijolos

console.clear
console.log("Cáculo da quantidade de tijolos por metro quadrado (tijolo baiano 8 furos)")

// entrada 
m2 = Number(input.question("Quantos  metros quadrados voce ira precisar ? : "))

// processamento
tijolos = m2 *28

// saida
console.log(`Voce ira precisar  de ${tijolos} tijolos`)
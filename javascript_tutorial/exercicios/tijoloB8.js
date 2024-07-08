/**
 * Cálculo para descobrir a quantidade de tijolos por metros quadradors(m2):
 * @author Saulo Gomes do Carmo
 */

const input = require('readline-sync')
console.clear()
console.log("Cálculo para descobrir a quantidade de tijlos por m2")

let m2,tijolos

m2 = Number(input.question("Digite a quantidade de m2: "))

tijolos = m2 * 28

console.log(`A quantidade de tijolos é de: ${tijolos} tijolos`)
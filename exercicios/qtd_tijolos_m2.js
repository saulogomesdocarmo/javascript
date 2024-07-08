/**
 * Cálculo para descobrir o tamanho de uma área em m2 e a quantidade de tijlos que serão usados  na obra.
 * @author Saulo Gomes do Carmo
 */

const input = require('readline-sync')
console.clear()
console.log("Cálculo para descobrir o tamanho de uma área em m2 e a quantidade de tijolos que serão usados na obra")
console.log("")
let largura,comprimento,m2,tijolos

largura = Number(input.question("Digite a largura da parede em m2: "))
console.log("")
comprimento =Number(input.question("Digite o comprimento da parede em m2: "))
console.log("")
m2 = largura * comprimento

console.log (`A área total é de: ${m2} m2`)
console.log("_______________________________________________________________________________")
tijolos = m2 * 28
console.log("")
console.log(`Sabendo que a área é de: ${m2} m2.`)
console.log("")
console.log(`A quantidade ideal de tijolos para essa construção deverá ser: ${tijolos} tijolos baianos de 8 furos.`)
console.log("____________________________________________________")
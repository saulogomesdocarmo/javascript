/**
 * Cáclculo para descobrir a área de um local em Metros Quadrados(m2)
 * @author Saulo Gomes do Carmo
 */

const input = require('readline-sync')
console.clear()
console.log("Cálculo para descobrir a área de um espaço em m2")
console.log("____________________________________________________________________")
let largura,comprimento,m2
console.log("")
largura = Number(input.question("Digite a largura das paredes em m2: "))
console.log("")
comprimento = Number(input.question("Digite o comprimento das paredes em m2: "))
console.log("")
m2 = largura * comprimento
console.log(`O total da área em m2 é de: ${m2} m2.`)

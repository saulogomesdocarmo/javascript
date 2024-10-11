/**
 * Calculo da area de um circulo
 * @author Saulo Gomes do Carmo
 */

console.clear()
console.log("APP PARA MEDIR AREA DO CIRUCULO")
console.log("")
const input = require('readline-sync')

const pi = 3.14
let raio,r2,area

raio = Number(input.question("Digite um valor: "))
r2 = raio * raio
area = r2 * pi

console.log(`A aréa do circulo é de: ${area.toFixed(1)}`)
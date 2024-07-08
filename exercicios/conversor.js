/**
 * Aplicativo Conversor de MB(Megabytes) para GB(Gigabytes)
 * @auhtor Saulo Gomes do Carmo
 */

console.clear()
const input = require('readline-sync')
console.log("Conversor de MB para GB")
console.log("________________________________________________")
let mb,gb_binario,gb_decimal

mb = Number(input.question("Digite o numero de Megabytes (MB) que deseja converter: "))
console.log("")
gb_binario = mb / 1024
gb_decimal = mb / 1000

console.log(`O numero de Megabytes é : ${mb} (MB)`)
console.log("______________________________________________________________________________________________________")
console.log(`O valor da conversão de ${mb}MB, para Gigabytes, no formato BINÁRIO é de ${gb_binario.toFixed(1)}GB. `)
console.log("______________________________________________________________________________________________________")
console.log(`O valor da conversão de ${mb}MB, para Gigabytes, no formato DECIMAL é de ${gb_decimal.toFixed(1)}GB`)
console.log("")


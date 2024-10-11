/**
 * Cálculo do IMC
 * @author
 */


const input = require('readline-sync')


// variaveis 
let nome, idade, peso, altura, imc

console.clear()


// entrada

nome = input.question("Digite o seu nome: ")
idade = Number(input.question("Digite a sua idade: "))
peso = Number(input.question("Digite o seu peso em kg: ").replace(",", "."))
altura = Number(input.question("Digite sua altura em cm: "))

//processamento
imc = peso / ((altura / 100) * (altura / 100))

// Saida 
console.clear()
console.log("")
console.log("------------------------------------------------")
console.log("Ficha do Aluno")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade} anos`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`IMC: ${imc.toFixed(2)}`)

if (imc < 18) {
    console.log("Abaixo do Peso")
} else if (imc < 25) {
    console.log("Peso normal")
} else if (imc < 30) {
    console.log("Acima do Peso !")
} else if (imc < 35) {
    console.log("Obesidade I")
} else if (imc < 40) {
    console.log("Obesidade II (severa)")
} else {
    console.log("Obesidade Grau III (mórbida)")
}





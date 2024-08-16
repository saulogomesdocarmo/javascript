/**
 * Calculadora com laço de repetição do-while
 * @author Saulo Gomes
 */

const input = require('readline-sync')
const color = require('colors')

let num1, num2, operacao
let repetir = "n"

function somar(num1, num2) {
    return console.log(`${num1} + ${num2} = ${num1 + num2}`)
}

function subtrair(num1, num2) {
    return console.log(`${num1} - ${num2} = ${num1 - num2}`)
}

let multiplicar = function (num1, num2) {
    return console.log(`${num1} x ${num2} = ${num1 * num2}`)
}

let dividir = function (num1, num2) {
    return console.log(`${num1} / ${num2} = ${num1 / num2}`)
}

let porcentagem = function (num1, num2) {
    return console.log(`${num1}%  de ${num2} = ${(num1 * num2) / 100}`)
}

console.clear()
console.log("CALCULADORA".blue.italic)
console.log("")

function calculadora() {

    num1 = Number(input.question("Digite o primeiro numero: "))
    num2 = Number(input.question("Digite o segundo numero: "))
    console.log("")
    console.log("1. Somar")
    console.log("2. Subtrair")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Porecentagem")
    console.log("")
    operacao = Number(input.question("Digite uma opcao: "))

    switch (operacao) {

        case 1:
            somar(num1, num2)
            break;

        case 2:
            subtrair(num1, num2)
            break

        case 3:
            multiplicar(num1, num2)
            break

        case 4:
            dividir(num1, num2)
            break

        case 5:
            porcentagem(num1, num2)
            break

        default:
            console.log("Digite uma opção váliida")
            break;
    }
}

calculadora()

repetir = input.question("Deseja fazer outro calculo(s/n)?: ")

if (repetir === "s") {
    calculadora()
} else {
    console.log("Calculo finalizado")
}
console.log("")

/**
 * Exercício de fixação do conceitos de POO
 * Agencia bancária
 * @author Professor José de Assis
 */

const color = require('colors')

// classe modelo
class Conta {
    //atributos encapsulados
    constructor(numero, titular, saldo) {
        this._numero = numero
        this._titular = titular
        this._saldo = saldo
    }
    //métodos
    getNumero() {
        return this._numero
    }
    getTitular() {
        return this._titular
    }
    getSaldo() {
        return this._saldo
    }
    exibirSaldo() {
        console.log(`O saldo da conta de ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}`)
    }
    depositar(valor) {
        this._saldo += valor
        console.log(`Crédito de R$ ${valor.toFixed(2)}`.green)
    }
    sacar(valor) {
        if (valor > this._saldo) {
            console.log(`* Débito de R$ ${valor.toFixed(2)}`.red)
            console.log("Operação negada. Saldo insuficiente.".red)
        } else {
            this._saldo -= valor
            console.log(`Débito de R$ ${valor.toFixed(2)}`.red)
        }
    }
    pix(valor, destino) {
        if (valor > this._saldo) {
            console.log(`PIX de R$ ${valor.toFixed(2)} não realizado. Saldo insuficiente.`.red)
        } else {
            this._saldo -= valor
            destino.depositar(valor)
            console.log(`PIX de R$ ${valor.toFixed(2)} para ${destino.getTitular()} realizado com sucesso`.red.bold)
        }
    }
}

class ContaPoupanca extends Conta {
    //atributos
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
    }
    //método
    exibirSaldoPoupanca() {       
        console.log(`O saldo da conta poupança de ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}`)
    }
}

console.clear()
console.log("██████   █████  ███    ██  ██████  ██████  ".cyan)
console.log("██   ██ ██   ██ ████   ██ ██      ██    ██ ".cyan)
console.log("██████  ███████ ██ ██  ██ ██      ██    ██ ".cyan)
console.log("██   ██ ██   ██ ██  ██ ██ ██      ██    ██ ".blue)
console.log("██████  ██   ██ ██   ████  ██████  ██████  ".blue)
console.log("")

let cc1 = new Conta(1, "Robson Vaamonde", 3000)
console.log("")
console.log(`Cliente: ${cc1.getTitular()} | conta: ${cc1.getNumero()}`.bold)
cc1.exibirSaldo()
cc1.depositar(1000)
cc1.exibirSaldo()
cc1.sacar(500)
cc1.exibirSaldo()

let cc2 = new Conta(2, "Sirlene Sanches", 4000)
console.log("")
console.log(`Cliente: ${cc2.getTitular()} | conta: ${cc2.getNumero()}`.bold)
cc2.exibirSaldo()
cc2.depositar(2000)
cc2.exibirSaldo()
cc2.sacar(8000)
cc2.exibirSaldo()
cc2.sacar(6000)
cc2.exibirSaldo()

let cc3 = new Conta(3, "Leandro Ramos", 1000)
console.log("")
console.log(`Cliente: ${cc3.getTitular()} | conta: ${cc3.getNumero()}`.bold)
cc3.exibirSaldo()
cc3.depositar(5000)
cc3.exibirSaldo()
cc3.pix(1000, cc2)
cc3.exibirSaldo()
cc2.exibirSaldo()

console.log("_________________________________________")
console.log("")
let cp1 = new ContaPoupanca(10, "Robson Vaamonde", 1000)
console.log(`Cliente: ${cp1.getTitular()} | conta: ${cp1.getNumero()}`.yellow.bold)
cp1.exibirSaldoPoupanca()



/**
 * Exercício de fixação dos conceitos de POO
 * Agência Bancária
 * @author Saulo Gomes
 */

const colors = require('colors')

class Conta {
    //atributos encapsulados
    constructor(numero, titular, saldo) {
        this._numero = numero
        this._titular = titular
        this._saldo = saldo
    }
    // métodos
    getNumero() {
        return this._numero
    }

    getTitular() {
        return this._titular
    }

    getSaldo() {
        return this._saldo
    }

    exibirSaldo(){
        console.log(`O saldo da conta de ${this.getTitular()} é de R$ ${this.getSaldo().toFixed(2).bold}`)
    }
    depositar(valor){
        this. _saldo += valor  
        console.log(`Crédito de R$ ${valor.toFixed(2).green}`)
    }
    sacar(valor){
        this._saldo -= valor
        if(valor > this._saldo){
            console.log(`Débito de R$ ${valor.toFixed(2).red} `)
            console.log(`Saldo insuficiente`)
        }else{
            this._saldo -=
            console.log(`Débito de R$ ${valor.toFixed(2)}`)
            console.log(`O saldo da conta é de: ${this._saldo()}`)
        }
    }

    pix(valor,destino){
        if (valor > this.getSaldo){
            console.log(`* Débito de R$ ${valor.toFixed(2)}`.red)
            console.log(` Saldo insuficiente. Operação cancelada`.bgRed)
        }else{
            this._saldo -= valor
            destino.depositar(valor)
            console.log(`PIX de R$ ${valor} foi transferido para ${destino}`.bold)
        }
    }
} 

class ContaPoupanca extends Conta{
    // atributos
    constructor(numero,titular,saldo){
        super(numero,titular,saldo)
    }
    // método
    exibirSaldoPoupanca(){
        console.log(`O saldo da conta poupança é de ${this.getTitular()} é de R$ ${this._saldo}`)
    }
}

console.clear()
console.log("BANCO".yellow.bold)
console.log("")

let cc1 = new Conta(1,"Robson Vaamonde",3000)
console.log(`Cliente: ${cc1.getTitular().blue.bold} | conta: ${cc1.getNumero()}`)
cc1.exibirSaldo()
cc1.depositar(1000)
cc1.exibirSaldo()
cc1.sacar(4000)
cc1.exibirSaldo()
console.log("")


let cc2 = new Conta(2,"Leandro Ramos",10000)
console.log(`Cliente: ${cc2.getTitular().blue.bold} | conta: ${cc2.getNumero()}`)
cc2.exibirSaldo()
cc2.pix(200,cc1)
console.log("")

let cc3 = new Conta(3,"Sirlene Sanches",5000)
console.log(`Cliente: ${cc3.getTitular().blue.bold} | conta: ${cc3.getNumero()}`)
cc3.exibirSaldo()

console.log("__________________________")
let cp1 = new ContaPoupanca(10,"Robson Vaamonde",1000)
console.log(`Cliente: ${cp1.getTitular().blue.bold} | conta: ${cp1.getNumero()}`.bgBlue.bold)
cp1.exibirSaldoPoupanca()
console.log("") 





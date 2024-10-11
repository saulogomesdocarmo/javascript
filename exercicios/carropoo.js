/**
 * Exercicio para criar uma Classe - POO 
 * @author Saulo Gomes 
 */

const colors = require('colors')

class Carro {

    constructor(cor, modelo, ligar, id, velocidade) {
        this.modelo = modelo
        this.cor = cor
        this.ligar = ligar
        this.id = id
        this.velocidade = velocidade
    }
    mostrarCor() {
        console.log(`A cor do carro é: ${this.cor}`)
    }
    mostrarModelo() {
        console.log(`O modelo do carro é: ${this.modelo}`)
    }
    darpartida() {
        if (this.ligar === true)
            console.log("O Carro Ligado")

        else {
            console.log("O Carro Desligado")
        }
    }
    identificar() {
        this.id = Math.floor(Math.random() * 10)
        console.log(`O numero de identificação do do carro é: 000-${this.id}`)
    }
    acelerar() {
        this.velocidade = Math.floor(Math.random() * 101)
        if (this.velocidade <= 50) {
            console.log(`A velocidade do carro é: ${this.velocidade}km/h - VELOCIDADE NORMAL.`.green.bold)

        } else {
            console.log(`A velocidade do carro é: ${this.velocidade}km/h - VELOCIDADE ACIMA DO LIMITE`.red.bold)
        }
    }
}

class Aviao extends Carro {
    constructor(cor, modelo, ligar, velocidade,envergadura) {
        super(cor, modelo, ligar, velocidade,)
        this.envergadura = envergadura

    }
    mostrarcorAviao() {
        console.log(`A cor do avião é: ${this.cor}`)
    }
    mostrarmodeloAviao() {
        console.log(`O modelo do avião é: ${this.modelo}`)
    }
    darpartida() {
        if (this.ligar === true)
            console.log("O aviao está pronto para voar")

        else {
            console.log("O aviao ainda nao esta pronto para voar")
        }
    }
    identificar() {
        this.id = Math.floor(Math.random() * 100)
        console.log(`O numero de identificação do aviao é: 0000-${this.id}`)

    }
    acelerar() {
        this.velocidade = Math.floor(Math.random() * 299)
        if (this.velocidade <= 150) {
            console.log(`A velocidade do aviao é: ${this.velocidade}km/h -AINDA NÃO DECOLOU.`.red.bold)

        } else {
            console.log(`A velocidade do aviao é: ${this.velocidade}km/h - DECOLOU`.green.bold)
        }
    }
    verenvergadura(){
        console.log(`A envergadura é de: ${this.envergadura}m`)
    }
    
  
}

console.clear()
const carro01 = new Carro("Azul", "Fusca", true)
carro01.mostrarModelo()
carro01.mostrarCor()
carro01.darpartida()
carro01.identificar()
carro01.acelerar()

console.log("")

const carro02 = new Carro("Branco","Volvo",true)
carro02.mostrarModelo()
carro02.mostrarCor()
carro02.darpartida()
carro02.identificar()
carro02.acelerar()

console.log("")

const aviao01 = new Aviao("Branco","Boing-002",true,true,80)
aviao01.mostrarcorAviao()
aviao01.mostrarmodeloAviao()
aviao01.darpartida()
aviao01.acelerar()
aviao01.verenvergadura()

console.log("")

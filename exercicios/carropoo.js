/**
 * Exercicio para criar uma Classe - POO 
 * @author Saulo Gomes 
 */


class Carro {

    constructor(cor, modelo, ligar, id) {
        this.modelo = modelo
        this.cor = cor
        this.ligar = ligar
        this.id = id
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
            console.log("OCarro Desligado")
        }
    }
    identificar() {
        this.id = Math.floor(Math.random() * 10)
        console.log(`O numero de identificação do do carro é: 000-${this.id}`)
    }
}

class Aviao extends Carro {
    constructor(cor, modelo, aviao, ligar) {
        super(cor, modelo, ligar)
        this.aviao = aviao

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
}

console.clear()
const carro01 = new Carro("Azul", "Fusca", true,)
carro01.mostrarModelo()
carro01.mostrarCor()
carro01.darpartida()
carro01.identificar()

console.log("")

const carro02 = new Carro("Preto", "Corolla", false)
carro02.mostrarModelo()
carro02.mostrarCor()
carro02.darpartida()
carro02.identificar()

console.log("")

const carro03 = new Carro("Branca", "Volvo", true)
carro03.mostrarModelo()
carro03.mostrarCor()
carro03.darpartida()
carro03.identificar()

console.log("")

const aviao01 = new Aviao("Cinza", "Boing 007")
aviao01.mostrarmodeloAviao()
aviao01.mostrarcorAviao()
aviao01.darpartida()
aviao01.identificar()

console.log("")

const aviao02 = new Aviao("Branca - Vermelha", "Bi-Motor", false)
aviao02.mostrarmodeloAviao()
aviao02.mostrarcorAviao()
aviao02.darpartida()
aviao02.identificar()

console.log("")
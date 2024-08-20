/**
 * POO - Fundamentos da programação orinetada a objetos
 * Abstração - Herança - Polimorfismo
 * @author Saulo Gomes 
 */

// Classe modelo (abstração)
class Bloco {
    // atributos
    constructor(resistencia, textura) {
        this.resistencia = resistencia
        this.textura = textura
    }
    // métodos
    criarBloco() {
        console.log("------------------------------------")
        console.log("┍━┑")
        console.log("┕━┙")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)
    }
    construir() {
        console.log(`Bloco de ${this.textura} colococado`)
    }
    minerar() {
        console.log("☐ ☐ ☐ Recursos obtidos!")
    }
}

// Clase modelo com Herança (extends)
class Enxada extends Bloco {
    // atributos
    constructor(resistencia, textura, conquista) {
        super(resistencia, textura)
        this.conquista = conquista
    }
    //metodos
    criarEnxada() {
        console.log("---------------------------------------------------------")
        console.log("-_")
        console.log(" / ")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }
    arar() {
        console.log("._._._. Terra arada !")
        if (this.conquista === true)
            console.log("*** Conquista Obtida ***")
    }

    //polimorfismo (sobrescrita de um método)

    minerar() {
        console.log("XXX Dano atribuído XXX")
    }
}

// Criação do Mundo

console.clear()
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | | ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|")
console.log("")

// criando um objeto (bloco de terra)

const bloco1 = new Bloco(1, "terra")
bloco1.criarBloco()

const bloco2 = new Bloco(2, "marmore")
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco(3, "madeira")
bloco3.criarBloco()
bloco3.construir()

const bloco4 = new Bloco(4, "pedra")
bloco4.criarBloco()
bloco4.minerar()

//criando uma classe enxada 
const enxada1 = new Enxada(2, "madeira", true)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada(5, "ferro", true)
enxada2.criarEnxada()
enxada2.arar()

// criando uma enxada de diamante (polimorfismo)
const enxada3 = new Enxada(5, "diamante",false)
enxada3.minerar()

bloco1.minerar()
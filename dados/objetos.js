/**
 * Estrutra de Dados
 * Objetos
 * @author Saulo Gomes do Carmo
 */

const funcionario1 = {}
console.log(typeof (funcionario1))

// Adicionar dados a estrutura (CRUD Creat)
funcionario1.nome = "Jose"
funcionario1.cargo = "Professor"
funcionario1.email = "josedeassisfilho@gmail.com"
funcionario1.salario = 8000
funcionario1.insta = "@prof.joseassis"

// listas os dados da estrutura (CRUD Read)

console.log(funcionario1)
console.log(funcionario1.cargo)

// Modificar os dados da estrutura (CRUD Update)
funcionario1.nome = "Jose de Assis"
console.log(funcionario1)

// Exlcuir dados da estrutura (CRUD Delete)
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@gmail.com",
    salario: 40000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "New Jersey",

}

console.log(endereco1)

const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "Mordomo",
    email: "alfred@gmail.com",
    salario: 20000,
    ...endereco1 //.. spread operador (união de duas estruturas)
}

console.log(funcionario3)

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robyn@gmail.com",
    salario: 20000,
    ...endereco1
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    emial: "iroman@outlook.com",
    salario: 375000,
    armadura: {
        versão: "Mark II",
        ano: "2010",
        reator: "Arc 01"
    },
    switUp: () => {
        console.log("🤖")
    }
}

console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versão)
funcionario5.switUp()
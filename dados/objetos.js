/**
 * Estrutra de Dados
 * Objetos
 * @author Saulo Gomes do Carmo
 */

const funcionario1 = {}
console.log(typeof(funcionario1))

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
/**
 * Estrutura de Dados Array (Vetor)
 * @author Saulo Gomes do Carmo
 */

// array simples (vetor)
//                [0]        [1]          [2]                [3]
let times = ["Corinthias", "Real Madri", "Borussia Dortmund", "PSG"]
console.log(typeof (times))
console.log(times)
console.table(times)
console.log(times[2])
console.log(times[1])
console.log(times[3])

// array multidimensional(matriz)
let boletim = [[8, 7, 9, 3], [4, 5, 8, 6],] // "linhas de uma tabela"
console.log(boletim)
console.table(boletim)
console.log(boletim[0][1]) // [linha][coluna]
console.log(times[1][2])

// estrutura de dados
let alunosEM1 = ["Victor", "Thais", "Rebeca", "Astolfo", "Kleber", "Joao"]
// exibindo o tamanho do vetor
console.log(alunosEM1.length)

// CRUD (- Creat - Read - Update - Delete ) - São as quatro operações básicas com dados

// CRUD - Read  
console.log(alunosEM1)
console.table(alunosEM1)

// CRUD - Creat (adicionando dados ao vetor - sempre ao final)
alunosEM1.push("Jorge")
console.log(alunosEM1)
console.table(alunosEM1)

// CRUD - Update (Alterando um registro do vetor)

alunosEM1[2] = "Rebeca Souza"
console.log(alunosEM1)
console.table(alunosEM1)

// CRUD - Delete (Excluindo um registro do vetor)
delete alunosEM1[3]
console.log(alunosEM1)
console.table(alunosEM1)

// Percorrendo um vetor 

let notas = [3, 8, 5, 8, 2]
console.log(notas)
console.table(notas)

// laço for

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

// forEach (Simplificação do laço for para percorrer um vetor)
notas.forEach((n) => {
    console.log(n)
})

// map() mapeamento dos dados de um vetor ( percorrer e mapear)
// Exemplo 1: Adicionar 1 ponto as notas

let notasAtulizadas = notas.map((na) => {
    return na + 1
})
console.log(notas)
console.log(notasAtulizadas)

// Exemplo 2: Conversão do Sistema de pontos, para letras
// NA - Não Atendeu nota < 5
// PA - Parcialmente atendido  entre 5 e 7
// A  - Atendeu - nota > 7

let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return ("NA")
    } else if (nc > 7) {
        return ("A")
    } else {
        return ("PA")
    }
})

console.log(notas)
console.log(notasConvertidas)

// Iniciando (criando) um vetor como um objeto

let alunosEM2 = new Array("Tony", "Peter", "Thor", "Natasha")
console.log(alunosEM2)
console.table(alunosEM2)

// Estrutura de dados usando array e objetos

let alunosEM3 = [
    {
        nome: "Bruce",
        idade: "43",
        bolsista: false
    },

    {
        nome: "Clark",
        idade: "45",
        bolsista: false
    },

    {
        nome: "Diana",
        idade: "36",
        bolsista: false
    },
    {
        nome: "Berry",
        idade: "36",
        bolsista: true
    }

]

console.log(alunosEM3)
console.table(alunosEM3)

// Filtros 
// Exemplo 1 : Ordenar de A-Z

alunosEM3.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})

console.table(alunosEM3)

// Ordenar por idade: 
alunosEM3.sort((x, y) => {
    return (x.idade - y.idade)
})

console.table(alunosEM3)

// ATENÇÃO !!! 
// Na filtragem criar uma cópia para exibição (... - cópia do array)

let alunosOrdenados = [...alunosEM3]
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})

// Buscas personalizadas 
// Exemplo 01: Alunos Bolsistas 
console.log(alunosEM3.filter((b)=>{
    return b.bolsista === true
}))

// Exemplo 02: Alunos com idade superior a 40 anos

console.log(alunosEM3.filter((i)=>{
    return i.idade > 40
}))
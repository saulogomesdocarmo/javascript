/**
 * Login para sistema - Exercicio de POO
 * @author Saulo Gomes
 */

class Clientes{
    constructor(nome,email,senha){
        this.nome = nome
        this. _email = email
        this. _senha = senha
    }
    getEmail(){
        return this._email
    }
    getSenha(){
        return this._senha
    }
    setSenha(){
        
    }


    logar(){
        console.log(`Usuário: ${this.nome}`)
        console.log(`Email: ${this.email}`)
        console.log(`Senha: ${this.senha}`)

        if(this.email === "email@acesso.com" && this.senha === "acesso123456"){
            console.log("Login Efetuado")

        }else{
            console.log("Dados inválidos")
        }
    }
}
console.clear()
let usuario01 = new Clientes("José Antonio","email@acesso.com","acesso123456")

usuario01.logar()
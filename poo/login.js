/**
 * POO - Fundamentos da Programação Orientada a Objetos
 * Encapsulametento
 * @author Saulo Gomes
 */

class Usarios {
    // atributos
    constructor(login, senha) {
        this.login = login // atributo público
        //--------------------------------------------------------
        let _senha = senha // atributo privado (encapsulamento)
        // método para obter a senha (get)
        this.getSenha = () => _senha
        // método para modificar a senha (set)
        this.setSenha = (novaSenha) => _senha = novaSenha 
        //--------------------------------------------------------
    }
    // métodos
    logar() {
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === "admin" && this.getSenha() === "123@senac") {
            console.log("Usuário autenticado")

        } else {
            console.log("Usuário e/ou senha inválido(s)")
        }
    }
}

// Sistema
console.clear()
// novo usuário 

const user1 = new Usarios("admin", "123456")
user1.logar()
user1.setSenha("123@senac") //setar a senha do usuário
user1.logar()


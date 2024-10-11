/**
 * Treino Sistema de Login
 * @author Saulo Gomes
 */


class Usuario {

    constructor(login,senha){
        this.login = login
        this. _senha = senha
        this.getSenha = () => this._senha
        this.setSenha = (novaSenha) => _senha = novaSenha
    }
}
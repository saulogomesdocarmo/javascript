


function buscarEndereco() {
    let cep = document.getElementById('cep').value
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`

    if(nome)

    fetch(urlAPI)
        .then(response => response.json())
        .then(dados => {
            document.getElementById('logradouro').value = dados.logradouro
            document.getElementById('bairro').value = dados.bairro
            document.getElementById('cidade').value = dados.localidade
            document.getElementById('uf').value = dados.uf;
            document.getElementById('cel').value = dados.ddd
        })
        .catch(error => console.error('Erro ao buscar o endereço:', error))
}
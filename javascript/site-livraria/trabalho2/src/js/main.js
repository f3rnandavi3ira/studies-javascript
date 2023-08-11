const cep = document.querySelector("#cep") //constante para recupeção dos dados informados pelo usuário no campo CEP, do formulário para cadastro de usuário.

//constante com uma função para tratar os dados retornados pela api e preencher nos campos do formulário para cadastro de usuário.
const showData = (result)=>{

    //para cada campo que o result (retorno da pesquisa via api) retornar, armazene na constante campo.
    for (const campo in result){

        //condição para analisar se o campo retornado na consulta, está no formulário para cadastro de usuário. Análise é realizada através do ID informado no input de cada campo do formulário.
        if(document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result [campo] //comando para recuperar o valor através do ID e preencher automaticamente o campo do formulário. Dados foram tratados como array, para não precisar criar um comando para cada campo.

        }
        
    }
}

// evento criado para iniciar a função depois que o campo CEP sair de foco (quando o usuário clicar em TAB ou selecionar o próximo campo).
cep.addEventListener("blur", (e)=>{ //função para capturar o evento.

    let search = cep.value.replace("-", "") //variável para recuperação do valor informado na constante CEP declarada acima e replace para realizar a subtituição do traço informado no CEP, por nada, para formatar os dados da maneira que deve ser enviado na requisição (00000000).

    //constate para definir os parametros para envio da requisição
    const options = {
        method: 'GET',
        mode: 'cors', //parametro para informar que são servidores de origens distintas.
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options) //acessar a url da api com os parametros passados na constante options e com o CEP informado pelo usuário e formatado na variável search.

    //caso o retorno da promessa para consulta da url, dê certo, a função abaixo deve retornar os dados no formato json 
    .then(response => {response.json() //obs: response não está entre parênteses pois possui apenas um paramêtro.
        .then(data => showData(data)) // caso o retorno da promessa, para trazer os dados em formato json, dê certo, retorne os dados e execute a função showData passando os dados retornados como parâmetro.
    })

    //caso o retorno da promessa dê errado, capture a mensagem de erro e mostre no log.
    .catch(e => console.log("Deu Erro: " + e,message))
    console.log(cep.value)
})
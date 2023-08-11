    // Função para realizar o carregamento das páginas quando o usuário clicar na área que deseja acessar. Essa função foi criada com o parâmetro "url", para que todas as abas/páginas pudessem ser contempladas nessa regra, sem a necessidade de criar uma chamada para cada local a ser acessado.
    function carregarPagina(url) {
      let xhttp = new XMLHttpRequest(); //objeto para iniciar o ajax.

      //evento para verificação da mudança de status da propriedade "readystate". Função criada a partir desse evento para validação, caso o retorno desse status seja concluído com sucesso (4 ou 200, ambos são concluído), então o conteúdo da página atual deve ser alterado com as informações da página solicitada.
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("conteudo").innerHTML = this.responseText;
            }
      };

      xhttp.open("GET", url, true); //parametros para início da requisição. Método de envio: GET, a url infomada no parametro da função "carregarPagina", true para que o modo de tratamento seja assíncrono.
      
      xhttp.send(); //parâmetro para envio de informações está vazio, pois o intuito é apenas recuperar informações.
    }

 





    

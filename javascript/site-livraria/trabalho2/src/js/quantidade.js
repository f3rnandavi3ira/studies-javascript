// Obter todas as instâncias dos botões de quantidade
const quantidadeBotoesMenos = document.querySelectorAll('.quantidade-btn-menos');
const quantidadeBotoesMais = document.querySelectorAll('.quantidade-btn-mais');

// Adicionar eventos de clique aos botões de quantidade
quantidadeBotoesMenos.forEach(botao => {
  botao.addEventListener('click', decrementarQuantidade);
});

quantidadeBotoesMais.forEach(botao => {
  botao.addEventListener('click', incrementarQuantidade);
});

// Função para decrementar a quantidade
function decrementarQuantidade(event) {
  const input = event.target.nextElementSibling;
  const valorAtual = parseInt(input.value);
  if (valorAtual > 1) {
    input.value = valorAtual - 1;
  }
}

// Função para incrementar a quantidade
function incrementarQuantidade(event) {
  const input = event.target.previousElementSibling;
  const valorAtual = parseInt(input.value);
  input.value = valorAtual + 1;
}
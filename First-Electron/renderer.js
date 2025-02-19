// Seleciona o botão e o elemento onde o número será exibido
const botaoGerar = document.getElementById('gerarNumero');
const elementoNumero = document.getElementById('numero');

// Adiciona um evento de clique ao botão
botaoGerar.addEventListener('click', () => {
  // Gera um número aleatório entre 0 e 100
  const numeroAleatorio = Math.floor(Math.random() * 101);

  // Atualiza o conteúdo do elemento com o número gerado
  elementoNumero.textContent = numeroAleatorio;
});
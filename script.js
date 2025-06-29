let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;

function verificarPalpite() {
  const input = document.getElementById("palpite");
  const mensagem = document.getElementById("mensagem");
  const tentativasSpan = document.getElementById("tentativasRestantes");

  const palpite = Number(input.value);

  if (palpite < 1 || palpite > 100) {
    mensagem.textContent = "Por favor, digite um número entre 1 e 100.";
    return;
  }

  tentativas--;

  if (palpite === numeroSecreto) {
    mensagem.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto}!`;
    input.disabled = true;
  } else if (tentativas === 0) {
    mensagem.textContent = `😢 Fim de jogo! O número era ${numeroSecreto}.`;
    input.disabled = true;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "Muito baixo! Tente novamente.";
  } else {
    mensagem.textContent = "Muito alto! Tente novamente.";
  }

  tentativasSpan.textContent = tentativas;
  input.value = "";
  input.focus();
}
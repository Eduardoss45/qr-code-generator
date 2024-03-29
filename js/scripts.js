const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Eventos

// Função para gerar o QR Code
function generateQrCode() {
  // Obtém o valor do input
  const qrCodeInputValue = qrCodeInput.value;

  // Verifica se o input está vazio
  if (!qrCodeInputValue) return;

  // Atualiza o texto do botão para indicar que o QR Code está sendo gerado
  qrCodeBtn.innerText = "Gerando código...";

  // Define a fonte da imagem do QR Code com base no valor do input
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  // Adiciona a classe "active" ao contêiner para exibir o QR Code
  container.classList.add("active");

  // Evento para verificar quando a imagem do QR Code é carregada
  qrCodeImg.addEventListener("load", () => {
    // Atualiza o texto do botão e adiciona a classe "active" ao contêiner quando o QR Code é gerado
    qrCodeBtn.innerText = "Código criado!";
    container.classList.add("active");
  });
}

// Evento de clique no botão para gerar o QR Code
qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

// Evento de pressionar a tecla "Enter" para gerar o QR Code
qrCodeBtn.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

// Evento para limpar a área do QR Code quando o input é alterado
qrCodeInput.addEventListener("keyup", () => {
  // Verifica se o input está vazio
  if (!qrCodeInput.value) {
    // Adiciona a classe "active" ao contêiner e restaura o texto do botão
    container.classList.add("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});

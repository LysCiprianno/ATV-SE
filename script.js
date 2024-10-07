let randomNumber = Math.floor(Math.random() * 10) + 1; // Gera um número aleatório entre 1 e 10
let attempts = 3; // Número de tentativas
 
document.getElementById("submitBtn").onclick = function() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const resultMessage = document.getElementById("resultMessage");
 
    if (guess === randomNumber) {
        resultMessage.textContent = "Parabéns! Você acertou o dígito favorito! 👶🏽";
    } else {
        attempts--; // Diminui o número de tentativas
 
        if (attempts > 0) {
            resultMessage.textContent = guess < randomNumber ?
                "Tente um número maior! Tentativas restantes: " + attempts :
                "Tente um número menor! Tentativas restantes: " + attempts;
        } else {
            resultMessage.textContent = "Game Over! O número era " + randomNumber + ".";
        }
    }
};
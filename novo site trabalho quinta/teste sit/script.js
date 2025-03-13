// Alternância de imagens do carrossel
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");

function changeImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
}

setInterval(changeImage, 3000); // Muda a imagem a cada 3 segundos

// Interatividade do formulário
document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    document.getElementById("msg-sucesso").classList.remove("hidden");

    // Resetando os inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
});

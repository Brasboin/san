const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura?',
  'Piensalo bien',
  'Pinguizebra',
  'Mira el otro botón'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})
let noButton = document.getElementById("no");
let ButtonYes = document.getElementById("yes");
let clickCount = 0;
let addedImage = null; // Variable para almacenar la imagen agregada

noButton.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 3) {
    addedImage = document.createElement("img");
    addedImage.src = "./assets/a.png"; // Asegúrate de tener esta imagen en tu carpeta
    addedImage.width = 200;
    addedImage.style.position = "absolute";
    addedImage.style.left = noButton.offsetLeft + "px";
    addedImage.style.top = (noButton.offsetTop + 100) + "px";
    addedImage.style.zIndex = "10";

    document.body.appendChild(addedImage);
  }

  if (clickCount === 8 && addedImage) {
    removeImage();
  }
});

buttonYes.addEventListener("click", () => {
  removeImage();
});

// Función para eliminar la imagen
function removeImage() {
  if (addedImage) {
    addedImage.remove();
    addedImage = null;
    clickCount = 0; // Reiniciar el contador
  }
}
document.getElementById("yes").addEventListener("click", function() {
  window.location.href = "flower.html";
});

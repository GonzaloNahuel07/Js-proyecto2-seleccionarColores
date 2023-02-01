const colorInput = document.querySelector("#inputColor");
const boton = document.querySelector("#button");
const textoHexa = document.querySelector("#textoHexa");
const cardColor = document.querySelector("#cardColor");

console.log(colorInput.value);

boton.addEventListener('click', () => {
    console.log(colorInput.value)

    textoHexa.textContent = colorInput.value;
    cardColor.style.backgroundColor = colorInput.value;
});
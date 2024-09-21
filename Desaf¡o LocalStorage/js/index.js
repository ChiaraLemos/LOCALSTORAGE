document.addEventListener("DOMContentLoaded", () => {
//creo las constantes ara el boton y el input que contiene el texto
const inputText = document.getElementById("inputText");
const boton = document.getElementById("buttonText");
// agreg un evento al boton guardar al dar click en el mismo
boton.addEventListener("click", () => {
    // creo una constante para llamar al valor que se le ingrese a input
    const datos =  inputText.value;
    // guardo en el local storage, en info los datos
    localStorage.setItem("storedData", datos);
    inputText.value = "";
});
});


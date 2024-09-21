// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => { 
    // creo la constante span que esta en el data.html
    const span = document.getElementById("data");
    // creo la constante info llamando a el valor almacenado en el local storage
    const storedData = localStorage.getItem("storedData");
    // le agrego en forma de texto al span la info del local Storage
    span.textContent = storedData ? storedData : "No hay datos almacenados";

  });
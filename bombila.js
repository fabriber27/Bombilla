// Seleccionar els elements del DOM
const bombilla = document.getElementById("bombilla"); // La imatge de la bombeta
const botoEnces = document.getElementById("ences"); // Botó d'encendre
const botoApagat = document.getElementById("apagat"); // Botó d'apagar
const barraIntensitat = document.getElementById("intensitat"); //Barra intensitat

// Event per encendre la bombeta
botoEnces.addEventListener("click", function() {
    bombilla.src = "https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20bombilla/on.jpg?raw=true"; // Canvia la imatge a encesa
    botoEnces.style.display = "none"; // Amaga el botó d'encendre
    botoApagat.style.display = "inline"; // Mostra el botó d'apagar
});

// Event per apagar la bombeta
botoApagat.addEventListener("click", function() {
    bombilla.src = "https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20bombilla/off.jpg?raw=true"; // Canvia la imatge a apagada
    botoApagat.style.display = "none"; // Amaga el botó d'apagar
    botoEnces.style.display = "inline"; // Mostra el botó d'encendre
});
// Event per reduir opacitat
barraIntensitat.addEventListener("input", function(event){
    bombilla.src = "https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20bombilla/on.jpg?raw=true";
    bombilla.style.opacity = event.target.value /10;
})

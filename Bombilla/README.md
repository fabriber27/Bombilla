<!DOCTYPE html>
<html lang="es">
<head>
    <title>Bombilla</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <script src="bombila.js"></script>

        <img id="llum" src="https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20bombilla/on.jpg?raw=true" alt="on">
        <img id="fosc" src="https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20bombilla/off.jpg?raw=true" alt="off">
        <button id="ences"><img src="https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20bombilla/bon.jpg?raw=true" alt="bON"></button>
        <button id="apagat"><img src="https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20bombilla/boff.jpg?raw=true" alt="bOFF"></button>
</body>



const bombillaEncendida = document.getElementById("llum");
const bombillaApagada = document.getElementById("fosc");
const botonEncendido = document.getElementById("ences")
const botonApagado = document.getElementById("apagat")

botonEncendido.addEventListener("click", function(){
    bombillaApagada.style.display = "none";
    bombillaEncendida.style.display = "block"
    botonEncendido.hidden
})
botonApagado.addEventListener("click", function(){
    bombillaEncendida.style.display = "none";
    bombillaApagada.style.display = "block";
})
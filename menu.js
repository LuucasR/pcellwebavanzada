document.querySelector(".menures").addEventListener("click", efecto);

var line1= document.querySelector(".linea1");
var line2= document.querySelector(".linea2");
var line3= document.querySelector(".linea3");

var  menuresbefore= document.querySelector(".contenidomenures");



function efecto(){
    line1.classList.toggle("lineas1");
    line2.classList.toggle("lineas2");
    line3.classList.toggle("lineas3");

    menuresbefore.classList.toggle("contenidomenuresbefore");
}


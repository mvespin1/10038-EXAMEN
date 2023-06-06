
function mostrarimg(){
document.getElementById('cont2').innerHTML='<img src="images/firefox.png">';
}

function grupo() {
    var demo = document.getElementById("grupo");
    demo.style.color = "green";
}

function myFunction() {
    var x = document.getElementsByClassName("example");
    x[0].innerHTML = "Hola Mundo";
}   

function addText() {
    var para = document.getElementsByName("demoPara");
    para[0].innerHTML="Texto cambiado!";
    para[1].innerHTML = "El grupo 03 "
      + "ha realizado esto con JavaScript";
}

function displayPhrase()
{
    document.getElementById("p1").innerHTML = "Este texto fue remplazado";
}

function formsfuncion() {
    var txt = document.getElementById(
      "idformulario1").id;

    document.getElementById(
      "forms1").innerHTML = txt;
}

//EJEMPLO 1 EVENT_LISTENER
document.getElementById("boton").addEventListener("click", cambioColor);

  function cambioColor() {
    var div = document.getElementById("division");
    div.style.backgroundColor = "skyblue";
  }

//EJEMPLO 2 EVENT_LISTENER
var x = document.getElementById("boton2");
x.addEventListener("mouseover", cambioColor1);
x.addEventListener("click", cambioColor2);
x.addEventListener("mouseout", cambioColor3);

function cambioColor1() {
  div = document.getElementById("division2");
  div.style.backgroundColor = "skyblue";
}

function cambioColor2() {
  div = document.getElementById("division2");
  div.style.backgroundColor = "red";
}

function cambioColor3() {
  div = document.getElementById("division2");
  div.style.backgroundColor = "orange";
}

//EJEMPLO 3 EVENT_LISTENER
window.addEventListener("click", cambiarTexto);

function cambiarTexto() {
  var text = document.getElementById("demo3").innerHTML = "Texto Cambiado";
}

//EJEMPLO 4 EVENT_LISTENER
let texto1 = 'HOLA A ';
let texto2 = 'TODOS';

document.getElementById("boton4").addEventListener("click", function() {
  unirTextos(texto1, texto2);
});

function unirTextos(a, b) {
  document.getElementById("demo4").innerHTML = a + b;
}

//EJEMPLO 5 EVENT_LISTENER
document.getElementById("divisionEj5_2").addEventListener("click", function() {
  alert("CIRCULO NEGRO");
}, false);

document.getElementById("divisionEj5_1").addEventListener("click", function() {
  alert("CIRCULO VERDE");
}, false);

document.getElementById("divisionEj5_4").addEventListener("click", function() {
  alert("CIRCULO NEGRO");
}, true);

document.getElementById("divisionEj5_3").addEventListener("click", function() {
  alert("CIRCULO VERDE");
}, true);

//EJEMPLO 6 EVENT_LISTENER
document.getElementById("division6").addEventListener("mouseover", cambioColor6);

  function cambioColor6() {
    div = document.getElementById("division6");
    div.style.backgroundColor = "skyblue";
  }

  function removerFuncionColor() {
    document.getElementById("division6").removeEventListener("mouseover", cambioColor6);
    div.style.backgroundColor = "greenyellow";

  }

//EJEMPLO 1 NAVEGATION NODE
var valorNodoHijo = document.getElementById("hijo1").firstChild.nodeValue;
document.getElementById("hijo2").innerHTML = valorNodoHijo;

//EJEMPLO 4 NAVEGATION NODE
document.getElementById("titulo").innerHTML = document.getElementById("parrafo").nodeName;

//EJEMPLO 5 NAVEGATION NODE
document.getElementById("parrafoEj4_1").innerHTML = document.getElementById("tituloEj4_1").nodeType;
document.getElementById("parrafoEj4_2").innerHTML = document.getElementById("tituloEj4_2").nodeType;
document.getElementById("parrafoEj4_3").innerHTML = document.getElementById("tituloEj4_3").nodeType;


intro.style.backgroundColor = '#00FFFF';
//animaciones
//** inclinado */
function animateTrain() {
  let start = Date.now();
  let train = document.getElementById('train');

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    train.style.left = timePassed / 5 + 'px';

    if (timePassed > 2000) clearInterval(timer);
  }, 20);
}

document.getElementById('train').onclick = animateTrain;

document.getElementById('retryButton').onclick = function () {
  let train = document.getElementById('train');
  train.style.left = '0px';
  animateTrain();
};









//nodos
const para = document.createElement("p");
const node = document.createTextNode("Parrafo de prueba añadido mediante nodo");
para.appendChild(node);
const element = document.getElementById("div1.1");
element.appendChild(para);

function myFunction1() {
  document.getElementById("p1.1").remove();
}
//colecciones

function mifuncolecc1() {
  const myCollection = document.getElementsByTagName("p");
  for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.backgroundColor = "yellow";
  }
}

function mifuncolecc2() {
  const myCollection = document.getElementsByTagName("p");
  for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.backgroundColor = "white";
  }
}

function mifuncolecc3() {
  const myCollection = document.getElementsByTagName("p");
  for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = "blue";
  }
}

function mifuncolecc4() {
  const myCollection = document.getElementsByTagName("p");
  for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = "black";
  }
}



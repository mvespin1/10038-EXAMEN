//animaciones
//** inclinado */
function izquierda() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.right = pos + 'px';
        }
    }
}

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



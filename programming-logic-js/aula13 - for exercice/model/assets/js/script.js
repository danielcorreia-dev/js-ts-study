const boxContainer = document.querySelector(".box-container");

const elements = [
  { tag: "p", texto: "Lorem Ipsum" },
  { tag: "div", texto: "Teste" },
  { tag: "footer", texto: "Texto 3" },
  { tag: "section", texto: "Texto 4" },
];

function addElement() {
  
  for(i = 0; i < elements.length; i++) {
    let { tag, texto } = elements[i];
    
    let tagElem = document.createElement(tag)
    tagElem.innerHTML = texto
    boxContainer.appendChild(tagElem)
  }
}

addElement();
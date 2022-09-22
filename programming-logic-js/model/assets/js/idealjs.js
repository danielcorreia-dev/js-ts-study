const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const heightInput = e.target.querySelector("#height");
  const weightInput = e.target.querySelector("#weight");

  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  if (!height){
    setResult('Invalid number', false);
    return;
  }

  if (!weight){
    setResult('Invalid number', false);
    return;
  }

});

function setResult(msg, isValid) {
  const resultado = document.querySelector(".result");
  resultado.innerHTML = "";

  const p = createParagraph();
}

function createParagraph() {
  const p = document.createElement("p");
 // p.classList.add(className);
}

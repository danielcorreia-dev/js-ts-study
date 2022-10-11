// The ideal is to create minimal functions to every single thing, abstraction and refactoriz

(function () {
  const height = document.querySelector("#height");
  const weight = document.querySelector("#weight");
  const addResult = document.querySelector(".result");
  const cta = document.querySelector(".cta");

  cta.addEventListener("click", (e) => {
    e.preventDefault();
    let imc;
    let imcInfo;

    const weightNum = Number(weight.value).toFixed(2);
    const heightNum = Number(height.value).toFixed(2)

    if(weightNum || heightNum == typeof NaN){
      console.log("teste")
    }

    imc = Number(weightNum / heightNum ** 2).toFixed(2);
    addResult.classList.add("on");
    if (imc < 18.5) {
      imcInfo = "below the normal weight";
    } else if (imc >= 18.5 && imc <= 24.9) {
      imcInfo = "with normal weight";
    } else if (imc >= 25 && imc <= 29.9) {
      imcInfo = "with overweight";
    } else if (imc >= 30 && imc <= 34.9) {
      imcInfo = "with level I obesity";
    } else if (imc >= 35 && imc <= 39.9) {
      imcInfo = "with level II obesity";
    } else if (imc >= 40) {
      imcInfo = "with level III obesity";
    }

      addResult.innerHTML = `Your IMC is ${imc}, you're ${imcInfo}`;
  });
})();

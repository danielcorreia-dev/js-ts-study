(() => {
  const hourBox = document.querySelector(".two");
  hourBox.innerHTML = "";

  const p = document.createElement("p");
  hourBox.appendChild(p);

  p.innerHTML = DateFull();
})();

function DateFull() {
  const date = new Date();
  const options = {
    dateStyle: "full",
    timeStyle: "short",
  };
  return new Intl.DateTimeFormat("pt-br", options).format(date);
}

// The ideal is to create minimal functions to every single thing, abstraction and refactoriz

const heightForm = document.querySelector('#height')
const weightForm = document.querySelector('#weight')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Prevented Event")
});



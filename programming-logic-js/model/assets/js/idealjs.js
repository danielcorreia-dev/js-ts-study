const form = document.querySelector('form')
const heightForm = document.querySelector('#height')
const weightForm = document.querySelector('#weight')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Prevented Event")
})

function setResult(msg) {
    
}
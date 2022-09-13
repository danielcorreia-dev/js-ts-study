const getNumber = Number(prompt("Insert a number"))
const title = document.querySelector(".yournumber")
const bodyAnswers = document.querySelector(".answers") 

title.innerHTML += `This is your number ${getNumber}`
bodyAnswers.innerHTML += `Square root: ${getNumber ** 1/2} <br>${getNumber} is integer: ${Number.isInteger(getNumber)} <br>`
bodyAnswers.innerHTML += `Rounded to floor ${Math.floor(getNumber)} <br>`
bodyAnswers.innerHTML += `Rounded to ceil ${Math.ceil(getNumber)} <br>`
bodyAnswers.innerHTML += `Two decimal cases ${getNumber.toFixed(2)} <br>`

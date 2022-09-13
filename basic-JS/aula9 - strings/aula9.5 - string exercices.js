const answer = document.querySelector(".answers");
const nome = prompt("insert your full name");

function findNum(nameP) {
    let countName = nameP.split(' ')
    countName = countName.join('')
    return countName.length
}

console.log(findNum(nome))

function findRightName(namePerson) {
    let countName = namePerson.split(' ')
    countName = countName.join('')
    return countName
}


answer.innerHTML += `O seu nome é: ${nome}<br>`
answer.innerHTML += `Seu nome tem ${findNum(nome)} letras<br>`
answer.innerHTML += `The second letter of your name is: ${findRightName(nome).charAt(1)}<br>`
answer.innerHTML += `Qual é o primeiro indice da letra a no seu nome: ${findRightName(nome).indexOf("a")}<br>`
answer.innerHTML += `Qual é o ultimo indice da letra a no seu nome: ${findRightName(nome).lastIndexOf("a")}<br>`
answer.innerHTML += `As últimas três letras do seu nome são: ${findRightName(nome).slice(-3)}<br>`
answer.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br>`
answer.innerHTML += `Seu nome com letras maisculas: ${nome.toUpperCase()}<br>`
answer.innerHTML += `Seu nome com letras minusculas: ${nome.toLowerCase()}`
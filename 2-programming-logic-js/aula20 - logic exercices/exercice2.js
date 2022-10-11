const ePaisagem = (width, height) => (width > height ? true : false);
const ePaisagemImproved = (width, height) => width > height; // It's alredy going to return true or false

console.log(ePaisagem(100, 20));

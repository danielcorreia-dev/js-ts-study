const boxParagraph = document.querySelector('.paragraph');
const ps = boxParagraph.querySelectorAll('p');

const stylesBody = getComputedStyle(document.querySelector('main'));
const backgroundColorS = stylesBody.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = backgroundColorS;
  p.style.color = 'white'
  p.style.padding = '10px 10px'
  p.style.borderRadius = '5px'
}

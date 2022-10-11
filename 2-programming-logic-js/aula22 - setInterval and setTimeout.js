function showHour() {
  const date = new Date();

  return new Intl.DateTimeFormat('pt-br', {
    timeStyle: 'short',
    dateStyle: 'short',
  }).format(date);
}

console.log(showHour());
const ping = setInterval(() => {
  console.log(showHour());
}, 1000);

setTimeout(() => {
  clearInterval(ping);
}, 3000);

setTimeout(() => {
  console.log('It stopped');
}, 5000);

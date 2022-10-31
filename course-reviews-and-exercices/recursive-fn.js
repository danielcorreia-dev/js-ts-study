// Recursive with two parameters.
function countToTen(start, end) {
  if(start > end) return;
  console.log(start);
  start += 1;
  countToTen(start, end);
}

countToTen(100, 120);

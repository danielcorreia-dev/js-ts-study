const date = new Date();
let weekDay = date.getDay();

switch (weekDay) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("This day doesn't exist")
    break;
}

function getDay(weekDay) { // In a function, instead of using break, you can directly return the result
  switch (weekDay) {
    case 0:
      return console.log("Sunday");
    case 1:
      return console.log("Monday");
    case 2:
      return console.log("Tuesday");
    case 3:
      return console.log("Wednesday");
    case 4:
      return console.log("Thursday");
    case 5:
      return console.log("Friday");
    case 6:
      return console.log("Saturday");
    default:
      return console.log("This day doesn't exist");
  }
}

getDay(2);

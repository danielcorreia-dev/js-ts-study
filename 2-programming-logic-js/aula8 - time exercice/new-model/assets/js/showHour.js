(() => {
  const hourBox = document.querySelector(".one");
  hourBox.innerHTML = "";

  const p = document.createElement("p");
  hourBox.appendChild(p);

  p.innerHTML = getDateString();
})();

function getDateString() {
  const time = new Date();

  const today = dayString(time.getDay());
  const hour = zeroToLeft(time.getHours());
  const minutes = zeroToLeft(time.getMinutes());
  const day = time.getDate();
  const month = getMonth(time.getMonth());
  const year = time.getFullYear();

  return `${today}, ${day} ${month} of ${year}. ${hour}:${minutes}`;
}

function dayString(day) {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}

function getMonth(month) {
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "Septmeber";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
}

function zeroToLeft(num){
  return num >= 10 ? num : `0${num}`
}
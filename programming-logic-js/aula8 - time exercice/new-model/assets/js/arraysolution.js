(() => {
  const hourBox = document.querySelector(".three");
  hourBox.innerHTML = "";

  const p = document.createElement("p");
  hourBox.appendChild(p);

  p.innerHTML = getDateString();
})();

function getMonthString(monthNum) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthNum];
}

function dayString(day) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}

function zeroToLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

function getDateString() {
  const time = new Date();

  const today = dayString(time.getDay());
  const hour = zeroToLeft(time.getHours());
  const minutes = zeroToLeft(time.getMinutes());
  const day = time.getDate();
  const month = getMonthString(time.getMonth());
  const year = time.getFullYear();

  return `${today}, ${day} ${month} of ${year}. ${hour}:${minutes}`;
}

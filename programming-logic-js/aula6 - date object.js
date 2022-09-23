// const date = new Date(0); // Date(0) --> Milesiums of a second ||Initial date 01/01/1970 -> unix date
// const threeHours = 60 * 60 * 3 * 1000; // All the numbers are in miliseconds
// const oneDay = 60 * 60 * 24 * 1000;
// const date = new Date(0 + oneDay + threeHours) // 02/01/1970

// const date = new Date(2019, 1, 14, 16,38,43, 500) // year, month[0-11], day, hour, minute, seconde, milisecond
const date = new Date('2019-02-20 20:34:31.200') // Pattern to write in string
console.log('day', date.getDate());
console.log('month', date.getMonth()); // Month starts from [0-11] || 0 --> January
console.log('year', date.getFullYear());
console.log('hour', date.getHours());
console.log('minute', date.getMinutes());
console.log('second', date.getSeconds());
console.log('milisecond', date.getMilliseconds());
console.log('week day', date.getDay()); // Day starts from [0-6] || 0 --> Sunday

console.log(date.toString());
console.log(Date.now()); // From day 0 unix to now in miliseconds

function zeroToLeft(num){
    return num >= 10 ? num : `0${num}`;
}

function makeDate(data) {
    
    const day = zeroToLeft(data.getDate());
    const month = zeroToLeft(data.getMonth() + 1);
    const year = zeroToLeft(data.getFullYear());
    const hour = zeroToLeft(data.getHours());
    const minutes = zeroToLeft(data.getMinutes());
    const seconds = zeroToLeft(data.getSeconds());
    
    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`
}

const dateNew = new Date();
const brazilDate = makeDate(dateNew);
console.log(brazilDate)
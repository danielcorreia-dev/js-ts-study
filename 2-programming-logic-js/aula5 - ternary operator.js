// ? : -> this guys correlate to an if else, making it shorter and readable
// (condition) ? (true value) : (false value)

const userPoints = 999;
let userColor = null;

// if (userPoints >= 1000) {
//     userRank = 'VIP USER';
// } else {
//     userRank = 'Normal User';
// }

const userRank = userPoints >= 1000 ? 'VIP USER' : 'Normal User'
if(userRank === 'VIP USER') userColor = 'Pitch Black'
const defaultColor = userColor || 'Dark Black'; // 'Dark Black' is the fallback, wich means that the variable it'll always have a value. 

console.log(userRank, defaultColor)



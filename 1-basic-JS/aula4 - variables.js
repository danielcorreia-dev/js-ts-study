var study; // used with a global scope, so it can be use for any part of the code
let javascript; // used with an instance scope, only works within the block or function established
const typescript = 1; // it can never change when the code is running

/********* Variables constraints and differences **********************
 * They're case-sensitive
 * We can't redeclare let variables.
 * It's a convention to write variables with significates names, shorts and objectives;
 * Usually with composite names they're wrote with camelCase. ex.: importantName;
 * You can set a unintialized var/let, which it means that you can reserve a name without a value defined;
 * With constants you need to initialize with a value;
 * You can't create variables with reserved words from the language like if, else, console, etc;
 * You also can't create a variable starting with a number or contain spaces and dashes in it;
 * For JS, always use let or const.
*********************************************************************/ 
var empty1;
let empty2;
const fullfilled = [];


const numbertest = "1"

console.log(typeof numbertest) // type of used to know what type is the variable called 
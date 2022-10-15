/**
 * Logical operators and the short-circuit arcthecture
 * && -> false && true -> false = "the actual value"
 * FALSY VALUES
 * false
 * 0
 * "" `` '' -> an empty string
 * null // undefined
 * NaN
 * Anything that differs from falsy will be evaluated true in JS
 *
 * || -> true || false -> true -> it'll return the true value
 */

console.log('Daniel' && 'Correia'); // Will return the last value, since there isn't a false value, in this case, 'Correia'

console.log('Daniel' && false && 'Correia'); // Will return the false, 'cause it's a determined false value
console.log('Daniel' && '' && 'Correia'); // Will return the '', 'cause it's a determined false value
console.log('Daniel' && 0 && 'Correia'); // Will return the 0, 'cause it's a determined false value
console.log('Daniel' && NaN && 'Correia'); // Will return the NaN, 'cause it's a determined false value
console.log('Daniel' && null && 'Correia'); // Will return the null, 'cause it's a determined false value
console.log('Daniel' && undefined && 'Correia'); // Will return the undefined, 'cause it's a determined false value
console.log('Daniel' && 'Brunna' && 4); // Will return the 4, 'cause all arguments are true

// You can use this system to improve perfomance and write less code, below some simple examples

function hello() {
  return 'hello';
}

const willExecuteFalse = false;
const willExecuteTrue = true;

console.log(willExecuteFalse && hello()); // Will return false, because it's willExecuteFalse is false
console.log(willExecuteTrue && hello()); // Will return "hello", because all the sentence is true

// ||

console.log(0 || 'The truly value' || null || undefined || NaN || '' || false); // Will return 'The truly value', because it's gonna return the true value
console.log(willExecuteFalse || hello() || true || willExecuteFalse); // Will return 'hello', because it's gonna return the first true value

// You can use this to create logical sensors in websites and kind of sorts such like

let userColor = null;
let defaultColor = 'black';

console.log(userColor || defaultColor); // black, cause user color is null, but what if
userColor = 'spacial blue';
console.log(userColor || defaultColor); // spacial blue, cause the operator return the first true value

// Others
const a = false;
const b = NaN;
const c = 0;
const d = '';
const e = undefined;

console.log(a || b || c || d || e); // When all of them are false it's gonna return the last value of them --> undefined

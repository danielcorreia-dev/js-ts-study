// String are iterable wich means that each character has an index number 01234567

let newString = "\"Example\""; // You can use slash to avoid the constraints of "" || '' || `` 

// Index manipulation
let newText = "new text"; // has 8 indexed numbers
console.log(newText.length); // find lenght of the string
console.log(newText.indexOf("text")); // will find the first index of the word / letter || = 4
console.log(newText.indexOf("Text")); // If he finds nothing it'll return -1
console.log(newText.indexOf("new", 4)); // will look for the index's word "new" above the index 4|| = -1
console.log(newText.lastIndexOf("n")); // will start looking from the last index to the first|| = 0

// Regular expressions
console.log(newText.match(/[a-z]/g)); // regular expression to find and return an array with all letters between a-z
console.log(newText.search(/[a-z]/g)); // regular expression to find and return the index that he found the letters between a-z
console.log(newText.replace('new', 'nova')); // it'll replace a text withing the string for other established
console.log(newText.replace(/w/, 'Opa')); // it'll replace a text withing the regular expression one time for other established
console.log(newText.replace(/t/g, 'Opa')); // it'll replace a text withing the regular expression in all the cases for other established

// String manipulation
console.log(newText.slice(0, 4)); // it will return 'new'
console.log(newText.slice(-3));// it will return 'ext' because is starting from the end of the string
console.log(newText.split(' ')); // will transform the string in an array, excluding the space
console.log(newText.split('t')); // same case but now will exclude the t's
console.log(newText.split('t', 1)); // same case but now will exclude only the word text

// String transformations
console.log(newText.toUpperCase()) // will return the whole string in uppercase letters
console.log(newText.toLowerCase()) // the same thing but now on lowercase

// Return a letter by his index
console.log(newText[5]); // it'll return 'e'
console.log(newText[10]); // it'll return undefined because is out of range
console.log(newText[-1]); // it'll return undefined because is out of range
console.log(newText.charAt(2)); // it'll return 'w'
console.log(newText.charAt(10)); // when is out of range it'll return nothing

// Ways to concatenate a string
console.log(newText.concat(' ' + 'another' + ' ' + 'text')); // Concatenate text by a function
console.log(newText.concat(' ','another', ' ','text')); // Concatenate text by a function
console.log(newText.concat(' another text')); // Concatenate text by a function
console.log(`${newText} another text`); // template string - the best method

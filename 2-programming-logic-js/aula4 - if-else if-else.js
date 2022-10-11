/**
 * if, else if and else are used to change the flux of the software
 * 0 - 11 // Good morning
 * 12 - 17 // Good afternoon
 * 18 - 23 // Good night
 * else == hello
 */

/** 
 * If can be used alone
 * Else if is dependent of an if
 * You can have multiple else ifs checking
 * You can only have ONE else
 * You can use only if and else
 * and the if alone as well
 * */ 

const hour = 50;
// If it's only one line of code you don't need to use braces
if(hour >= 0 && hour <= 11) 
    console.log("Good morning")
else if (hour >= 12 && hour <= 17) 
    console.log("Good afternoon")
else if (hour >= 18 && hour <= 23 ) 
    console.log("Good night")
else
    console.log("hello")

const haveMoney = true;
// If else depend on each other, which means that only of the two will execute
if(haveMoney) {
    console.log("I'm going out tonight")
}else 
    console.log("gonna stay at home")


// The flux command will always return the first true value of the chain

const number = 9
if(number >= 0 && number <= 3){
    console.log("The number is between 0 and 3")
}else if(1 === 1) {
    console.log("I told you")
}else if(number >= 4 && number <= 10)
    console.log("It wont reach it")
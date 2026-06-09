const name = "Ashutosh"
const repoCount = 5

//use of backticks
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String('Ashutosh')

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));

//console.log(gameName.indexOf('t'));

//console.log(gameName.substring(0,4));

//console.log(gameName.slice(-8,5));

// const newString = '   ashu  '
// console.log(newString.trim());  //trim exculde the spaces 

const url = "https//velora.com/velora%5shop"
console.log(url.replace('%5','-'));
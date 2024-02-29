const name ='rudra'
const age=36
const brotherName='sandeep'
const momName='dearmom'

// console.log(name +age); // concanet method
console.log(`hello my name is ${name} and my age is ${age}`);
console.log(`bro name ${brotherName} and my mother name is ${momName}`);

const gameName =new String ('rudra')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newString =gameName.substring(0,9)
console.log(newString);

const anotherString = gameName.slice(-2,4)
console.log(anotherString);

const url =" https://ubiquitous-potato-g96wjxj7g%20rghp9xp."
console.log( url.repeat('%20','-'));

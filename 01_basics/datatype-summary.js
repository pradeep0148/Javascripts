// # primitive
// 7 types : string ,Number, Boolean, null, undefined,symbol,BigInt
const score =33
const scoreValue=100.3

const isLoggedIn =false 
const outsideTemp = null
let userEmail;

const id =Symbol("122")
const anotherId = Symbol("122")
console.log(id === anotherId);

const bigNumber = 14154653124 

// Reference (non primitive)
// Array ,Objects, functions

const heros = ["shaktiman" , "naagraj", "doga"]
let myObj ={
    name:"rudra",
    age: 22,

}

 const myFunction = function(){
    console.log("hello world");

 }
console.log(typeof bigNumber);


//+++++++++++++++++++++++++++++++++++++ Memory ++++++++++++++++++

// stack(Priitive) , Heap (Non-Primitive)
let myYoutubename = "rudra.com"
let anOthername = myYoutubename
 anOthername= "rudra"
console.log(anOthername);
console.log(myYoutubename);

let userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"

}
let userTwo =userOne
userTwo.email="hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);


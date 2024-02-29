//  Array

const myArr = [0,1,2,3,4,5]
const myFnds = ["rahul","raj","shivam"]

const myArr2 =new Array(1,2,3,4)
// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9)
myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()


// console.log(myArr);
// console.log(newArr);


// slice , splice
// console.log("A", myArr);
// const myn1 =myArr.slice(1,3)
// console.log(myn1);
// console.log("B",myArr);

//************************************************************ */

const marvel_heros =["thor", "ironman","spiderman"]
const dc_heros = ["rudra","rahaul","raj"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros =marvel_heros.concat(dc_heros)
// console.log(allHeros);
const allNewHehros = [...marvel_heros,...dc_heros]
console.log(allNewHehros);



// const anotherarray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array =anotherarray.flat(Infinity)
// console.log(real_another_array);
console.log(Array.isArray("rudra"))




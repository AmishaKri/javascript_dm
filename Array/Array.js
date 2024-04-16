//.............Array...........................

const myArr = [0,1,2,3,4,5]

console.log(myArr[0]);

//Array methods

myArr.push(6)
myArr.pop()

myArr.unshift(9);// 9 1 2 3 4 5...
myArr.shift()// 1 2 3 4

myArr.includes(9)//false
myArr.indexOf(2);//3  int the case of absence 3

const newArr = myArr.join()// convert into String
//1,2,3,4 type string


//slice, splice

const myn1 = myArr.slice(1,3)// 2,3  create new array
const myn2 = myArr.splice(1,3)// 2,3,4

const marvel_heros = ["thor" , "Ironman", "Spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)//["thor" , "Ironman", "Spiderman",["superman","flash","batman"]]
console.log(marvel_heros)
console.log(marvel_heros[3][1])

marvel_heros.concat(dc_heros) //["thor" , "Ironman", "Spiderman",["superman","flash","batman"]]

const allHeros= marvel_heros.concat(dc_heros) 

const heros = [...marvel_heros, ...dc_heros]//["thor" , "Ironman", "Spiderman","superman","flash","batman"]
//spreading/....
console.log(heros)

const arr=[1,2,3[4,5,6],7,[4,6,7,[4,5]]]
const real=arr.flat(Infinity)
console.log(real)// 1 2 3 4 5 6 7 4 6 7 4 5

Array.isArray("HITESH")//FALSE

console.log(Array.from("Hitesh"))// ['H','i','t','e','s','h']

//Interview...........
console.log(Array.from({name:"amisha"}))//[] empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));//[100,200,300]







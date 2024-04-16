//............Dates...........

let myDate = new Date()
console.log(myDate)//2024-01-03T10:17:33.518Z

console.log(myDate.toString())//Wed Jan 03 2024 15:49:34 GMT+0530 (India Standard Time)

console.log(myDate.toISOString())//2024-01-03T10:19:34.647Z

console.log(myDate.toJSON())//2024-01-03T10:19:34.647Z

console.log(myDate.toLocaleString())//3/1/2024, 3:49:34 pm

console.log(myDate.toLocaleDateString())//3/1/2024

console.log(myDate.toDateString())//Wed Jan 03 2024

// Date............Object
console.log(typeof Date) // Object


//let createDate = new Date(2024,0,3) // 3/1/2024
//let createDate = new Date(2024,0,3, 5, 3) //3/1/2024 05:03:00
let createDate = new Date("01-14-2023") 

//console.log(createDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)// 16778900022344 ........miliseconds

console.log(createDate.getTime())

console.log(Math.floor(Date.now()/1000))// seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay())

//`${newDate.getDay}

newDate.toLocaleString('default',{
    weekday: 'long',
})
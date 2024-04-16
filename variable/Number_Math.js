const score = 400
//console.log(score);..... 400

const balance = new Number(100)
console.log(balance);// [Number: 100]

console.log(balance.toString().length);// 3
console.log(balance.toFixed(2)) // 100.00

const num = 23.8966
console.log(num.toPrecision(3)) // 23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'))// 10,00,000


Number.MIN_VALUE

//.......................Maths .....................

console.log(Math);

console.log(Math.abs(-4));//   4
console.log(Math.round(4.6));// 5
console.log(Math.ceil(4.2));// 5
console.log(Math.floor(4.9));// 4
console.log(Math.min(4,3,5,6,2));
console.log(Math.max(4,5,3,6,2));


console.log(Math.rondom());
console.log((Math.rondom()*10 )+1);

console.log(Math.floor(Math.rondom()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.rondom()*(max-min+1))+min);//   ans b/w 10 and 20
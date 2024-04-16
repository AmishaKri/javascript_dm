//console.log(2>1);
//console.log(2>=1);
//console.log(2==1);
//console.log(2<1);
//console.log(2!=1);

//console.log("2">1);  => true
//console.log("02">1); =>true


console.log(null > 0); //=>false
console.log(null == 0); // false
console.log(null >= 0);// true

//because == & comparison operator work differently , in comparison null converted to 0

console.log(undefined==0);//false
console.log(undefined>0);  //false
console.log(undefined<0); //false


//===
console.log("2"==2)//true
console.log("2"===2)//false
 //=== checks datatype and value 



 //Summary

 //Primitive
 //7types: String, Number,Boolean,null,Symbol,Underfined,BigInt


const BigNumber=2333994900409092n;
 //BigInt=> undefined
 
 const symbolit= Symbol("123"); //=>unique 

 //Non-Primitive (Reference)
 //Array,Objects,Function


 //...................Heap(Non-Primitive) and Stack(Primitive)...................>
 


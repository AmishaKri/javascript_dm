const myArr = []
%DebugPrint(myArr) //v8 jsvu

// Array of two types:  1
// 1. continious
// 2. Hopley

//SMI (small integer)
// Packed element
// Double (float, string, function)

const aa1 = [1,2,3,4,5]
//PACKED_SMI_ELEMENTS

arr2.psh(8.0)
//PACKED_DOUBLE_ELEMENTS

arr3.push('7')
//PACKED_ELEMENTS

arr[10]=11
//HOLEY_ELEMENTS

console.log(arr2)
console.log(arr2.length);
console.log(arr2[9])

//bound check
//hasOwnProperty(arr2,9)
//hasOwnProperty(arr2.prototype,10)
//hasOwnProperty(Object.prototype,10)

//holes are very expensive in js

const arr3=[1,2,3,4,5]
console.log(arr3[2]);

//SMI>DOUBLE>PACKED
//H_SMI>H_DOUBLE>H_PACKED


const arr4 =new Array(3)
//just 3 holes. HOLEY_SMI_ELEMENTS
arr[0]='1'//HOLEY_ELEMENTS
arr[1]='2'//HOLEY_ELEMENTS
arr[2]='3'//HOLEY_ELEMENTS

const arr5=[]
arr5.push('1')//PACKED_ELEMENTS

const arr6=[1,2,3,4,]
arr6.push(NaN)
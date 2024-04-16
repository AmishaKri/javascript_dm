function sayName(){
    console.log("A");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
}
console.log(sayName())//Amisha

function add(n1,n2){
console.log(n1+n2);
}
const result = add(3,5) //----------add()  NAN--------------------

console.log("Result:", result)

function add1(n1,n2){
    let result1 = n1+n2
    console.log("Hitesh");
    return result1;
    }


function login(username="sanju"){//================= bydefault ======================
    if(!username){//--------------- undefined ---------------------
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(login("amisha"))

function calculateCart(...num1){//....... rest.............
    return num1
}
function calculateCart(var1,var2,...num1){
    return var1,var2,num1 //var1=200 var2=400 num1=[500,2000]
}

console.log(calculateCart(200, 400, 500, 2000))//[200,400,500,2000]
const user = {
username: "amisha",
price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} ans price is ${anyobject.price}`)
}
//handleObject(user)

handleObject({
    username: "amisha",
price: 199
})

const myArr = [200,400,100,600]
function returnsecondvalue(getarray){
    return getarray[1]
}

console.log(returnsecondvalue(myArr))
console.log(returnsecondvalue([200,100,400]))
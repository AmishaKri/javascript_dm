//scope
//NOTE : browser scope and node scope are different


let a=300;//============= Global==========
if(true){
    let a=10;
    const b=20;
    var c=30;
    //console.log(a);//=================local or Block scope====================
    //console.log(a);
}
//console.log(a);


function one(){
    const username ="Amisha"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    console.log(username)
    two()//amisha
}
one()//amisha

if(true){
    const username ="amisha"
    if(username ==="amisha"){
        const website = "  youtube"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);



//================================Interesting =============================

addone(5) //6
function addone(num){//====================FUNCTION===================
    return num+1
}
addone(5) //6


addTwo(5)//================Error===============
const addTwo = function(num){          //----------------Expressions----------// term used as Hosting
    return num+2 
}

addTwo(5) //7

// es6  --2015

const user = {
    username : "Amisha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, good morning!!`)
        console.log(this);// ...context
    }

}
user.welcomeMessage();//amisha
user.username("sanju")

user.welcomeMessage();// sanju
console.log(this)// ==========In GUI..{} & In Browser---  window object =====interview question====


//===============  Array Function   =================

function chai(){
    let username = "amisha"
    console.log(this.username);//===============  undefined
    console.log(this);// something gives
}
chai()

const chai=function c(){
    let username = "amisha"
    console.log(this.username);//===============  undefined
    console.log(this);// something gives undefined
}
chai()

const chai =()=>{
    let username = "amisha"
    console.log(this.username);//===============  undefined
    console.log(this);// {}
}
chai()

// Array Function

const addTwo1 = (num1,num2)=>{
    return num1+num2
}
// implicit Array Function
const addTwo3 = (num1,num2)=>  num1+num2
const addTwo2 = (num1,num2)=>(num1+num2)
const addTwo5 = (num1,num2)=>({username: "amisha"})//  Object
console.log(addTwo(3,4))

//myArray.forEach(()=>())
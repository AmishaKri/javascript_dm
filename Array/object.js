//object create.. methods
//singleton....create by Constructor

//object literals
const mySym = Symbol("key1")

const jsuser = {
    name: "Amisha",
    "full name":"Amisha Kumari",
   // mySym: "mykey1",
    [mySym]: "mykey1",//.....symbol(key1)
    age: 18,
    location: "Jaipur",
    email: "amukumari3105@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday","Saturday"]
}

console.log(jsuser.email)//amukumari3105@gmail.com
console.log(jsuser["email"])// amukumari3105@gmail.com

//console.log(jsuser " email") //error

console.log(jsuser ["full name"])// Amisha Kumari
console.log(jsuser.mySym) //mykey1.........type string
console.log(jsuser[mySym])

jsuser.email = "amishagwp123@gmail.com"
Object.freeze(jsuser)// After this no change 

jsuser.email="amishakumari3105@gmail.com"
console.log(jsuser.email)//amishagwp123@gmail.com


jsuser.greeting = function(){
    console.log("hllo user");
}
//console.log(jsuser.greeting())// hllo user undefined
console.log(jsuser.greeting)//  function(anonymous)  reference
console.log(jsuser.greeting())//hello user
jsuser.greetingTwo = function(){
    console.log(`hello, ${this.name}`)//hello,Amisha
}
//console.log(jsuser.greetingTwo())//hello,Amisha


//const tinderUser = new Object()//singleton
//console.log(tinderUser)// {}

//.......object literals
const tinderUser ={}// {}

tinderUser.id ="123abc"
tinderUser.name = "Amisha"
tinderUser.isLoggedIn =false
console.log(tinderUser)//{ id: '123abc', name: 'Amisha', isLoggedIn: false }


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "kumar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1={1: "a",2: "b"}
const obj2 = {3:"a ",4: "b"}
const obj3= {5: "a",5: "b"}

//const obj3={obj1,obj2}

const obj4 = Object.assign({},obj1, obj2)// {}.........target array
console.log(obj4);// { '1': 'a', '2': 'b', '3': 'a ', '4': 'b' }

const obj5={...obj1, ...obj2, ...obj3}//{ '1': 'a', '2': 'b', '3': 'a ', '4': 'b' }

const user=[{

},{

},{

}]
user[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))// array return  [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))//[ '123abc', 'Amisha', false ]
console.log(Object.entries(tinderUser))//[ [ 'id', '123abc' ], [ 'name', 'Amisha' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true

//...........Destructuring...........

const course = {
    coursename: 'js in hindi',
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor} = course // destructring

console.log(courseInstructor)
const {courseInstructor: instructor} = course 
console.log(instructor);

// const navbar = ({props.company})=>{

// };
// const navbar = ({company})=>{

// };
// navbar(company="hitesh")

//..............   API ...................
//  {
//     "name" : "amisha",
//     "course":"js"
//  }
 //Randome User GENERATOR....BEST JSON formatter


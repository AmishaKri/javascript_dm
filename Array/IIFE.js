// Immediately Invoked Function Expressions (IIFE)

//function
function chai(){
    console.log('DB cONNECTED');
}
 chai()

 //IIFE =>========used to reduced GLOBAL Variable Pollution & Immediate Executution ====>
 (function chai(){
    console.log('DB cONNECTED');
}) ();


(()=>{
    console.log("Hello")
})()


(function chai(name){
    console.log(`DB cONNECTED ${name}`);
}) ("Amisha");



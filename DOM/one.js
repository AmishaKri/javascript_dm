//======== In Browser =========
// console.log(window) ==== all window property
//console.dir(document) ===== hidden fills
//console.log(document)
//console.log(document.baseURL);=========== these are html collection not array
//document.getElementById('firstHeading')
//document.getElementById('firstHeading').innerHTML="<h1>Chai aur Code</h1>"
document.getElementById('title')
document.getElementById('title').id// 'title

document.getElementById('title').class //undefined
document.getElementById('title').className //heading

document.getElementById("title").getAttribute('id')// title

document.getElementById('title').getAttribute('class')//heading

document.getElementById('title').setAttribute('test') // it can change the 'class' attribute to 'test' attribute // always override
document.getElementById('title').setAttribute('class','test')  //add attribute
document.getElementById('title').setAttribute('class','test','heading') 

document.getElementById('title')
const title = document.getElementById('title');
title.style.backgroundColor ='green'
title.style.padding ='15px'
title.style.borderRadius='20px'


//===================== TextContent  , innerHTML, innerText ===================

title // <h1 id="title" class="test handing">
title.textContent // 'DOM learning on Chai aur code test text'

title.innerText//DOM learning on Chai aur code  ========= not give the hidden codes

title.innerHTML // 'DOM learning on Chai aur code <span style ="display :none;"> test text" </span>

document.getElementsByClassName('heading')
//gives the HTMLCOLLECTIONS


//========================   QuerySelector =====================

document.querySelector('h1') // gives the first header h1
//<h1> amisha kumari </h1>

document.querySelector('#title') 
document.querySelector('.heading') 
document.querySelector('input')  //null
document.querySelector('input[type="password"]')  //<input type="password" id="input">
document.querySelector('p:first-child')
document.querySelector('ul') 
const myul =document.querySelector('ul') // undefined
myul.querySelector('li')
const turnGreen =myul.querySelector('li') //undefined
turnGreen.style.backgroundColor="green"//'green
turnGreen.style.padding="10px"//'10px'
turnGreen.innerText ="five"//'five

const turnGreen1 =myul.querySelectorAll('li')// NodeList(3) [li,li,li]

const templi =document.querySelectorAll('li') // it's not a pure array
templi.style.color = 'green' // error
templi[0].style.color='green'

const myH1=document.querySelectorAll('h1')
myH1// NodeList[h1#title.heading]
myH1.style.color='green'
myH1[0].style.color='green'
templi.forEach(function(li){
    li.style.color ='green'
})
 // ======================= VVI ===================
//  CONVERT HTMLCOLLECTION INTO ARRAY

const tempclass=document.getElementsByClassName('list-item')
tempclass.forEach(function(li){
    console.log(li) // ========= error
})

Array.from(tempclass) //converted into array
 tempclass.forEach(function (li){
    li.style.color='orange'
    return li;
 })

 


//16:00 Important discussion about NodeList. A nodelist is a collection of document nodes which includes text nodes , attribute nodes and element nodes. A line break is also counted in nodelist but only first one. All subsequent line breaks are ignored by browser

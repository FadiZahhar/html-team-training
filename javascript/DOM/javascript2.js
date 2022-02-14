// Dom 

// select the elemnet or grp of elements the you want to affect
// decide the rffect that we want to apply the selection

document.body.style.backgroundColor='#4a91a8';
document.body.style.color='white';
//1- getElementById 
document.getElementById('btn').style.color="white";

// assign to a variable 
const element =document.getElementById('btn');
element.style.borderBlockColor='gray';

// return a node object or a node list,which is an array like object

const btn =document.getElementById('btn');
const name=btn.nodeName;
const css=btn.style;
console.log(btn)// <button class="btn" id="btn" style=.....>Click me</button>
console.log(name)//BUTTON

// console.dir() 
//is the way to see all the properties of a specified JavaScript object in console by
// which the developer can easily get the properties of the object.
console.dir(document)
console.log(window)

//2- getElementsByTagName('tagname')
const items=document.getElementsByTagName('li');
items[1].style.color="red";
const betteritems=[...items]
betteritems.forEach(function(item){
item.style.backgroundColor="white"
item.style.color="black"
item.style.margin="4px 7px "
})

// 3- getElementsByClassName
document.getElementsByClassName('btn')

//4- querySelector('any css')- selects single 

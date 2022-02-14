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

items[0].style.color="red";
const betteritems=[...items]

betteritems.forEach(function(item){
item.style.backgroundColor="#aaafce"
item.style.margin="4px 7px "
})

// 3- getElementsByClassName
document.getElementsByClassName('btn')

//4- querySelector('any css')- selects single 
document.querySelector('#result').style.backgroundColor='beige'
document.querySelector('li:last-child').style.backgroundColor='lightblue'

//5- querySelector('any css')- selects single 
const all=document.querySelectorAll('.special1');
all.forEach(function(item){
 item.style.color="blue"
})

//childNodes:return all childNodes including whitespace whitch is treated as a text nodes

const Result=document.querySelector('#result1');
//childNodes
const allchildren=Result.childNodes;
console.log(allchildren)
const children=Result.children
console.log(children)
//firstChild :return whitespace
console.log(Result.firstChild)
//lastChild :return whitespace
console.log(Result.lastChild)

// parentElment
const heading=document.querySelector('h3');
const parent =heading.parentElement;
parent.style.backgroundColor='red';

//previousSibiling :returns the previous node of the specified node
//nextSibiling
const nextSibiling=heading.nextSibling.nextSibling;
// console.log(nextSibiling)//<h3>hello </h3>

//nextElementSibiling "without whitespace"
heading.nextElementSibling.style.color="yellow";

//nodeValue
const item= document.getElementById("nodevalue");
console.log(item.nodeValue)//null
console.log(item.firstChild.nodeValue)//Node Value
console.log(item.childNodes[0].nodeValue)//Node Value

//textContent 
const textcontent=item.textContent;
console.log(textcontent)//Node Value

//getAttribute
// The value of the class attribute of the  element id=result:
const first=document.querySelector("#result");
const classvalue=first.getAttribute("class");
console.log(classvalue)//ul_class

const link=document.getElementById("links");
const showlink=link.getAttribute("href");
console.log(showlink)//#
//setAttribute
const last=link.nextElementSibling;
last.setAttribute('class','newclassname');
last.textContent="i have a class of newclassname ";
console.log(last)
//<li class="newclassname" style="background-color: lightblue; margin: 4px 7px;">i have a class of newclassname </li>



//className :sets or returns an element's class attribute.
const FIRST=document.getElementById("First");
console.log(FIRST.className)// class=color 
//set class  
const Second=document.getElementById("Second");
Second.className='second';


//classList :returns the CSS classnames of an element.

const third=document.getElementById("Third");
third.classList.add('colors');
third.classList.add('text');
//or
// third.classList.add('colors','text')
const ClassValue=third.classList;
console.log(ClassValue)//DOMTokenList(2) ['colors', 'text', value: 'colors text']
third.classList.remove('text');
console.log(third.classList)//DOMTokenList ['colors', value: 'colors']

//we can check if particular element does have that class
let REsult=third.classList.contains('colors')
if(Result){
console.log('hello world ')
}else{
 console.log('does not have the class  ')

}
//1-

//CreateElement ('elemen')
// createTextNode('text content')
//element.appendChild(childelement)
//insertBefore('elemnt','location')

const Element =document.querySelector('#createElement');
const FiRst=document.querySelector('.red');
//create empty element 
const bodyDiv=document.createElement('div');

// create text node
const text=document.createTextNode('a simple body div');
bodyDiv.appendChild(text)
document.body.appendChild(bodyDiv)

//ex 2

const Heading=document.createElement('h2');
const HeadingText=document.createTextNode('dynamic heading');
Heading.appendChild(HeadingText)
Heading.classList.add('blue');

//insertBefore('elemnt','location')
Element.insertBefore(Heading,FiRst)

//replaceChild('new','old')
const SmallHeading=document.createElement('h6');
const SmallHeadingText=document.createTextNode('Small heading....');
SmallHeading.appendChild(SmallHeadingText)
SmallHeading.classList.add('red');
document.body.replaceChild(SmallHeading,bodyDiv)

//2- 
//prepend
//innerText
const HEADING=document.createElement('h1');
HEADING.innerText="i'm a dynamic heading"
document.body.prepend(HEADING)

//3- 
// remove
//removeChild

const RESULT=document.querySelector('#remove');
// remove.remove();
//remove heading from result
const heading1=RESULT.querySelector('h1');
RESULT.removeChild(heading1)

//4-
// innerHTML:The innerHTML property sets or returns the HTML content (inner HTML) of an element.
const randomvalue="random value"
const ul=document.createElement('ul');
ul.innerHTML=`<li class="special last">${randomvalue}</li> <li class="special last">javascript</li>`;
document.body.appendChild(ul);
//textContent:The textContent property sets or returns the text content of the specified node



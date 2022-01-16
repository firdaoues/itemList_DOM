//console.dir(document);

//Examine the document oject//

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.all[10]);
//document.all[10].textContent ='hello';
//console.log(document.forms);
//console.log(document.images);

//GETELEMENTBYID//

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log('headerTitle');
//headerTitle.textContent ='goodbye';
//headerTitle.innerText ='goodbye';
//headerTitle.innerHTML ='<h3>  Hello  </h3>';
//header.style.borderBottom = 'solid 3px #000';

//GETELEMENTBYCLASSNAME//

// var items = document.getElementsByClassName('list-group-item');
// console.log('items');
// console.log('items[1]');
// items[1].textContent='hello2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';
// for (var i = 0; i<items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

//getelementbytagname//

// var li = document.getElementsByTagName('li');
// console.log('li');
// console.log('li[1]');
// li[1].textContent='hello2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';
// for (var i = 0; i<li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//QUERYSELECTOR//

// var header = document.querySelector('#main-header');
// header.style.borderBottom ='solid 4px #ccc'
// var input = document.querySelector('input')
// input.value = 'hello'
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"
// var item = document.querySelector('.list-group-item')
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral'

//queryselectorall//

// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "hello";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";

//   even[i].style.backgroundColor = "#ccc";
// }

// // traversing the dom //

// var itemList = document.querySelector("#items");
//parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

//Parentelement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

//firstChild
// console.log(itemList.firstChild);

// //firstelementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello1";

//lastChild
// console.log(itemList.lastChild);

//lastelementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "hello4";

//nextsibling

// console.log(itemList.nextSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

// //createElement

// //creatediv

// var newDiv = document.createElement("div");
// //addclass
// newDiv.className = "hello";
// //addid
// newDiv.id = "hello1";
// //addattr
// newDiv.setAttribute("title", "Hellodiv");
// //create text node
// var newDivText = document.createTextNode("Hello world");
// //add text to Div
// newDiv.appendChild(newDivText);
// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// console.log(newDiv);
// newDiv.style.fontSize = "30px";
// container.insertBefore(newDiv, h1);
//EVENTS
// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//console.log("button clicked");
//   document.getElementById("header-title").textContent = "changed";
//   document.querySelector("#main").style.backgroundColor = "#f4f4f4";
//console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById("output");
// output.innerHTML = "<h3>" + e.target.id + "</h3>";
// console.log(e.type);
// console.log(e.clientX); THE POSITION FROM THE BROWSER WINDOW
// console.log(e.offsetY); from the actual element itself

// console.log(e.altKey); IF THE ALT IS PRESSED
// console.log(e.ctrlKey);
// console.log(e.shiftKey);

// }

//MOUSE EVENTS
var button = document.getElementById("button");
var box = document.getElementById("box");
//button.addEventListener("click", runEvent);
//button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);
// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);
// box.addEventListener("mousemove", runEvent);

// box.addEventListener("mouseover", runEvent); //for any inner element
// box.addEventListener("mouseout", runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");
var select = document.querySelector("select");

//KEYEVENTS
// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);
// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("copy", runEvent);
// itemInput.addEventListener("paste", runEvent);
// select.addEventListener("change", runEvent);
form.addEventListener("submit", runEvent);
function runEvent(e) {
  e.preventDefault();
  console.log("EVENT TYPE:" + e.type);
  // document.body.style.display = "none";
  // console.log(e.target.value);
  // document.getElementById("output").innerHTML =
  //   "<h3>" + e.target.value + "</h3>";
  //mouse position inside
  // output.innerHTML =
  //   "<h3>MouseX: " + e.offsetX + " <h3><h3>MouseY: " + e.offsetY + "</h3>";

  //   document.body.style.backgroundColor =
  //     "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}

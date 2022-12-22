let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/we-service.jpeg') {
      myImage.setAttribute('src', 'images/we-service2.jpeg');
    } else {
      myImage.setAttribute('src', 'images/we-service.jpeg');
    }
}

let myButton = document.querySelector('button');
let myList = document.querySelector('ul.name-list');

function addName() {
    let myInfo = prompt('Please enter the name you want to add');
    localStorage.setItem('information', myInfo);
    var node = document.createElement('li');
    var textnode=document.createTextNode(myInfo);
    node.appendChild(textnode);
    myList.appendChild(node);
  }

myButton.onclick = function() {
    addName();
 }
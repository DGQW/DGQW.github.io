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
let myParagraph = document.querySelector('p');

function setUserName() {
    let myInfo = prompt('请输入你想显示的信息。');
    localStorage.setItem('information', myInfo);
    myParagraph.textContent = myParagraph.textContent + myInfo + " ";
  }

myButton.onclick = function() {
    setUserName();
 }
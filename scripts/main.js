let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'https://imgs.xkcd.com/comics/installing.png'){
        myImage.setAttribute('src' ,'assets/firefox2.jpg');
    }
    else{
        myImage.setAttribute('src' ,'https://imgs.xkcd.com/comics/installing.png');
    }
}

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName(){
    let myName = prompt('Enter your user name.');
    if (!myName || myName === null){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}
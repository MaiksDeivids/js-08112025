const input = document.getElementById("userInput")
const buttonClick = document.getElementById("buttonClick")
const outputValue = document.getElementById("userOutput")
const PI = 3.14;

function handleClick(){
    buttonClick.addEventListener("click", handleClick);
        value = PI * 2 * input 
        outputValue.innerHTML = value;
}
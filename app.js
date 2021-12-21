const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");


var count = 10;

function Input() {
    if (input.value.length <= 10) {
        output.innerText = count - input.value.length;
    }
    else {
        output.innerText = " "
    }
}

button.addEventListener("click", Input)
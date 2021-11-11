const btn_plus = document.getElementById("btn_plus");
const btn_less = document.getElementById("btn_less");
const btn_reset = document.getElementById("btn_reset");
const counter = document.getElementById("counter");

var count = 0;

function setCountValue() {
    counter.innerText = count;
}

window.onload = setCountValue;

btn_plus.onclick = () => {
    count++;
    setCountValue();
};

btn_less.onclick = () => {
    count--;
    if (count < 0) {
        alert("Vous ne pouvez pas aller dans les nombres négatifs");
        count++;
        setCountValue();
    }
    else {
        setCountValue();
    }
};

btn_reset.onclick = () => {
    count = 0;
    setCountValue();
};
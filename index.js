const input1 = document.querySelector(".color1");
const input2 = document.querySelector(".color2");
const input1o = input1.value;
const input2o = input2.value;
const h3 = document.querySelector("h3");
const body = document.querySelector("body");
const btn = document.querySelector("button")

function addCss() {
    body.style.background = `linear-gradient(to right, ${input1.value} , ${input2.value})`
    h3.textContent = body.style.background + ";";
    input1.value = input1o;
    input2.value = input2o;
}

function randomColorGenerator () {
    let r = Math.floor(Math.random() * 255);
    let g =  Math.floor(Math.random() * 255);
    let b =  Math.floor(Math.random() * 255);

    return convertRGBToHex([r,g,b])
}

function convertRGBToHex (arr) {
    let r = arr[0].toString(16);
    let g = arr[1].toString(16);
    let b = arr[2].toString(16);

    r = r.length === 1 ? "0" + r : r ;
    g = g.length === 1 ? "0" + g : g ;
    b = b.length === 1 ? "0" + b : b ;

    return "#" + r + g + b ;
}

function generateRandomColor () {
    let color1 = randomColorGenerator();
    let color2 = randomColorGenerator();
    input1.value = color1;
    input2.value = color2;
    addCss();
}

input1.addEventListener("input", addCss);

input2.addEventListener("input",addCss);

window.addEventListener("load", addCss)

btn.addEventListener("click",generateRandomColor)

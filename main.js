
let blueBtn = document.getElementById("azul");
let grayBtn = document.getElementById("gris");
let redBtn = document.getElementById("rojo");
let imgchange = document.getElementById("imgchange");

blueBtn.onclick = function () {
    imgchange.src=src="./images/1-Boxer-ct-100-es-azul.png"
};

grayBtn.onclick = function () {
    imgchange.src=src="./images/1-Boxer-ct-100-es-gris.png"
}

redBtn.onclick = function () {
    imgchange.src=src="./images/1-Boxer-ct-100-es-rojo.png"
}
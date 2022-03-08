"use strinct"

let _btnColore;
let _titolo;
let _txtSize;
let _btnDimensione;
let _btnSfondo;
let _body;
let _btnBordo;
let _imgBox;
let _btnImg1;
let _btnImg2;
let _btnImg3;

window.onload = function() {
    _btnColore = document.getElementById("btnColore");
    _titolo = document.getElementById("titolo");
    _txtSize = document.getElementById("txtSize");
    _btnDimensione = document.getElementById("btnDimensione");
    _btnSfondo = document.getElementById("btnSfondo");
    _body = document.getElementsByTagName("body")[0];
    _btnBordo = document.getElementById("btnBordo");
    _imgBox = document.getElementById("imgBox");
    _btnImg1 = document.getElementById("btnImg1");
    _btnImg2 = document.getElementById("btnImg2");
    _btnImg3 = document.getElementById("btnImg3");
    
    _btnColore.addEventListener("click", cambiaColore);
    _btnDimensione.addEventListener("click", cambiaDimensione);
    _btnSfondo.addEventListener("click", cambiaSfondo);
    _btnBordo.addEventListener("click", cambiaBordo);
    _btnImg1.addEventListener("click", cambiaImmagine);
    _btnImg2.addEventListener("click", cambiaImmagine);
    _btnImg3.addEventListener("click", cambiaImmagine);
    
    _titolo.style.backgroundColor = "blue";
    _titolo.style.color = "yellow";
}

function cambiaColore() {
    /*if(getComputedStyle(_titolo).backgroundColor == "rgb(0, 0, 255)") {
        _titololp.style.backgroundColor = "yellow";
        _titolo.style.color = "blue";
    }p
    else {
        _titolo.style.backgroundColor = "blue";
        _titolo.style.color = "yellow";
    }*/

    if(_titolo.style.backgroundColor == "blue") {
        _titolo.style.backgroundColor = "yellow";
        _titolo.style.color = "blue";
    }
    else {
        _titolo.style.backgroundColor = "blue";
        _titolo.style.color = "yellow";
    }
}

function cambiaDimensione() {
    let size = parseFloat(_txtSize.value);

    if(size <= 23 && size >= 5) {
        _titolo.style.fontSize = size + "pt";
    }
    else {
        alert("Valore non disponibile!");
    }
}

function cambiaSfondo() {
    if(_body.style.backgroundImage == "") {
        _body.style.background = "#eaeaea url(img/bg.gif) center repeat-y";
    }
    else {
        _body.style.backgroundImage = "";
    }
}

function cambiaBordo() {
    if(getComputedStyle(_titolo).borderColor == "rgb(255, 0, 0)") {
        _titolo.style.borderColor = "white";
    }
    else {
        _titolo.style.borderColor = "red";
    }
}

function cambiaImmagine() {
    let img = this.value;

    _imgBox.src = "img/" + img + ".jpg";
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

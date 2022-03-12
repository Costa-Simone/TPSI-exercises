"use strinct"

let _btnNum;
let _txtDisplay;
let _btnOperatore;
let _btnRis;
let _btnClear;
let primoNumero = 0;
let operatore;

window.onload = function() {
    _btnNum = document.getElementsByName("btnNum");
    _txtDisplay = document.getElementById("txtDisplay");
    _btnOperatore = document.getElementsByName("btnOperatore");
    _btnRis = document.getElementById("btnRis");
    _btnClear = document.getElementById("btnClear");

    for(let i = 0; i < _btnNum.length; i++) {
        _btnNum[i].addEventListener("click", numero);
    }

    for(let i = 0; i < _btnOperatore.length; i++) {
        _btnOperatore[i].addEventListener("click", segno);
    }

    _btnRis.addEventListener("click", risultato);
    _btnClear.addEventListener("click", cancella);
}

function numero() {
    let n = this.value;

    _txtDisplay.value += n;
}

function segno() {
    operatore = this.value;
    primoNumero = parseInt(_txtDisplay.value);
    _txtDisplay.value = "";
}

function risultato() {
    switch(operatore) {
        case '+':
            _txtDisplay.value = (primoNumero + parseInt(_txtDisplay.value));
            break;

        case '-':
            _txtDisplay.value = (primoNumero - parseInt(_txtDisplay.value));
            break;

        case '*':
            _txtDisplay.value = (primoNumero * parseInt(_txtDisplay.value));
            break;

        case '/':
            _txtDisplay.value = (primoNumero / parseInt(_txtDisplay.value));
            break;
    }
    
}

function cancella() {
    primoNumero = 0;
    operatore = "";
    _txtDisplay.value = "";
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

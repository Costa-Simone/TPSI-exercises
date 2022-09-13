"use strinct"

let numeroBanco;
let numeroUtente;
let _txtBanco;
let _chkNum;
let _txtNum;
let _txtUser;
let _btnBanco;

window.onload = function() {
    _txtBanco = document.getElementById("txtBanco");
    _chkNum = document.getElementsByName("chkNum");
    _txtNum = document.getElementsByName("txtNum");
    _txtUser = document.getElementById("txtUser");
    _btnBanco = document.getElementById("btnBanco");

    numeroBanco = generaNumero(1, 11);
    _txtBanco.value = numeroBanco;
    _txtUser.value = 0;
}

function visualizza(pos) {
    let puntiUser = parseInt(_txtUser.value);
    numeroUtente = generaNumero(1, 11);

    _txtNum[pos].value = numeroUtente;
    _chkNum[pos].disabled = true;
    _txtUser.value = puntiUser + numeroUtente;

    if(puntiUser > 21) {
        alert("Hai perso!");
        termina();
    }
    else if(puntiUser == 21) {
        alert("Hai vinto!");
        termina();
    }
}

function banco() {
    let puntiBanco = parseInt(_txtBanco.value); 

    numeroBanco = generaNumero(1, 11);
    _txtBanco.value = puntiBanco + numeroBanco;

    if(puntiBanco >= 17 && puntiBanco < 21) {
        if(puntiBanco > puntiBanco) {
            alert("Hai perso!");
        }
        else if(puntiBanco < puntiBanco) {
            alert("Hai vinto!");
        }
        else {
            alert("Hai perso!");
        }

        termina();
    }
    else if(puntiBanco > 21) {
        alert("Hai vinto!");
        termina();
    }
    else if(puntiBanco == 21) {
        alert("Hai perso!");
        termina();
    }
}

function termina() {
    _btnBanco.disabled = true;

    for(let i = 0; i < _chkNum.lenght; i++) {
        _chkNum[i].disabled = true;
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

"use strinct"

let vet = ["Italia", "Pizzeria", "Calcio", "Automobilismo", "Juventus", "Lamborghini", "Lavagna", "Lasagna",
            "Lampadario", "Finestra"];
let parolaSegreta;
let punti = 100;
let _txtPunti;
let _txtCar;
let _chkRis;
let _btnInvia;
let _btnRisposta;

function inizializza() {
    _txtPunti = document.getElementById("txtPunti");
    _txtCar = document.getElementsByName("txtCar");
    _chkRis = document.getElementsByName("chkRis");
    _btnInvia = document.getElementById("btnInvia");
    _btnRisposta = document.getElementById("btnRisposta");

    _txtPunti.value = punti.toString();

    let pos = generaNumero(0, vet.length);
    parolaSegreta = vet[pos];
    
    parolaSegreta = parolaSegreta.toUpperCase();

    for(let i = 0; i < _txtCar.length; i++) {
        _txtCar[i].readOnly = true;
        _chkRis[i].disabled = true;
        _chkRis[i].checked = false;

        if(i < parolaSegreta.length) {
            _txtCar[i].value = "*";
        }
        else {
            _txtCar[i].value = "";
        }
    }

    _btnInvia.disabled = false;
    _btnRisposta.disabled = false;
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

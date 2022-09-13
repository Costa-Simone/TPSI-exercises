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
let _txtIns;

function inizializza() {
    _txtPunti = document.getElementById("txtPunti");
    _txtCar = document.getElementsByName("txtCar");
    _chkRis = document.getElementsByName("chkRis");
    _btnInvia = document.getElementById("btnInvia");
    _btnRisposta = document.getElementById("btnRisposta");
    _txtIns = document.getElementById("txtIns");

    punti = 100;
    _txtPunti.value = punti.toString();

    let pos = generaNumero(0, vet.length);
    parolaSegreta = vet[pos];
    
    parolaSegreta = parolaSegreta.toUpperCase();
    console.log(parolaSegreta);

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

function confronta() {
    let letteraUtente = _txtIns.value;

    letteraUtente = letteraUtente.toUpperCase();

    for(let i = 0; i < parolaSegreta.length; i++) {
        if(letteraUtente == parolaSegreta[i]) {
            _chkRis[i].checked = true;
            _txtCar[i].value = letteraUtente;
        }
    }

    punti -= 5;
    _txtPunti.value = punti.toString();

    if(punti <= 0) {
        alert("Hai perso!");

        _btnInvia.disabled = true;
        _btnRisposta.disabled = true;
    }
    else {
        let cont = 0;

        for(let i = 0; i < parolaSegreta.length; i++) {
            if(_chkRis[i].checked == true) {
                cont++;
            }
        }
    
        if(cont == parolaSegreta.length) {
            alert("Hai vinto!");
    
            _btnInvia.disabled = true;
            _btnRisposta.disabled = true;
        }
    }
}

function rispondi() {
    let risposta = prompt("Inserisci qui la tua risposta: ");
    risposta = risposta.toUpperCase();

    if(risposta == parolaSegreta) {
        alert("Hai vinto!");
    
        _btnInvia.disabled = true;
        _btnRisposta.disabled = true;
    }
    else {
        punti -= 20;
        _txtPunti.value = punti.toString();

        if(punti <= 0) {
            alert("Risposta errata, hai perso!");
    
            _btnInvia.disabled = true;
            _btnRisposta.disabled = true;
        }
        else {
            alert("Risposta errata");
        }
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

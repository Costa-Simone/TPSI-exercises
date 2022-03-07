"use strinct"

let giuste = 0;
let sbagliate = 0;
let pos;
let vet1 = ["arco", "binari", "roulette", "palla", "disco", "luci", "pop corn", "moto", "sci", "aperitivo"];
let vet2 = ["freccia", "treno", "fiches", "canestro", "stereo", "discoteca", "cinema", "casco", "pista", "bar"];
let _img;
let _imgRisposta;
let _txt;
let _optRisposta;
let _txtRisposta;
let _txtCorrette;
let _txtErrate;

window.onload = function() {
    _img = document.getElementById("img");
    _imgRisposta = document.getElementsByClassName("imgRisposta");
    _txt = document.getElementById("txt");
    _optRisposta = document.getElementsByName("optRisposta");
    _txtRisposta = document.getElementsByClassName("txtRisposta");
    _txtCorrette = document.getElementById("txtCorrette");
    _txtErrate = document.getElementById("txtErrate");

    pos = generaNumero(1, vet1.length);

    _img.src = "img/img" + pos + " " + vet1[pos - 1] + ".jpg";
    _txt.value = vet1[pos - 1];

    for(let i = 0; i < vet2.length; i++) {
        _imgRisposta[i].src = "img/img" + (i + 1) + " " + vet2[i] + ".jpg";
    }
}

function controlla() {
    let i = 0;

    while(i < vet2.length && _optRisposta[i].checked == false) {
        i++;
    }

    if(i == vet2.length - 1) {
        alert("Nessun radio button selezionato!");
    }
    else {
        _txtRisposta[i].value = _txtRisposta[i].value.toLowerCase();

        if(_txtRisposta[i].value == vet2[i]) {
            giuste++;

            _txtCorrette.innerHTML = "Risposta corrette: " + giuste;

            cancella();

            pos = generaNumero(1, vet1.length);

            _img.src = "img/img" + pos + " " + vet1[pos - 1] + ".jpg";
            _txt.value = vet1[pos - 1];

            for(let i = 0; i < _optRisposta.length; i++) {
                _optRisposta[i].checked = false;
            }
        }
        else {
            sbagliate++;

            _txtErrate.innerHTML = "Risposte Errate: " + sbagliate;

            alert("Il testo corretto è " + vet2[i]);
        }
    }
}

function cancella(){
    for(let i=0;i< vet1.length;i++) {
        _txtRisposta[i].value="";
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

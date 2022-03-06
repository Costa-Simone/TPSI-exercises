"use strinct"

let giuste = 0;
let sbagliate = 0;
let vet1 = ["arco", "binari", "roulette", "palla", "disco", "luci", "pop corn", "moto", "sci", "aperitivo"];
let vet2 = ["freccia", "treno", "fiches", "canestro", "stereo", "discoteca", "cinema", "casco", "pista", "bar"];
let _img;
let _imgRisposta;
let _txt;
let _optRisposta;
let _txtRisposta;

window.onload = function() {
    _img = document.getElementById("img");
    _imgRisposta = document.getElementsByClassName("imgRisposta");
    _txt = document.getElementById("txt");
    _optRisposta = document.getElementsByClassName("optRisposta");
    _txtRisposta = document.getElementsByClassName("txtRisposta");

    let pos = generaNumero(0, vet1.length);

    _img.src = "img/img" + pos + " " + vet1[pos - 1] + ".jpg";
    _txt.value = vet1[pos - 1];

    for(let i = 0; i < vet2.length; i++) {
        _imgRisposta[i].src = "img/img" + (i + 1) + " " + vet2[i] + ".jpg";
    }
}

function controlla() {
    let esci = false;
    let i = 0;

    while(!esci && i < _optRisposta.length) {
        if(_optRisposta[i].checked == true) {
            esci = true;
        }

        i++;
    }

    if(!esci) {
        alert("Nessun radio button selezionato!");
    }
    else {
        _txtRisposta[i].value = _txtRisposta[i].value.toLowerCase();

        if(_txtRisposta[i].value == vet2[i - 1]) {
            giuste++;

            cancella();
        }
    }
}

function cancella(){
    for(let i=0;i<img1.length;i++) {
        _txtRisposta[i].value="";
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

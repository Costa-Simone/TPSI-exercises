"use strinct"

let _voci;
let _txtNum;
let _txtAscii;
let _chkRis;
let _btnControlla;

window.onload = function() {
    _voci = document.getElementById("voci");
    _txtNum = document.getElementsByName("txtNum");
    _txtAscii = document.getElementsByName("txtAscii");
    _chkRis = document.getElementsByName("chkRis");
    _btnControlla = document.getElementById("btnControlla");

    _voci.selectedIndex = -1;
}

function genera() {
    let value = _voci.value;
    let vet = value.split("-");
    console.log(vet);
    let min = vet[0];
    let max = vet[1];
    let aus = [];

    let cnt = 0;

    for(let i = min; i <= max; i++) {
        aus[cnt] = i;
        cnt++;
    }

    for(let i = 0; i < 6; i++) {
        let pos = generaNumero(0, aus.length);
        console.log(aus);

        _txtNum[i].value = aus[pos];
        _txtAscii[i].value = "";
        _chkRis[i].checked = false;
    }

    _btnControlla.disabled = true;
}

function check(n) {
    _txtAscii[n].disabled = true;

    for(let i = 0; i < _txtAscii.length; i++) {
        if(_txtAscii[0].disabled == true && _txtAscii[1].disabled == true && _txtAscii[2].disabled == true && _txtAscii[3].disabled == true && _txtAscii[4].disabled == true
            && _txtAscii[5].disabled == true) {
                _btnControlla.disabled = false;
        }
        else {
            _btnControlla.disabled = true;
        }
    }
}

function controllaN() {
    let cont = 0;

    for(let i = 0; i < _txtAscii.length; i++) {
        if(_txtAscii[i].value == String.fromCharCode(_txtNum[i].value)) {
            cont++;
            _chkRis[i].checked = true;
        }
        else {
            _txtAscii[i].value = "";
            _txtAscii[i].disabled = false;
        }
    }

    if(cont == 6) {
        alert("Bravissimo!");
    }
    else if(cont == 0) {
        alert("Risultato pessimo!");
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

"use strinct"

let _voci;

window.onload = function() {
    _voci = document.getElementById("voci");

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

    for(let i = min; i < max; i++) {
        aus[cnt] = i;
        cnt++;
    }

    for(let i = 0; i < 6; i++) {
        let pos = generaNumero(0, aus.length);
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

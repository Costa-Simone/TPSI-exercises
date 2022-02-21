"use strinct"

let _txt1;
let _txt2;
let vet1 = [];
let vet2 = [];
let aus = [];

window.onload = function() {
    _txt1 = this.document.getElementById("txt1");
    _txt2 = this.document.getElementById("txt2");

    for(let i = 65; i <= 90; i++) {
        vet1.push(this.String.fromCharCode(i));
        aus.push(this.String.fromCharCode(i));
    }

    for(let i = 0; i < vet1.length; i++) {
        let pos = this.generaNumero(0, aus.length);
        vet2[i] = aus[pos];
        aus.splice(pos, 1);
    }

    this.console.log(vet1);
    this.console.log(vet2);
}

function scrambler() {
    _txt2.value = "";

    for(let i = 0; i < txt1.value.length; i++) {
        _txt2.value += 
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

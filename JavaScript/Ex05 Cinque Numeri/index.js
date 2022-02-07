"use strinct"

let _InTxtNum;
let _InChkNum;

function init() {
    _inTxtNum = document.getElementsByName("txtNum");
    _InChkNum = document.getElementsByName("chkNum");
}

function invia() {}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}


"use strict"

function lanciaMoneta() {
    let _txtLanci = document.getElementById("txtLanci");
    let _lblCroce = document.getElementById("lblCroce");
    let _lblTesta = document.getElementById("lblTesta");

    let cnt1 = 0;
    let cnt2 = 0;

    let nLanci = parseInt(_txtLanci.value);

    for(let i = 0; i < nLanci; i++) {
        let n = generaNumero(0, 2);

        if(n == 0) {
            cnt1++;
        }
        else {
            cnt2++;
        }
    }

    _lblCroce.textContent = "N. di volte in cui è uscito croce: " + cnt1.toString();
    _lblTesta.textContent = "N. di volte in cui è uscito testa: " + cnt2.toString();
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

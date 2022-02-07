"use strinct"

let _inTxtNum;
let _inChkNum;
let nRandom = [];
let nUtente = [];

function init() {
    _inTxtNum = document.getElementsByName("txtNum");
    _inChkNum = document.getElementsByName("chkNum");

    let n = generaNumero(1, 6);
    nRandom.push(n);

    for(let i = 1; i < 5; i++) {
        let esci = false;
        let ferma = false;

        do {
            esci = false;
            let j = 0;
            n = generaNumero(1, 6);

            while(!esci && j < i) {
                if(n == nRandom[j]) {
                    esci = true;
                }
                j++;
            }

            if(!esci) {
                nRandom.push(n);
                ferma = true;
            }
        }while(ferma)
    }
    console.log(nRandom);
}

function invia() {
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

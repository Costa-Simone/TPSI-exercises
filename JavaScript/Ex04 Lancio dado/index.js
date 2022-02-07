"use strinct"

let cont = [];
let _txtLanci;
let _pMsg;

function init() {
    _txtLanci = document.getElementById("txtLanci");
    _pMsg = document.getElementsByName("msg"); //--> restituiscono come vettore
    //_pMsg = document.getElementsByTagName("p"); 

    for(let i = 0; i < 6; i++) {
        cont.push(0);
    }
}

function genera() {
    let lanci =  _txtLanci.value;

    for(let i = 0; i < 6; i++) {
        cont[i] = 0;
    }

    for(let i = 0; i < lanci; i++) {
        let n = generaNumero(1, 7);
        cont[n - 1]++;
    }
    
    for(let i = 0; i < 6; i++) {
        _pMsg[i].innerHTML = "La faccia " + (i + 1) + " è uscita: " + cont[i] + " volte";
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

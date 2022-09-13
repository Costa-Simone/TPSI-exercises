
"use strinct"

let numeroSegreto;
let _divMessage;
let _txtNumero;
let _btnGioca;
let _divContenuti;
let cont = 0;

function init() {
    _txtNumero = document.getElementById("txtNumero");
    _divMessage = document.getElementById("divMessage");
    _btnGioca = document.getElementById("btnGioca");
    _divTentativi = document.getElementById("divTentativi");

    numeroSegreto = generaNumero(1, 101);

    console.log("Numero segreto: ", numeroSegreto);
}

function gioca() {
    if(_txtNumero.value == "") {
        alert("Prego inserire un numero!");
    }
    else {
        let numeroUtente = parseInt(_txtNumero.value);
        let vinto = false;
    
        if(numeroUtente > numeroSegreto) {
            _divMessage.innerHTML += "Il numero " + numeroUtente + " inserito troppo grande <br/>";
            
            cont++;
        }
        else if(numeroUtente < numeroSegreto) {
            _divMessage.innerHTML += "Il numero " + numeroUtente + " inserito troppo piccolo <br/>";

            cont++;
        }
        else {
            alert("Bravissimo hai indovinato in " + (cont + 1) + " tentativi");
    
            _btnGioca.disabled = true;
            vinto = true;
            cont++;
        }
    
        _divTentativi.textContent = "Tentativi: " + (cont);
    
        if(cont == 10 && !vinto) {
            alert("Hai esaurito i tentativi!");
            _btnGioca.disabled = true;
        }
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

"use strinct"

window.onload = function() {
    let  txtNPartecipanti = document.getElementById("txtNPartecipanti");
    let _txtDataInizio = document.getElementById("txtDataInizio");
    let _txtDataFine = document.getElementById("txtDataFine");
    let _btnCalcola = document.getElementById("btnCalcola");
    let _risultato = document.getElementById("risultato");
    let _imgSconto = document.getElementById("imgSconto");
    let _txtNPartecipanti = document.getElementById("txtNPartecipanti");

    let today = new Date();
    let importoUnitario = 200;
    let sconto;

    _txtDataFine.disabled = true;
    _txtDataInizio.min = today.toISOString().substring(0,10);

    _txtDataInizio.addEventListener("change", function() {
        let dataInizio = new Date(_txtDataInizio.value);
        _txtDataFine.disabled = false;
        let dataFine = dataInizio.getTime() + 24 * 3600 * 1000;
        dataFine = new  Date(dataFine);
        _txtDataFine.min = dataFine.toISOString().substring(0, 10);

        if(dataInizio.getMonth() == 5) {
            _imgSconto.src = "img/sconto10.jpg";
            sconto = 10;
        }
        else if(dataInizio.getMonth() == 6) {
            _imgSconto.src = "img/sconto15.jpg";
            sconto = 15;
        }
        else if(dataInizio.getMonth() == 7) {
            _imgSconto.src = "img/sconto20.jpg";
            sconto = 20;
        }
        else {
            _imgSconto.src = "";
        }
    })
    _btnCalcola.addEventListener("click", function() {
        let nPersone = _txtNPartecipanti.value;

        if(nPersone == 0 || nPersone < 1 || nPersone > 9 || nPersone == "") {
            alert("Numero partecipanti non validi");
        }
        else if(_txtDataInizio.value == "" || _txtDataFine == "") {
            alert("Inserire data inizio o data fine!");
        }
        else {
            let ms = new Date(_txtDataFine.value) - new Date(_txtDataInizio.value);
            let giorni = ms / (24 * 3600 * 1000);
            let importo = giorni * importoUnitario * nPersone;
            _risultato.innerHTML = importo.toString();
        }
    })
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

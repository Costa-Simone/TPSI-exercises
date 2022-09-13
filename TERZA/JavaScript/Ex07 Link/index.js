"use strinct"

let _lstSiti;

window.onload = function() {
    _lstSiti = document.getElementById("lstSiti");

    _lstSiti.selectedIndex = -1;
}

function visualizza() {
    let url = _lstSiti.value;

    //open(url, "_blank"); --> apro in un altra scheda
    //open(url, "_self"); --> apro in scheda corrente
    window.location.href = url;
}

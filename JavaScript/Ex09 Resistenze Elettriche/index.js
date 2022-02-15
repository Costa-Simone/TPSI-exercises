"use strinct"

let _lstCifra1;
let _lstCifra2;
let _lstFattore;
let _lstTolleranza;
let colori = ["argento", "oro", "nero", "marrone", "rosso", "arancio", "giallo", "verde", "blu", "viola", 
            "grigio", "bianco"];

window.onload = function() {
    _lstCifra1 = document.getElementById("lstCifra1");
    _lstCifra2 = document.getElementById("lstCifra2");
    _lstFattore = document.getElementById("lstFattore");
    _lstTolleranza = document.getElementById("lstTolleranza");

    for(let i = 2; i < colori.length; i++) {
        let html = "<option value='" + (i - 2) + "'>" + colori[i] + "</option>";
        _lstCifra1.innerHTML += html;
        _lstCifra2.innerHTML += html;
    }

    _lstCifra1.selectedIndex = -1;
    _lstCifra2.selectedIndex = -1;

    for(let i = 0; i < colori.length - 2; i++) {
        let html = `<option value='${(i - 2)}'> ${colori[i]} </option>`;
        _lstFattore.innerHTML += html;
    }

    _lstFattore.selectedIndex = -1;
}

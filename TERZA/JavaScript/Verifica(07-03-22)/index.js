"use strict";

let citta=[
	"Londra", "Liverpool", "Manchester", "Cambridge",
	"Amsterdam", "Rotterdam", "Maastricht",
	"Lisbona", "Oporto", "Braga",
	"Stoccolma", "Goteborg",
	"Kiev", "Leopoli", "Odessa",
	"Berna", "Lugano", "Zurigo", 
	"Madrid", "Barcellona"
]

let nazioni=[
	"Inghilterra", "Inghilterra", "Inghilterra", "Inghilterra", 
	"Olanda", "Olanda", "Olanda",
	"Portogallo", "Portogallo", "Portogallo",
	"Svezia", "Svezia",
	"Ucraina", "Ucraina", "Ucraina",
	"Svizzera", "Svizzera", "Svizzera",
	"Spagna", "Spagna"]

let elencoUnivocoNazioni = [];
let _nazione;
let _bandiera;
let _chkCitta;
let _txtCitta;
let _cnt;
let _img;
let _btncontrolla;
let cont = 0;
let pos;

window.onload = function() {
	_nazione = document.getElementById("nazione");
	_bandiera = document.getElementById("bandiera");
	_chkCitta = document.getElementsByName("chkCitta");
	_txtCitta = document.getElementsByName("txtCitta");
	_cnt = document.getElementById("cnt");
	_img = document.getElementsByClassName("img");
	_btncontrolla = document.getElementById("btncontrolla");
	let n;
	let ausCitta = [];
	let ausNazioni = [];

	for(let i = 0; i < nazioni.length; i++) {
		nazioni[i] = nazioni[i].toLowerCase();
		if(!elencoUnivocoNazioni.includes(nazioni[i])) {
			elencoUnivocoNazioni.push(nazioni[i]);
		}
	}

	pos = generaNumero(0, elencoUnivocoNazioni.length);

	_bandiera.src = "img/" + elencoUnivocoNazioni[pos] + ".png";
	_nazione.textContent = elencoUnivocoNazioni[pos];

	for(let i = 0; i < citta.length; i++) {
		ausCitta.push(citta[i]);
		ausNazioni.push(nazioni[i]);
	}

	for(let i = 0; i < _txtCitta.length; i++) {
		n = generaNumero(0, ausCitta.length);
		_txtCitta[i].value = ausCitta[n];
		ausCitta.splice(n, 1);
		_txtCitta[i].masked = ausNazioni[n];
		ausNazioni.splice(n, 1);
	}
	console.log(elencoUnivocoNazioni);
}

function controlla() {
	let nCitta = 0;
	let contaCitta = 0;

	for(let i = 0; i < _chkCitta.length; i++) {
		if(_txtCitta[i].masked == elencoUnivocoNazioni[pos] && _chkCitta[i].disabled == false) {
			nCitta++;
		}

		if(_chkCitta[i].checked == true && _chkCitta[i].disabled == false) {
			cont++;

			let indice = citta.indexOf(_txtCitta[i].value);

			if(nazioni[indice] == elencoUnivocoNazioni[pos]) {
				_chkCitta[i].disabled = true;
				_txtCitta[i].disabled = true;
				_img[i].src = "img/" + nazioni[indice] + ".png";
				contaCitta++;
			}
			else  {
				_chkCitta[i].checked = false;
			}
		}
	}
	
	if(nCitta == contaCitta) {
		elencoUnivocoNazioni.splice(pos, 1);
		if(elencoUnivocoNazioni.length != 0) {
			pos = generaNumero(0, elencoUnivocoNazioni.length);
			_bandiera.src = "img/" + elencoUnivocoNazioni[pos] + ".png";
			_nazione.textContent = elencoUnivocoNazioni[pos];
		}
	}
	if(elencoUnivocoNazioni.length == 0) {
		alert("Bravo hai vinto!");
		_btncontrolla.disabled = true;
	}

	_cnt.innerHTML = cont;
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

"use strict";

const nomi = ["Italia", "Lavagna", "Pizza", "Lasagne", "Spiedino", "Ananas", "Gnocchi", "Gorgonzola", 
		"Broccoli", "Mango", "Biscotti",  "Giornale", "Carabina", "Affettati", "Lungimirante", "Affaticato", 
		"Effervescente", "Ambulante", "Ambulanza", "Ostetricia"];
const MAX_TENTATIVI = 5;
let _txtParola;
let _txtLettera;
let parolaSegreta;
let _img;
let cont = 0;
let _button;

window.onload = function() {
	_txtParola = document.getElementById("txtParola");
	_txtLettera = document.getElementById("txtLettera");
	_img = document.getElementsByTagName("img")[0];
	_button = document.getElementsByTagName("button")[0];

	let pos = this.generaNumero(0, nomi.length);

	parolaSegreta = nomi[pos].toUpperCase();
	
	_txtParola.style.letterSpacing = "10px";

	this.console.log(parolaSegreta);

	for(let i = 0; i < parolaSegreta.length; i++) {
		_txtParola.value += "*";
	}
}

function elabora() {
	let carattere = _txtLettera.value.toUpperCase();
	let _aus = _txtParola.value;
	let trovato = false;

	_txtParola.value = "";

	for(let i = 0; i < parolaSegreta.length; i++) {
		if(parolaSegreta[i] == carattere) {
			_txtParola.value += carattere;
			trovato = true;
		}
		else {
			_txtParola.value += _aus[i];
		}
	}

	if(!trovato) {
		cont++;
		_img.src = `img/Fig${cont}.png`;

		if(cont == MAX_TENTATIVI) {
			_button.disabled = true;

			alert("Hai perso!");
		}
	}
	else {
		if(parolaSegreta == _txtParola.value) {
			_button.disabled = true;

			alert("Hai vinto!");
		} 
	}
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b - a) * Math.random()) + a;

    return ris;
}

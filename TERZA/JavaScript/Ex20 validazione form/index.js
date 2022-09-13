"use strict";


window.onload = function () {
    let _txtMatricola = document.getElementById("matricola");
    let _txtCognome = document.getElementById("cognome");
    let _txtNome = document.getElementById("nome");
	let _optGenere = document.getElementsByName("genere");
    let _lstRegione = document.getElementById("regione");
	let _chkLavoratore = document.getElementById("lavoratore");
    let _txtDescrizione = document.getElementById("descrizione");


	_lstRegione.selectedIndex = -1;
		
	_txtMatricola.addEventListener("change", controllaMatricola);
	_txtCognome.addEventListener("change", controllaCognome);
	_txtNome.addEventListener("change", controllaNome);
	_chkLavoratore.addEventListener("click", function() {
		if(_chkLavoratore.checked == true) {
			_txtDescrizione.disabled = false;
		}
		else {
			_txtDescrizione.disabled = true;
		}
	});
	
	document.querySelector("input[type=button]").addEventListener("click", validaForm);

	function validaForm() {
		let mess = "Gli errori presenti sono:\n";
		let error = false;

		if(!controllaMatricola()) {
			mess += "Matricola\n";
			_txtMatricola.classList.add("red-border");
			error = true;
		}
		if(!controllaCognome()) {
			mess += "Cognome\n";
			_txtCognome.classList.add("red-border");
			error = true;
		}
		if(!controllaNome()) {
			mess += "Nome\n";
			_txtNome.classList.add("red-border");
			error = true;
		}
		if(_optGenere[0].checked == false && _optGenere[1].checked == false) {
			mess += "Genere\n";
			_optGenere[0].classList.add("red-border");
			error = true;
		}
		if(_lstRegione.selectedIndex == -1) {
			mess += "Regione\n";
			_lstRegione.classList.add("red-border");
			error = true;
		}
		if(_chkLavoratore.checked == true && _txtCognome == "") {
			mess += "Descrizione Lavoro\n";
			_txtDescrizione.classList.add("red-border");
			error = true;
		}

		if(error) {
			alert(mess);
			return false;
		}
	}

	function controllaMatricola() {
		if(_txtMatricola.value.length != 12 || isDigit(_txtMatricola.value) == false) {
			_txtMatricola.classList.add("red-border");
			return false;
		}
		else {
			_txtMatricola.classList.remove("red-border");
			return true;
		}
	}

	function controllaCognome() {
		if(_txtCognome.value.length == 0 || !isLetter(_txtCognome.value)) {
			_txtCognome.classList.add("red-border");
			return false;
		}
		else {
			_txtCognome.classList.remove("red-border");
			return true;
		}
	}

	function controllaNome() {
		if(_txtNome.value.length == 0 || !isLetter(_txtNome.value)) {
			_txtNome.classList.add("red-border");
			return false;
		}
		else {
			_txtNome.classList.remove("red-border");
			return true;
		}
	}
}

"use strict";

let indiceLibroCorrente = 0;
// uso gli STESSI NOMI delle chiavi JSON (ultima colonna = delete)
let intestazioni = ["title", "authors", "category", "price", ""];
let pulsanti = ["Primo", "Indietro", "Avanti", "Ultimo", "Salva", "Aggiungi", "Ordina", "eliminaPerCategoria"];

window.onload = function() {
	let json = this.localStorage.getItem("bookstore_json");
	let bookstore = this.JSON.parse(json);
	let _table = this.document.createElement("table");
	let _body = this.document.getElementsByTagName("body")[0];
	let _tr = this.document.createElement("tr");
	let _dettagli = this.document.createElement("div");
	let _tBody = document.createElement("tBody");
	let _contenitore;
	
	// Creazione intestazione
	this.console.log(json);
	_body.appendChild(_table);
	_table.appendChild(_tr);

	for(let intestazione of intestazioni) {
		let _th = this.document.createElement("th");

		_tr.appendChild(_th);

		_th.innerHTML = intestazione;
	}

	_table.appendChild(_tBody);
	visualizzaTabella();
	// Creazione dettagli
	_dettagli.classList.add("dettagli");
	_body.appendChild(_dettagli);
	visualizzaDettagli();
	creaPulsanti();
	creaRadioButtons();

	function visualizzaTabella() {
		_tBody.innerHTML = "";

		// Caricamento dati
		for(let [i, book] of bookstore.entries()) {
			let _tr = document.createElement("tr");
			let _td = document.createElement("td");
			let _button = document.createElement("button");

			_tBody.appendChild(_tr);

			_td = document.createElement("td");
			_tr.appendChild(_td);

			_td.innerHTML = book["title"];
			
			_td = document.createElement("td");
			_tr.appendChild(_td);

			_td.innerHTML = book["author"];
			
			_td = document.createElement("td");
			_tr.appendChild(_td);

			_td.innerHTML = book["category"];
			
			_td = document.createElement("td");
			_tr.appendChild(_td);

			_td.innerHTML = book["price"];

			_td = document.createElement("td");
			_tr.appendChild(_td);
			_td.appendChild(_button);

			_button.innerHTML = "Delete";
			_button.pos = i;

			_button.addEventListener("click", elimina);
		}
	}
	function visualizzaDettagli() {
		let book = bookstore[indiceLibroCorrente];

		_dettagli.innerHTML = "";

		for(let key in book) {
			let _label = document.createElement("label");
			let _textBox = document.createElement("input");

			_dettagli.appendChild(_label);
			_dettagli.appendChild(_textBox);

			_label.style.textAlign = "right";
			_label.style.fontWeight = "bold";
			_label.innerHTML = key + ":";
			_textBox.type = "text";
			_textBox.value = book[key];
		}
	}
	function creaPulsanti() {
		_contenitore = document.createElement("div");

		_contenitore.classList.add("contenitorePulsantiNavigazione");
		_body.appendChild(_contenitore);

		for(let pulsante of pulsanti) {
			let _button = document.createElement("button");

			_button.classList.add("pulsantiNavigazione");
			_button.addEventListener("click", gestistiPulsante);
			_contenitore.appendChild(_button);

			_button.innerHTML = pulsante;
			_button.id = pulsante;
		}

		document.getElementById("Primo").disabled = true;
		document.getElementById("Indietro").disabled = true;
	}
	function gestistiPulsante() {
		let buttons = document.getElementsByClassName("pulsantiNavigazione");
		let pulsanteCliccato;

		if(this) {
			pulsanteCliccato = this.id;
		}
		else {
			pulsanteCliccato = "Primo";
		}

		switch(pulsanteCliccato) {
			case "Primo":
				indiceLibroCorrente = 0;

				buttons[0].disabled = true;
				buttons[1].disabled = true;
				buttons[2].disabled = false;
				buttons[3].disabled = false;

				visualizzaDettagli();
				break;

			case "Indietro":
				indiceLibroCorrente--;

				if(indiceLibroCorrente == 0) {
					buttons[1].disabled = true;
					buttons[0].disabled = true;
				}

				buttons[2].disabled = false;
				buttons[3].disabled = false;
				
				visualizzaDettagli();
				break;

			case "Avanti":
				indiceLibroCorrente++;

				if(indiceLibroCorrente == bookstore.length - 1) {
					buttons[2].disabled = true;
					buttons[3].disabled = true;
				}

				buttons[1].disabled = false;
				buttons[0].disabled = false;

				
				visualizzaDettagli();
				break;

			case "Ultimo":
				indiceLibroCorrente = bookstore.length - 1;

				buttons[3].disabled = true;
				buttons[2].disabled = true;
				buttons[0].disabled = false;
				buttons[1].disabled = false;
				
				visualizzaDettagli();
				break;

			case "Salva":
				modificaDettagli();
				break;

			case "Aggiungi":
				window.location.href = "inserisci.html";

				visualizzaTabella();
				break;

			case "eliminaPerCategoria":
				eliminaCategoria();
				break;

			case "Ordina":
				ordina();
				break;
		}
	}
	function ordina() {
		let myKey = prompt("Inserisci la chiave di ordinamento: ");
		let _opt = document.getElementsByName("ordinamento");
		let scelta = 0;

		if(_opt[0].checked) {
			scelta = 1;
		}
		else {
			scelta = -1;
		}

		bookstore.sort(function(record1, record2) {
			let str1 = record1[myKey].toUpperCase();
			let str2 = record2[myKey].toUpperCase();

			if (str1 < str2)
				return -scelta;
			else if (str1 > str2)
				return scelta;
			else 
				return 0;

		});

		visualizzaTabella();
	}
	function modificaDettagli() {
		let book = bookstore[indiceLibroCorrente];
		let _inputs = document.getElementsByTagName("input");
		let json;
		let i = 0;

		for(let key in book) {
			book[key] = _inputs[i].value;
			i++;
		}

		json = JSON.stringify(bookstore);

		localStorage.setItem("bookstore_json", json);
		visualizzaTabella();
	}
	function eliminaCategoria() {
		let categoria = prompt("Inserisci la categoria: ", "");
		let json;

		for(let i = bookstore.length - 1; i >= 0; i--) {
			if(bookstore[i]["category"] == categoria) {
				bookstore.splice(i, 1);
			}
		}

		json = JSON.stringify(bookstore);
		localStorage.setItem("bookstore_json", json);
		visualizzaTabella();
	}
	function elimina() {
		let pos = parseInt(this.pos);
		let json;

		gestistiPulsante();
		bookstore.splice(pos, 1);
		json = JSON.stringify(bookstore);
		localStorage.setItem("bookstore_json", json);
		visualizzaTabella();
	}
	function creaRadioButtons() {
		let _label1 = document.createElement("label");
		let _opt1 = document.createElement("input");
		let _label2 = document.createElement("label");
		let _opt2 = document.createElement("input");
		let _br = document.createElement("br");

		_contenitore.appendChild(_br);
		_contenitore.appendChild(_br);

		_label1.innerHTML = "Ordinamento crescente";
		_opt1.type = "radio";
		_opt1.name = "ordinamento";
		_opt1.checked = true;
		_label2.innerHTML = "Ordinamento decrescente";
		_opt2.type = "radio";
		_opt2.name = "ordinamento";

		_contenitore.appendChild(_opt1);
		_contenitore.appendChild(_label1);
		_contenitore.appendChild(_br);
		_contenitore.appendChild(_opt2);
		_contenitore.appendChild(_label2);
	}
};

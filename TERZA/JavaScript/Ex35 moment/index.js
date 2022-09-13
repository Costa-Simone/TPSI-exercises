"use strict";

window.onload= function() {
	let _data1 = document.getElementById("txtData1");
	let _data2 = document.getElementById("txtData2");
	let _button = document.getElementsByTagName("button")[0];
	let _log = document.getElementById("log");

	_button.disabled = true;

	_data2.addEventListener("input", function() {
		_button.disabled = false;
	});
	_button.addEventListener("click", function() {
		// inializzazione date
		let momentDt1 = moment(_data1.value);
		let momentDt2 = moment(_data2.value);

		_log.innerHTML = "";
		// date
		_log.innerHTML += momentDt1.format() + "<br>";
		_log.innerHTML += momentDt2.format() + "<br><br>"; 
		// millisecondi
		_log.innerHTML += momentDt1.unix() + "<br>";
		_log.innerHTML += momentDt2.unix() + "<br><br>";
		// gmt
		momentDt1.utc();
		momentDt2.utc();

		_log.innerHTML += momentDt1.format() + "<br>";
		_log.innerHTML += momentDt2.format() + "<br><br>";
		// formato italiano locale
		_log.innerHTML += momentDt1.format("DD/MM/YYYY") + "<br>";
		_log.innerHTML += momentDt2.format("DD/MM/YYYY") + "<br><br>";
		// sola ora
		_log.innerHTML += momentDt1.format("[ore] H [e] m [minuti]") + "<br>";
		_log.innerHTML += momentDt2.format("H:m:s") + "<br>";
		//_log.innerHTML += momentDt2.hour() + ":" + momentDt2.minute() + ":" + momentDt2.second() + "<br><br>";
		// solo anno data1 e mese data2
		_log.innerHTML += momentDt1.year() + "<br>";
		_log.innerHTML += momentDt2.month() + "<br><br>";
		// calcolare differenza date
		let differenzaGiorni = momentDt2.diff(momentDt1, "days");
		
		_log.innerHTML += "Differenza in giorni ore minuti <br>"
		_log.innerHTML += differenzaGiorni + " ";

		let differenzaOre = momentDt2.diff(momentDt1, "hours") - (differenzaGiorni - 1) * 24;

		_log.innerHTML += differenzaOre + " ";
		let differenzaMinuti = momentDt2.diff(momentDt1, "minutes") - differenzaOre * 60 - (differenzaGiorni) * 24 * 60;

		_log.innerHTML += differenzaMinuti + "<br>";
		// soluzione 2
		let differenza = momentDt2.diff(momentDt1);
		let data = moment(differenza);

		_log.innerHTML += "2. Differenza in: <br> ";
		_log.innerHTML += "Differenza in giorni ore minuti secondi <br>";
		_log.innerHTML += data.format("DD-H-m-s");

	});
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

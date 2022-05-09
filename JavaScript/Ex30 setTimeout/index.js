"use strict";

window.onload = function(){
    let _img = document.getElementById("imgCarta");
	let _btnGioca = document.getElementById("btnGioca");
	let _lblSomma = document.getElementById("lblSomma");
	let _lblCarte = document.getElementById("lblCarte");
	let _lblRisultato = document.getElementById("lblRisultato");

	let aus = [];

	_btnGioca.addEventListener("click", gioca);

	function gioca() {
		let timerId;

		if(_lblCarte.innerHTML == "3") {
			_lblCarte.innerHTML = 0;
			_lblSomma.innerHTML = 0;
			_lblRisultato.innerHTML = "";
			aus = [];
			_img.src = " ";
		}

		_btnGioca.disabled = true;
		timerId = setTimeout(visualizza, 1000);
	}

	function visualizza() {
		let n;

		do {
			n = generaNumero(1, 11);
		} while(aus.includes(n));

		aus.push(n);
		 
		_img.src = `img/bg_d${n}.gif`;

		if(n > 7) {
			n = 0.5;
		}

		_lblSomma.innerHTML = parseFloat(_lblSomma.innerHTML) + n;
		_lblCarte.innerHTML = parseInt(_lblCarte.innerHTML) + 1;

		if(_lblCarte.innerHTML == "3") {
			if(parseFloat(_lblSomma.innerHTML) <= 7.5) {
				_lblRisultato.innerHTML = "Hai vinto!";
			}
			else {
				_lblRisultato.innerHTML = "Hai perso!";
			}

			_btnGioca.disabled = false;
		}
		else {
			setTimeout(visualizza, 1000);
		}
	}
}

function generaNumero(min, max){
    let rnd = Math.floor((max - min) * Math.random()) + min;   
    return rnd;
}

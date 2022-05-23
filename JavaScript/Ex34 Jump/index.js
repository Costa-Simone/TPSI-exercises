"use strict";

const COLONNE=61;
const RIGHE=10;
const GRIGIO = "rgb(252, 252, 252)";
const BLU = "rgb(0, 0, 255)";
const ROSSO = "rgb(255, 0, 0)";

window.onload=function()
{
    var _wrapper = document.getElementById("wrapper");
	let _btnJump = document.getElementById("btnJump");
	let _txtPunti = document.getElementById("txtPunti");

	_btnJump.addEventListener("click", jump);

	_txtPunti.value = 0;

	let cont = 6;
	let n;
	
	// creazione matrice gi gioco
    for (var i = 0; i < RIGHE; i++){
        for (var j = 0; j < COLONNE; j++)
        {
           let div = document.createElement("div");

		   div.id = `div-${RIGHE - i - 1}-${j}`;
		   div.classList.add("cella");

		   _wrapper.appendChild(div);
        }
	}
	
	var player1 = document.getElementById("div-0-30")
	var player2 = document.getElementById("div-6-30")
	var ostacolo = document.getElementById("div-1-30")

	player1.style.backgroundColor = "blue";

	let timerId = setInterval(visualizza, 400);

	function jump() {
		let newPLayer = document.getElementById("div-4-30");

		player1.style.backgroundColor = "";
		newPLayer.style.backgroundColor = "blue";

		setTimeout(jumpBack, 2000);
	}
	function jumpBack() {
		let newPLayer = document.getElementById("div-4-30");
		let cella = document.getElementById("div-1-30");

		if(cella.style.backgroundColor == "red") {
			sconfitta();
		}
		else {
			newPLayer.style.backgroundColor = "";
			player1.style.backgroundColor = "blue";
			_txtPunti.value = parseInt(_txtPunti.value) + n;
		}
	}
	function visualizza() {
		for (var i = 1; i < 4; i++){
			for (var j = COLONNE - 2; j >= 0; j--)
			{
			   let cella = document.getElementById(`div-${i}-${j}`);

			   if(cella.style.backgroundColor == "red") {
					let newCella = document.getElementById(`div-${i}-${j + 1}`);
	
					cella.style.backgroundColor = "";
					newCella.style.backgroundColor = "red";

					for(let k = 0; k < 4; k++) {
						let endCella = document.getElementById(`div-${1 + k}-${COLONNE - 1}`);

						endCella.style.backgroundColor = "";
					}
			   }
			}
		}

		let cell = document.getElementById("div-1-30");
		
		if(cell.style.backgroundColor == "red" && player1.style.backgroundColor == "blue") {
			sconfitta();
		}
		
		if(cont == 6) {
			n = random(0, 4);

			for(let j = 0; j < n; j++) {
				let cella = document.getElementById(`div-${1 + j}-${0}`);
	
				cella.style.backgroundColor = "red";
			}

			cont = 0;
		}
		else {
			cont++;
		}
	}
	function sconfitta() {
		alert("Game Over");
		_btnJump.disabled = true;

		if(timerId) {
			clearInterval(timerId);
		}
	}
}

function random(a, b){
	return Math.floor((b-a)*Math.random()) +a;
	
}

"use strict";

const RIGHE = 5
const COLONNE = 14
const x0 = 32
const y0 = 11
   
var vet=[];
let x = x0
let y = y0
let jsonCount = 0
   
$(document).ready(function(){ 
	let tappeto = $("#mainFrame>div")
	let imgRoulette = $("#mainFrame>img") 
	let numRoulette = $("#mainFrame>span")
	let punti = $("#leftFrame p")
	let avvia = $("#leftFrame>button")

	avvia.prop("disabled", true)
	creaCaselle()
	avvia.on("click", giraRoulette)

	//#region SUBROUTINE
	function giraRoulette() {
		imgRoulette.prop("src", "img/rouletteMov.gif")
		setTimeout(fermaRoulette, 3000)
	}
	function fermaRoulette() {
		let estrazione = generaNumero(0, 37)
		let win = 0

		imgRoulette.prop("src", "img/roulette.gif")
		spostaEstrazioni()

		let n
		for(let i = 0; i < json.length; i++) {
			if(json[i]["numbers"].includes(estrazione)) {
				numRoulette.eq(0).css("backgroundColor", json[i]["color"])
				break
			}
		}
		numRoulette.eq(0).text(estrazione)

		for(let i = 0; i < vet.length; i++) {
			let pos = vet[i]

			if(json[pos]["numbers"].includes(estrazione)) {
				win += json[pos]["win"]
			}
			else {
				tappeto.children().eq(pos).children().remove()
			}
		}

		setTimeout(function() {
			alert(`Hai vinto ${win} fiches`)
			punti.text(parseInt(punti.text()) + win)
			tappeto.children().children().remove()
			vet = []
			avvia.prop("disabled", true)
		}, 200)
	}
	function spostaEstrazioni() {
		for(let i = 4; i > 0; i--) {
			numRoulette.eq(i).text(numRoulette.eq(i - 1).text())
			numRoulette.eq(i).css("backgroundColor", numRoulette.eq(i - 1).css("backgroundColor"))
		}
	}
	function posizionamentoFiche() {
		if(parseInt(punti.text()) == 0) {
			alert("Fiche terminate!")
			tappeto.children().off("click")
		}
		else {
			if(!vet.includes($(this).prop("id"))) {
				$("<div>").addClass("fiche").appendTo($(this))
				vet.push($(this).prop("id"))
				punti.text(parseInt(punti.text()) - 1)
				avvia.prop("disabled", false)
			}
		}
	}
	function creaCaselle() {
		for(let i = 0; i < RIGHE; i++) {
			for(let j = 0; j < COLONNE; j++) {
				let casella = $("<div>").addClass("casella").css("left", x).css("top", y).prop(json[jsonCount]).appendTo(tappeto)
	
				x += 53
				jsonCount++
	
				if(casella.prop("win") != 0) {
					casella.on("click", posizionamentoFiche)
				}
			}
	
			x = x0
			y += 53
		}
	}
	//#endregion
})

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

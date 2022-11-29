"use strict";

$(document).ready(function(){ 
	let _wrapper = $("#wrapper")
	let _tooltip = $("#tooltip")
	let _txtPosizione = $("#txtPosizione")
	let _txtColore = $("#txtColore")
	let _lblMsg = $("#lblMsg")
	let _btnOk = $("#btnOk")

	_tooltip.hide()
	_wrapper.css("backgroundColor", "#ff9").css("float", "left")
	_btnOk.on("click", indovinaNumero)

	for(let i = 0; i < 9; i++) {
		let intensita = generaNumero(0, 256)

		$("<div>").addClass("box").text(`${(i + 1)}`).css("backgroundColor", `rgb(${intensita}, ${intensita}, ${intensita})`).on("mouseover", function() {
			let div = $(this)
			_tooltip.text(div.css("backgroundColor"))
			_tooltip.fadeIn(1000, function() {
				_tooltip.show()
			})
		}).on("mouseout", function() {
			_tooltip.fadeOut(1000, function() {
				_tooltip.hide()
			})
		}).appendTo(_wrapper)
	}

	function indovinaNumero() {
		let box = parseInt(_txtPosizione.val()) - 1
		let colore = parseInt(_txtColore.val())
		let coloreBoxSelezionato = parseInt(_wrapper.children().eq(box).css("backgroundColor").substr(4, 3))

		if(colore < coloreBoxSelezionato) {
			_txtColore.css("backgroundColor", "red").css("color", "white")
			_lblMsg.text("Troppo piccolo").show()
		}
		else if(colore > coloreBoxSelezionato) {
			_txtColore.css("backgroundColor", "blue").css("color", "white")
			_lblMsg.text("Troppo grande")
		}
		else if(colore == coloreBoxSelezionato) {
			_txtColore.css("backgroundColor", "white").css("color", "black")
			_lblMsg.text("BRAVO")
			_wrapper.children().eq(box).css("backgroundColor", "#ff9").css("border", "")
		}
	}
})

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

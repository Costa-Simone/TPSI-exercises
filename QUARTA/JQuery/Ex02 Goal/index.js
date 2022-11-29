"use strict"

$(document).ready(function()
{	
	let _calciatore = $("#calciatore");
	let _palla = $("#palla");
	let btnEntra= $("#btnEntra");
	let btnEsci = $("#btnEsci");
	let btnVisualizzaPalla = $("#btnVisualizzaPalla");
	let btnNascondiPalla = $("#btnNascondiPalla");
	let btnTira = $("#btnTira");

	_calciatore.hide()
	_palla.hide()
	btnNascondiPalla.hide()
	btnEsci.hide()
	btnTira.hide()

	btnEntra.on("click", function() {
		btnEntra.hide()
		_calciatore.show(2000, function() {
			btnEsci.show()
		})

		checkTira()
	})
	btnEsci.on("click", function() {
		btnEsci.hide()
		_calciatore.hide(2000, function() {
			btnEntra.show()
		})

		checkTira()
	})
	btnVisualizzaPalla.on("click", function() {
		btnVisualizzaPalla.hide()
		_palla.fadeIn(2000, function() {
			btnNascondiPalla.show()
		})
		
		let pos = {
			"left" : "",
			"top" : "",
			"width" : "",
			"heighy" : ""
		}

		_palla.css(pos)
		
		checkTira()
	})
	btnNascondiPalla.on("click", function() {
		btnNascondiPalla.hide()
		_palla.fadeOut(2000, function() {
			btnVisualizzaPalla.show()
		})

		checkTira()
	})
	$("#btnRosso").on("click", function() {
		_palla.prop("src", "img/pallaRossa.jpg")
	})
	$("#btnBianco").on("click", function() {
		_palla.prop("src", "img/palla.jpg")
	})
	btnTira.on("click", function() {
		let pos = {
			"left" : "1025px",
			"top" : "300px",
			"width" : "50px",
			"heighy" : "50px"
		}

		btnTira.hide()

		_palla.animate(pos, 1500)
	})

	function checkTira() {
		if(_calciatore.css("display") != "none" && _palla.css("display") != "none") {
			btnTira.show()
		}
		else {
			btnTira.hide()
		}
	}
});

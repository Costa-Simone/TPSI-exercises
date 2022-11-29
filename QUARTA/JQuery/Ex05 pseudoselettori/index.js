$(document).ready(function () {

	let _ris = $("#txtRis");
	$("button").on("click", function() {
		$(":nth-of-type(2)").css("backgroundColor", "yellow")
	})

	$("#wrapper div, #wrapper p").on("click", function () {
		_ris.empty();
		// La funzione elabora() fa un ciclo da 1 a 7 per vedere se
		// il box corrente è nth-child(${i}) oppure nth-of-type(${i})
		elabora($(this));
		visualizza("-----------------------");

		if($(this).is("p")) {
			visualizza("Sono un tag p")
		}
		if($(this).is("#blu")) {
			visualizza("Sono un tag con id blu")
		}
		if($(this).html().includes("my Div")) {
			visualizza("Sono un tag con testo my Div")
		}
		if($(this).is(":contains('my Div')")) {
			visualizza("Sono un tag con testo my Div")
		}
		if($(this).html().includes("<span")) {
			visualizza("Sono un tag che contiene un tag span")
		}
		if($(this).is(":has('span')")) {
			visualizza("Sono un tag che contiene un tag span")
		}
		if($(this).is(":last-child")) {
			visualizza("Sono l'ultimo figlio")
		}
		if($(this).is(":last-of-type")) {
			visualizza("Sono l'ultimo figlio di questo tipo")
		}
	});

	function elabora(box) {
		for (let i = 1; i <= box.parent().children().length; i++){
			// 1 - i-esimo elemento generico 
			if (box.is(`:nth-child(${i})`))
				visualizza(`nth-child(${i})`);
			// 2 - i-esimo elemento generico, ma solo se di tipo DIV		
			if (box.is(`div:nth-child(${i})`))
				visualizza(`div:nth-child(${i})`);
			// 3 - i-esimo elemento generico, ma solo se di tipo P			
			if (box.is(`p:nth-child(${i})`))
				visualizza(`p:nth-child(${i})`);
			// 4 - i-esimo elemento del suo tipo			
			if (box.is(`:nth-of-type(${i})`))
				visualizza(`nth-of-type(${i})`);
			// 5 - i-esimo elemento del suo tipo, ma solo se di tipo DIV
			if (box.is(`div:nth-of-type(${i})`))
				visualizza(`div:nth-of-type(${i})`);
			// 6 - i-esimo elemento del suo tipo, ma solo se di tipo P 
			if (box.is(`p:nth-of-type(${i})`))
				visualizza(`p:nth-of-type(${i})"`);
		}
	}
	function visualizza(msg) {
		_ris.html(_ris.html() + msg + "<br>");
	}
});

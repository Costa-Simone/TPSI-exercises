'use strict'

let _form1;

$(document).ready(function(){	
	_form1 = $("#form1")
})

function visualizza(index) {
	let s

	switch(index) {
		case 1:
			// alert(_form1.find("input[type=text]:first-of-type").val())
			alert(_form1.find("input[type=text]").first().val())
			break

		case 2:
			// alert(_form1.find("select:first-of-type").first().val())
			// alert(_form1.find("select").first().val())
			// alert(_form1.children("label").eq(1).children().first().val())
			alert($("label:nth-of-type(2) > select").val())
			break

		case 3:
			s = ""

			_form1.find("input[type=checkbox]").each(function(i, ref) {
				s += $(ref).prop("name") + ": " + $(ref).val() + "\n"
			})

			alert(s)
			break

		case 4:
			s = ""

			_form1.find("input[type=checkbox]:checked").each(function(i, ref) {
				s += $(ref).prop("name") + ": " + $(ref).val() + "\n"
			})

			 // s = _form1.find("input[type=checkbox]:checked").val()
			 // in lettura accede solo al primo elemento
			
			alert(s)
			break

		case 5:
			s = ""

			/* _form1.find("input[type=checkbox]:not(:checked)").each(function(i, ref) {
				s += $(ref).prop("name") + ": " + $(ref).val() + "\n"
			}) */

			_form1.find("input[type=checkbox]").not(":checked").each(function(i, ref) {
				s += $(ref).prop("name") + ": " + $(ref).val() + "\n"
			})
			
			alert(s)
			break

		case 6:
			// alert(_form1.find("input[name=opt]:checked").val())
			alert(_form1.find("input[type=radio]").filter(":checked").val())
			break

		case 7:
			s = ""

			_form1.find("input[name=opt]").not(":checked").each(function(i, ref) {
				s += $(ref).val() + "\n"
			})

			alert(s)
			break

		case 8:
			alert(_form1.find("select").last().val())
			// alert(_form1.find("select").eq(1).val())
			// alert(_form1.find("select[multiple]").val())
			// alert(_form1.find("select").filter("[multiple]").val())
			// alert(_form1.children("select:last-of-type").val())
			break
	}
}
function imposta(index) {
	switch(index) {
		case 1:
			_form1.find("input[type=text]").val("Prova")
			break
			
		case 2:
			_form1.find("select:nth-of-type(1)").val("1")
			break
				
		case 3:
			_form1.find("input[type=checkbox]").eq(0).prop("checked", true)
			break
				
		case 4:
			_form1.find("input[type=radio]").eq(0).prop("checked", true)
			break
				
		case 5:
			_form1.find("select").val(['nessun valore'])
			break
	}
}

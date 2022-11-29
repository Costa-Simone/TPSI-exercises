'use strict'

let wrapper;

function evidenzia(selector){
	wrapper.children().css("backgroundColor", "")
	wrapper.children(selector).css("backgroundColor", "yellow")
}

$(document).ready(function(){	
	let s = ""

	wrapper = $("#wrapper");
	
	$("input[type=button]").eq(0).on("click", function() {
		alert(wrapper.children().length)
	})
	$("input[type=button]").eq(1).on("click", function() {
		wrapper.children().each(function(i, ref) {
			s += $(ref).text()
		})
		
		alert(s)
	})
	$("input[type=button]").eq(2).on("click", function() {
		wrapper.children("li:nth-of-type(even)").css("backgroundColor", "yellow")
	})
	$("input[type=button]").eq(3).on("click", function() {
		/* // let luminosita = 50

		wrapper.children().each(function(i, ref) {
			if(i % 2 == 0) {
				// $(ref).css("backgroundColor", `rgb(0, ${luminosita}, 0)`)
				$(ref).css("backgroundColor", `rgb(0, ${50 * i + 1}, 0)`)
				// luminosita += 50
			}
		}) */

		wrapper.children().filter("li:nth-of-type(odd)").each(function (i, ref) {
			$(ref).css("backgroundColor", `rgb(0, ${50 * (i + 1)}, 0)`)
		})
	})
})

'use strict'
const URL = "https://randomuser.me/api"

$(document).ready(function(){	
	let table = $("#wrapper").children("table");
	let url = URL + "?results=100";
	let request = $.ajax({"url":url})

	request.fail(errore)
	request.done (function(data){	
		console.log(data)
		
		for(let person of data.results) {
			let tr = $("<tr>").appendTo(table.children("tbody"))

			$("<td>").appendTo(tr).text(getName(person.name))
			$("<td>").appendTo(tr).text(person.nat)
			$("<td>").appendTo(tr).text(JSON.stringify(person.location.country))
			$("<td>").appendTo(tr).text(JSON.stringify(person.location.state))
			$("<td>").appendTo(tr).text(person.cell)
			let td = $("<td>").appendTo(tr)
			$("<img>").appendTo(td).prop("src", person.picture.thumbnail)
		}

		table.DataTable()
	});	
	
	function getName(name) {
		return name.title + " " + name.first + " " + name.last
	}
})

function errore(jqXHR, text_status, string_error) {
    if (jqXHR.status == 0)
        alert("Connection Refused or Server timeout");
	else if (jqXHR.status == 200)
        alert("Formato JSON non corretto : " + jqXHR.responseText);
    else
        alert("Server Error: " + jqXHR.status + " - " + jqXHR.responseText);
}

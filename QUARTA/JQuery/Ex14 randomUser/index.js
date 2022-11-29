"use strict";

const URL = "https://randomuser.me/api"

$(document).ready(function(){	
	
	let url = URL + "?&format=pretty&results=5&gender=male"
	
	let request = $.ajax({"url":url})
	request.fail(errore)
	request.done (function(data){	
		console.log(data)
	})
})

function errore(jqXHR, text_status, string_error) {
    if (jqXHR.status == 0)
        alert("Connection Refused or Server timeout");
	else if (jqXHR.status == 200)
        alert("Formato dei dati non corretto : " + jqXHR.responseText);
    else
        alert("Server Error: " + jqXHR.status + " - " + jqXHR.responseText);
}

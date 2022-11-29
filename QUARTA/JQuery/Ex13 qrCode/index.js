"use strict"


$(document).ready(function(){
	let qr1 = $("#qrCode1")
	let qr2 = $("#qrCode2")
	
    qr1.qrcode("this plugin is great");
    qr2.qrcode("http://www.vallauri.edu");
})

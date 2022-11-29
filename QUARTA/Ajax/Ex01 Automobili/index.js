"use strict"

$(document).ready(function () {
    let _lstMarche = $("#lstMarche");
    let _lstModelli = $("#lstModelli");
	let _table= $("table")
    let _dettagli=$(".row").eq(2).children("div").eq(1)
    let request = inviaRichiesta("GET", "/marche")
  
    _dettagli.hide()
    request.fail(errore)
    request.done(function(data) {
        console.log(data)

        for (let item of data) {
            $("<option>").val(item["id"]).text(item["nome"]).appendTo(_lstMarche)
        }

        _lstMarche.val(-1)
        _lstMarche.on("change", getModels)
    })

    function getModels() {
        
    }
});

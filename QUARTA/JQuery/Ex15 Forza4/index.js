"use strinct"

let turno = "yellow"

$(document).ready(function() {
    let _wrapper = $("#wrapper")
    let _header = $("#header")

    creaLayout()

    function creaLayout() {
        for(let i = 0; i < 7; i++) {
            $("<div>").addClass("pedina").prop("id", `div-${i}`).appendTo(_header).hover(function() {
                $(this).css("backgroundColor", turno)
            }, function() {
                $(this).css("backgroundColor", "#bbb")
            }).on("click", discesa);
    
            for(let j = 0; j < 6; j++) {
                $("<div>").addClass("pedina").prop("id", `div-${j}-${i}`).prop("occupato", false).appendTo(_wrapper)
            }
        }
    }

    function discesa() {
        let colonna = parseInt($(this).prop("id").split("-")[1])
        let pos = {
            "position" : "absolute",
            "top" : 5,
            "left" : colonna * 60 + 5,
            "backgroundColor" : turno
        }
        let riga

        for(riga = 0; riga < 6; riga++) {
            if($(`#div-${riga}-${colonna}`).prop("occupato") != false) {
                break
            }
        }

        riga--

        if(riga >= 0) {
            let div = $("<div>").addClass("pedina").css(pos).appendTo(_wrapper)

            $("#header").children("div").off("click")
            div.animate({top : (riga * 60 + 5)}, 200 * riga, function() {
                if(controlloVincita()) {
                    alert(`Vince il giocatore ${turno}`)
                }
                else {
                    $("#header").children("div").on("click", discesa)
                }
            })
            $(`#div-${riga}-${colonna}`).prop("occupato", true)

            if(turno == "yellow") {
                turno = "red"
            }
            else {
                turno = "yellow"
            }
            
            $(this).css("backgroundColor", turno)
        }
        else {
            alert("Mossa non valida")
        }
    }
    function controlloVincita() {
        return true
    }
})

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

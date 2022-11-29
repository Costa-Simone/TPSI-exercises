"use strinct"

$(document).ready(function(){
    let wrapper = $("#wrapper");
    let orologio =  $(".orologio")
    let _voto = $(".voto")
    let v = 0
    let _invia

    orologio.text("20:00")
    _voto.hide()
    let timeId = setInterval(cronometro, 1)
    creaWrapper()

    function creaWrapper() {
        let n = 0

        for(let question of domande) {
            let div = $("<div>").appendTo(wrapper)

            $("<p>").css("color", "blue").css("fontSize", "16pt").appendTo(div).text(question["domanda"])
            let pos = 0

            for(let answer of question["risposte"]) {

                $("<input>").prop("type", "radio").appendTo(div).prop("pos", pos).prop("name", n)
                $("<span>").text(answer).appendTo(div).prop("name", n).prop("pos", pos)
                $("<br>").appendTo(div)

                pos++
            }

            $("<input>").prop("type", "radio").appendTo(div).prop("name", n).prop("checked", true)
            $("<span>").text("Non rispondo").appendTo(div).prop("pos", "")
            $("<br>").appendTo(div)

            n++
        }

        _invia = $("<button>").text("invia").appendTo(wrapper).addClass("buttonEnabled").on("click", inviaTest)
    }
    function inviaTest() {
        for(let i = 0; i < domande.length; i++) {
            let answer = $("#wrapper").children("div").eq(i).children(":checked")

            if($("#wrapper").children("div").eq(i).children("span").eq(parseInt(answer.prop("pos"))).text() != "") {
                if(parseInt(answer.prop("pos")) == domande[i]["correct"]) {
                    v++
                }
                else if(parseInt(answer.prop("pos")) != domande[i]["correct"]) {
                    v -= 0.25
                    $("#wrapper").children("div").eq(i).children("span").eq(parseInt(answer.prop("pos"))).css("color", "red")
                }
            }
        }

        _voto.text(v)
        _voto.slideDown(100, mostraVoto)
    }
    function mostraVoto() {
        _voto.show()
        _invia.removeClass("buttonEnabled")
        _invia.addClass("buttonDisabled")
        clearInterval(timeId)
    }
    function cronometro() {
        let time = orologio.text()
        let min = parseInt(time.split(":")[0])
        let sec = parseInt(time.split(":")[1])

        if(min == 0 && sec == 0) {
            v = 1
            _voto.text(v)
            _voto.slideDown(100, mostraVoto)
            _invia.removeClass("buttonEnabled")
            _invia.addClass("buttonDisabled")
        }
        else {
            if(sec == 0) {
                min--
                sec = 59
            }
            else {
                sec--
            }
    
            orologio.text(`${min}:${sec}`)
        }
    }
});
 
function pad(number) {
    // Una semplice funzione per aggiungere uno 0 davanti ad un numero < 10
    return (number < 10 ? '0' : '') + number;
}

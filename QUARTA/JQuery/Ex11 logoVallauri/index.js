"use strinct"

$(document).ready(function() {
    let _wrapper = $("#wrapper")

    for(let i = 0; i < 36; i++) {
        $("<div>").addClass("box").appendTo(_wrapper)
    }
    
    setInterval(function() {
        let pos = generaNumero(0, 36)
        let _div = _wrapper.children("div").eq(pos)

        _div.animate({opacity : 0.3}, 400)
            .animate({opacity : 0.6}, 400)
            .animate({opacity : 0.1}, 400)
    }, 32)
})

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

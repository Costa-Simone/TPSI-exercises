"use strinct"

let carrello = []

$(window).ready(function() {
    let _elencoArticoli = $("#elencoArticoli")
    let _details = $(".details")
    let _btnCarrello = $("#btnCarrello")
    let _carrello = $("#carrello")

    _details.hide()
    _carrello.hide()
    _btnCarrello.on("click", apriCarrello)

    for(let i = 0; i < articoli.length; i++) {
        let div = $("<div>").prop("id", `article-${i}`).addClass("article").appendTo(_elencoArticoli)
        $("<img>").prop("src", `img/${articoli[i]["src"]}.jpg`).prop("title", "Aggiungi al carrello").addClass("image").appendTo(div).on("mouseover", function() {
            $(this).siblings().css("opacity", "1")
        }).on("mouseout", function() {
            $(this).siblings().css("opacity", "0")
        }).on("click", mostraArticolo).prop("pos", i)
        $("<div>").addClass("name").text(`${articoli[i]["nome"]}`).appendTo(div).css("opacity", "0")
    }

    function apriCarrello() {
        _carrello.slideDown(1000, function() {
            _carrello.show()
        })
        _btnCarrello.html("&#708 Chiudi carrello")
        _btnCarrello.off("click")
        _btnCarrello.on("click", chiudiCarrello)
    }
    function chiudiCarrello() {
        _carrello.slideUp(1000, function() {
            _carrello.hide()
        })
        _btnCarrello.html("&#709 Apri carrello")
        _btnCarrello.off("click")
        _btnCarrello.on("click", apriCarrello)
    }
    function creaCarrello() {
        _carrello.children().html("")
        let i = 0

        let t = $("<tr>").appendTo(_carrello.children())
        $("<th>").css("width", "30%").text("nome").appendTo(t)
        $("<th>").css("width", "30%").text("prezzo").appendTo(t)
        $("<th>").css("width", "30%").text("quantita").appendTo(t)
        $("<th>").css("width", "10%").text("").appendTo(t)

        for(let articolo of carrello) {
            let tr = $("<tr>").appendTo(_carrello.children())
            $("<td>").text(articolo["nome"]).css("width", "30%").appendTo(tr)
            $("<td>").text(articolo["prezzo"]).css("width", "30%").appendTo(tr)
            $("<td>").text(articolo["quantita"]).css("width", "30%").appendTo(tr)
            let td = $("<td>").css("width", "10%").appendTo(tr)
            $("<img>").prop("src", "img/_cestino.png").css("cursor", "pointer").appendTo(td).prop("pos", i).on("click", function() {
                if(carrello[parseInt($(this).prop("pos"))]["quantita"] > 1) {
                    carrello[parseInt($(this).prop("pos"))]["quantita"] = carrello[parseInt($(this).prop("pos"))]["quantita"] - 1
                }
                else {
                    carrello.splice(parseInt($(this).prop("pos")), 1)
                }

                creaCarrello()
            })

            i++
        }
    }
    function mostraArticolo() {
        _details.slideDown(1000, function() {
            _details.show()
        })

        _details.html("")
        $("<div>").css("cursor", "pointer").addClass("detail-close").text("X").appendTo(_details).on("click", function() {
            _details.slideUp(1000, function() {
                _details.hide()
            })
        })
        let divImg = $("<div>").addClass("detail-img").appendTo(_details)
        $("<img>").prop("src", `${$(this).prop("src")}`).appendTo(divImg)
        let divInfo = $("<div>").addClass("detail-info").appendTo(_details)
        $("<h4>").addClass("item-title").text(articoli[parseInt($(this).prop("pos"))]["nome"]).appendTo(divInfo)
        $("<p>").text(articoli[parseInt($(this).prop("pos"))]["descrizione"]).appendTo(divInfo)
        $("<p>").text(`$ ${articoli[parseInt($(this).prop("pos"))].prezzo}`).appendTo(divInfo)
        $("<button>").text("Aggiungi al carrello").addClass("item-add").appendTo(divInfo).on("click", aggiungiAlCarrello).prop("pos", ($(this).prop("pos")))
    }
    function aggiungiAlCarrello() {
        let trovato = false
        let oggetto = {
            "nome" : articoli[parseInt(($(this).prop("pos")))]["nome"],
            "prezzo" : articoli[parseInt(($(this).prop("pos")))]["prezzo"],
            "quantita" : 1
        }

        for(let articolo of carrello) {
            if(articolo["nome"] == oggetto["nome"]) {
                articolo["quantita"] = articolo["quantita"] + 1
                trovato = true
                creaCarrello()
            }
        }

        if(!trovato) {
            carrello.push(oggetto)
            creaCarrello()
        }
    }
})

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

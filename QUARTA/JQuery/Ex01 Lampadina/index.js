"use strict";

$(document).ready(function () {
    //#region PARTE 1
    let _lampadina = $(".lampadina");
    let _btnAccendi = $("#btnAccendi");
    let _btnSpegni = $("#btnSpegni");
    
    _lampadina.addClass("accesa");
    _lampadina.hide();
    _btnAccendi.hide();
    _btnSpegni.hide();

    _btnAccendi.fadeIn(2000, function() {
        _btnAccendi.show();
        _btnAccendi.on("click", function() {
            // accende lampadina in due secondi, poi fa apparire lampadina
            _lampadina.fadeIn(2000, function() {
                _btnSpegni.show();
            });
    
            _btnAccendi.hide();
        });
    });

    _btnSpegni.on("click", function() {
        _lampadina.fadeOut(2000, function() {
            _btnAccendi.show();
        });

        _btnSpegni.hide();
    });

    //#endregion
    //#region PARTE 2
    let _descrizione = $("#descrizione");
    let _contenuto = $("#contenuto");

    _contenuto.hide();
    _descrizione.addClass("pulsanteDescrizione");
    _descrizione.on("mouseover", visualizza);
    _descrizione.on("mouseout", function nascondi() {
        _descrizione.off("mouseout");
        _contenuto.hide(2000, function() {
            _descrizione.on("mouseover", visualizza);
            _descrizione.on("mouseout", nascondi);
        });
    });

    let contenuto = {
        "width" : "500px",
        "padding" : "5px",
        "border" : "1px solid black",
        "margin-left" : "140px",
        "marginTop" : "10px",
        "backgroundColor" : "#ffa"
    };

    _contenuto.css(contenuto);
    //#endregion
    //#region FUNZIONI
    function visualizza() {
        _descrizione.off("mouseover");
        _contenuto.show(2000);
    };
    //#endregion
})

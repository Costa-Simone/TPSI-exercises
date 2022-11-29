"use strict";

window.onload=function () {
    let _salve = document.getElementsByTagName("input")[0];

    _salve.addEventListener("click", function() {
        let json = JSON.stringify(swatches);
        
        localStorage.setItem("swatches_json", json);
        alert("Dati salvati correttamente!");
    })
}
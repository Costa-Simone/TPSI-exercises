'use strict';

let intestazioni = ["Gender", "Code", "Price", "Color", "Image"];

window.onload = function () {
    let _table = document.getElementById("table");
    let json = localStorage.getItem("swatches_json");
    let swatchesStore = JSON.parse(json);
    let _tbody = document.createElement("tbody");
    let _inserisci = document.getElementById("inserisci");

    creaIntestazione();
    aggiornaTabella();
    _inserisci.addEventListener("click", function() {
        window.location.href = "inserisci.html";
    });

    function aggiornaTabella() {
        _tbody.innerHTML = "";

        for(let mainItem of swatchesStore) {
            for(let model of  mainItem.models) {
                for(let swatch of model.swatches) {
                    let _tr = document.createElement("tr");
                    let _td;
                    let _img;

                    _tbody.appendChild(_tr);

                    _td = document.createElement("td");
                    _tr.appendChild(_td);
                    _td.innerHTML = mainItem.gender;

                    _td = document.createElement("td");
                    _tr.appendChild(_td);
                    _td.innerHTML = model.code;

                    _td = document.createElement("td");
                    _tr.appendChild(_td);
                    _td.innerHTML = model.price;

                    _td = document.createElement("td");
                    _tr.appendChild(_td);
                    _td.innerHTML = swatch["color"];
                    _img = document.createElement("img");

                    _td = document.createElement("td");
                    _tr.appendChild(_td);
                    _td.appendChild(_img);
                    _img.src = `img/${swatch.image}`;
                    _img.width = 30;
                }
            }
        }
    }
    function creaIntestazione() {
        let _thead = document.createElement("thead");
        let _tr = document.createElement("tr");

        _tbody = document.createElement("tbody");

        _table.appendChild(_thead);
        _table.appendChild(_tbody);
        _thead.appendChild(_tr);

        for(let intestazione of intestazioni) {
            let _th = document.createElement("th");

            _tr.appendChild(_th);
            
            _th.innerHTML = intestazione;
        }
    }
}

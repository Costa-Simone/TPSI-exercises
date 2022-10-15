"use strinct"

let intestazioni = ["name", "surname", "state", "nat", "img"];
let dettaglioCorrente;
let naz = "tutti";
let currentPage = 0;
let scelta;
let _buttons;

window.onload = function() {
    let _lstNazioni = this.document.getElementById("lstNazioni");
    let _table = document.getElementsByTagName("table")[0];
    let _thead = document.getElementsByTagName("thead")[0];
    let _tbody = document.getElementsByTagName("tbody")[0];
    let _detailsWrapper = document.getElementById("detailsWrapper");
    _buttons = document.getElementsByName("btn");
    let _nPagina = document.getElementById("nPagina");
    let _buttonsWrapper = document.getElementById("buttonsWrapper");

    _buttons[0].disabled = true;

    ordina();
    generaList();
    generaIntestazione();
    visualizzaTabella();

    for(let i = 0; i < 4; i++) {
        _buttons[i].addEventListener("click", function() {
            console.log(this.innerHTML);
            switch(this.innerHTML) {
                case "first":
                        currentPage = 0;
                        _nPagina.innerHTML = parseInt(currentPage) + 1 + "/10";
                        _buttons[0].disabled = true;
                        _buttons[1].disabled = true;
                        _buttons[2].disabled = false;
                        _buttons[3].disabled = false;
                    break;
                    
                case "prevPage":
                    currentPage--;
                    
                    _nPagina.innerHTML = parseInt(currentPage) + 1 + "/10";
                    _buttons[3].disabled = false;
                    _buttons[2].disabled = false;
    
                    if(currentPage == 0) {
                        _buttons[0].disabled = true;
                        _buttons[1].disabled = true;
                        _buttons[2].disabled = false;
                        _buttons[3].disabled = false;
                    }
                    break;
                        
                case "nextPage":
                    currentPage++;
                
                    _nPagina.innerHTML = parseInt(currentPage) + 1 + "/10";
                    _buttons[1].disabled = false;
                    _buttons[0].disabled = false;
    
                    if(currentPage == parseInt((people.results.length - 1) / 4)) {
                        _buttons[2].disabled = true;
                        _buttons[3].disabled = true;
                    }
                    break;
                        
                case "last":
                        currentPage = parseInt((people.results.length - 1) / 4);
                    _nPagina.innerHTML = parseInt(currentPage) + 1 + "/10";
                        _buttons[0].disabled = false;
                        _buttons[1].disabled = false;
                        _buttons[2].disabled = true;
                        _buttons[3].disabled = true;
                    break;
            }

            visualizzaTabella();
        });
    }

    _lstNazioni.addEventListener("change", function() {
        naz = _lstNazioni.value;

        visualizzaTabella();
    });
    function ordina() {
		let myKey = "nat";
		let scelta = 1;

		people.results.sort(function(record1, record2) {
			let str1 = record1[myKey].toUpperCase();
			let str2 = record2[myKey].toUpperCase();

			if (str1 < str2)
				return -scelta;
			else if (str1 > str2)
				return scelta;
			else 
				return 0;
		});

		visualizzaTabella();
	}
    function visualizzaTabella() {
        _tbody.innerHTML = "";
        _detailsWrapper.innerHTML = "";
        scelta = 0;
        
        if(naz == "tutti") {
            _buttonsWrapper.style.display = "block"; 
            scelta = 0;
            inizio = currentPage * 4;

            for(let i = inizio; i < (inizio + 4) && i < people.results.length; i++) {
                visualizzaPersona(i);
            }
        }
        else {
            scelta = 1;
            _buttonsWrapper.style.display = "none";

            for(let [i, result] of people.results.entries()) {
                visualizzaPersona(i);
            }
        }
    }
    function visualizzaPersona(i) {
        let _tr = document.createElement("tr");

        if(scelta == 0) {
            _tbody.appendChild(_tr);
        }
        else if(scelta == 1) {
            if(people.results[i].nat == naz) {
                _tbody.appendChild(_tr);
            }
        }

        let _td = document.createElement("td");
        _td.innerHTML = people.results[i].name.first + " " + people.results[i].name.last;
        _tr.appendChild(_td);

        _td = document.createElement("td");
        _td.innerHTML = people.results[i].login.username;
        _tr.appendChild(_td);

        _td = document.createElement("td");
        _td.innerHTML = people.results[i].location.state;
        _tr.appendChild(_td);

        _td = document.createElement("td");
        _td.innerHTML = people.results[i].nat;
        _tr.appendChild(_td);

        _td = document.createElement("td");
        let _img = document.createElement("img");
        _img.src = people.results[i].picture.medium;
        _img.width = 50;
        _img.height = 50;
        _img.addEventListener("click", function() {
            _detailsWrapper.innerHTML = "";

            let _img = document.createElement("img");
            _img.src = people.results[i].picture.large;
            _detailsWrapper.appendChild(_img);

            dettaglioCorrente = i;

            let _div = document.createElement("div");
            _div.innerHTML = people.results[i].name.first + " " + people.results[i].name.last + "<br />";
            _div.innerHTML += people.results[i].email+ "<br />";
            _div.innerHTML += people.results[i].phone + "<br />";
            _div.innerHTML += people.results[i].cell;

            _detailsWrapper.appendChild(_div);

            let _btn = document.createElement("button");
            _btn.innerHTML = "elimina";
            _btn.addEventListener("click", elimina);
            _detailsWrapper.appendChild(_btn);
        });
        _td.appendChild(_img);
        _tr.appendChild(_td);
    }
    function elimina() {
        people.results.splice(dettaglioCorrente, 1);

        generaList();
        visualizzaTabella();
    }
    function generaList() {
        let nat = [];
        let _option = document.createElement("option");

        _lstNazioni.innerHTML = "";
        _option.innerHTML = "tutti";

        _lstNazioni.appendChild(_option);

        for(let result of people.results) {
            if(!nat.includes(result.nat)) {
                _option = document.createElement("option");

                _option.innerHTML = result.nat;
                nat.push(result.nat);

                _lstNazioni.appendChild(_option);
            }
        }
    }
    function generaIntestazione() {
        let _tr = document.createElement("tr");

        _thead.appendChild(_tr);

        for(let intestazione of intestazioni) {
            let _th = document.createElement("th");

            _th.innerHTML = intestazione;

            _tr.appendChild(_th);
        }
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

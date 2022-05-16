"use strinct"

window.onload = function() {
    let _minuti = document.getElementById("minuti");
    let _secondi = document.getElementById("secondi");
    let listboxes = document.getElementsByTagName("option");
    let _select = document.getElementsByTagName("select")[0];
    let _wrapper = document.getElementById("wrapper");

    let nClick = 0;
    let nPrima = "";
    let nDopo = "";
    let idPrima = "";
    let idDopo = "";
    let dimensione;
    let win = 0;
    
    _select.selectedIndex = -1;

    setInterval(visualizza, 1000);
    _select.addEventListener("change", creazioneMat);

    listboxes[1].disabled = true;

    function creazioneMat() {
        let aus = _select.value.split("x");
        let x;
        let y;
        let cella;
        let cella2;
        let k = 1;

        dimensione = aus[0];
        _wrapper.innerHTML = "";
        _wrapper.style.width = (54 * dimensione) + "px";

        for(let i = 0; i < dimensione; i++) {
            for(let j = 0; j < dimensione; j++) {
                let div = document.createElement("div");

                div.id = `div-${i}-${j}`;
                div.style.backgroundColor = "rgb(127, 127, 127)";
                div.style.color = "rgb(127, 127, 127)";
                div.innerHTML = "";

                div.addEventListener("click", mostraNumero);
                _wrapper.appendChild(div);
            }
        }

        for(let i = 1; i <= dimensione * 2; i++) {
            do {
                x = generaNumero(0, dimensione);
                y = generaNumero(0, dimensione);
    
                cella = document.getElementById(`div-${x}-${y}`);
            } while(cella.innerHTML != "");

            cella.innerHTML = k.toString();

            do {
                x = generaNumero(0, dimensione);
                y = generaNumero(0, dimensione);
    
                cella2 = document.getElementById(`div-${x}-${y}`);
            } while(cella2.innerHTML != "");

            cella2.innerHTML = k.toString();
            k++;
        }
    }
    function mostraNumero() {
        this.style.backgroundColor = "red";
        nPrima = nDopo;
        nDopo = this.innerHTML;
        idPrima = idDopo;
        idDopo = this.id;

        this.removeEventListener("click", mostraNumero);

        nClick++;

        if(nClick == 2) {
            nClick = 0;

            for(let i = 0; i < dimensione; i++) {
                for(let j = 0; j < dimensione; j++) {
                    let cella = document.getElementById(`div-${i}-${j}`);

                    cella.removeEventListener("click", mostraNumero);
                }
            }

            let timerId = setTimeout(stop, 500);

            if(win == (dimensione * 2) - 1) {
                setTimeout(function() {
                    alert("Hai vinto");
                }, 600);
            }
        }
    }
    function stop() {
        if(nPrima == nDopo) {
            let cell0 = document.getElementById(idPrima);
            let cell1 = document.getElementById(idDopo);

            cell0.style.backgroundColor = "blue";
            cell1.style.backgroundColor = "blue";
            win++;
        }

        for(let i = 0; i < dimensione; i++) {
            for(let j = 0; j < dimensione; j++) {
                let cella = document.getElementById(`div-${i}-${j}`);

                if(cella.style.backgroundColor != "blue") {
                    cella.style.backgroundColor = "rgb(127, 127, 127)";

                    cella.addEventListener("click", mostraNumero);
                }
            }
        }
    }
    function visualizza() {
        let ausS = parseInt(_secondi.innerHTML) + 1;

        if(ausS < 10) {
            _secondi.innerHTML = pad(ausS);
        }
        else {
            if(ausS == 60) {
                ausS = 0;
                _secondi.innerHTML = pad(ausS);

                let ausM = parseInt(_minuti.innerHTML) + 1;

                if(ausM < 10) {
                    _minuti.innerHTML = pad(ausM);
                }
                else {
                    _minuti.innerHTML = ausM.toString();
                }
            }
            else {
                _secondi.innerHTML = ausS.toString();
            }
        }
    }
    function pad(number) {
        return (number < 10 ? '0' : '') + number;
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

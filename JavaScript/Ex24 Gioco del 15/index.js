"use strinct"

const MIN = 4;
const MAX = 4;

window.onload = function() {
    let _wrapper = document.getElementById("wrapper");

    let vet = [];

    for(let i = 1; i <= 15; i++) {
        vet.push(i);
    }
    
    for(let i = 0; i < MIN; i++) {
        for(let j = 0; j < MAX; j++) {
            let _div = document.createElement("div");
            let n = generaNumero(0, vet.length);

            _div.classList.add("pedina");
            _wrapper.appendChild(_div);
            _div.id = `div-${i}-${j}`;

            if(i != 3 || j != 3) {
                _div.style.backgroundColor = "blue";
                _div.innerHTML = vet[n];
                vet.splice(n, 1);
            }

            _div.addEventListener("click", spostaPedina);
        }
    }

    function spostaPedina() {
        let aus = this.id.split("-");
        let r = parseInt(aus[1]);
        let c = parseInt(aus[2]);

        if(r > 0) { //SOPRA
            let cella = document.getElementById(`div-${r - 1}-${c}`);
                        
            if(cella.innerHTML == "") {
                swap(this, cella);
            }
        }
        if(c > 0) { //SINISTRA
            let cella = document.getElementById(`div-${r}-${c - 1}`);
                        
            if(cella.innerHTML == "") {
                swap(this, cella);
            }
        }
        if(r < 3) { //SOTTO
            let cella = document.getElementById(`div-${r + 1}-${c}`);  

            if(cella.innerHTML == "") {
                swap(this, cella);
            }
        }
        if(c < 3) { //DESTRA
            let cella = document.getElementById(`div-${r}-${c + 1}`);

            if(cella.innerHTML == "") {
                swap(this, cella);
            }
        }
    }

    function swap(cella1, cella2) {
        cella2.style.backgroundColor = "blue";
        cella2.innerHTML = cella1.innerHTML;

        cella1.innerHTML = "";
        cella1.style.backgroundColor = "#CCC";

        controlloVincita();
    }

    function controlloVincita() {
        let esci = false;
        let i = 0;
        let j = 0;
        let cont = 1;

        while(!esci && i < MIN) {
            j = 0;

            while(!esci && j < MAX) {
                let cella = document.getElementById(`div-${i}-${j}`);

                if(parseInt(cella.innerHTML) != 16) {
                    if(parseInt(cella.innerHTML) != cont) {
                        esci = true;
                    }
                    else {
                        cont++;
                    }
                }

                j++;
            }

            i++;
        }

        if(!esci) {
            alert("Hai vinto!");
        }
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

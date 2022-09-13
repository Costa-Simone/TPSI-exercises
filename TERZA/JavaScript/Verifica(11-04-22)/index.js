"use strict"

const COLORE_SFONDO = "rgb(220, 220, 220)"
const COLORE_TESTO  = "rgb(100, 100, 100)"

let vet1 = []//[7, 12, 2, 3, 9,14, 5, 6,11]
let vet2 = []//[2, 13, 5,16, 6, 1,10, 9, 4]

let punti = 0;

window.onload = function() {
    let _n = document.getElementById("n");
    let _totale = document.getElementById("totale");
    let _wrapper = document.getElementById("wrapper");
    let _ris = document.getElementById("ris");
    let _select = document.getElementsByTagName("select")[0];
    let _header = document.getElementById("header");

    let dimensione;

    for(let i = 4; i < 10; i++) {
        let option = document.createElement("option");
        _select.appendChild(option);

        option.value = i;
        option.innerHTML = `${i}x${i}`;
    }

    _select.selectedIndex = -1;
    _select.addEventListener("change", creaMatrice);

    function creaMatrice() {
        costruisciVettori();
        let dimensione = parseInt(_select.value);

        for(let i = 0; i < dimensione; i++) {
            for(let j = 0; j < dimensione; j++) {
                let button = document.createElement("button");
                _wrapper.appendChild(button);

                button.id = `div-${i}-${j}`;
                button.innerHTML = vet1[i] + vet2[j];
                button.classList.add("pedina");
                button.addEventListener("click", visualizza);
            }
        }

        _wrapper.style.width = (50 * dimensione) + "px";

        _n.innerHTML = _select.value;
        _ris.innerHTML = dimensione * 15;
    }

    function visualizza() {
        let id = this.id;
        let aus = id.split("-");
        console.log(aus);
        let i = aus[1];
        let j = aus[2];
        dimensione = _select.value;

        let cella = document.getElementById(`div-${i}-${j}`);
        punti = cella.innerHTML;
        cella.style.backgroundColor = "blue";
        cella.style.color = "white";
        cella.removeEventListener("click", visualizza);

        for(let k = 0; k < dimensione; k++) {
            if(k != j) {
                let cella2 = document.getElementById(`div-${i}-${k}`);
                cella2.style.backgroundColor = COLORE_SFONDO;
                cella2.style.color = COLORE_TESTO;
                cella2.removeEventListener("click", visualizza);
            }
        }

        for(let k = 0; k < dimensione; k++) {
            if(k != i) {
                let cella2 = document.getElementById(`div-${k}-${j}`);
                cella2.style.backgroundColor = COLORE_SFONDO;
                cella2.style.color = COLORE_TESTO;
                cella2.removeEventListener("click", visualizza);
            }
        }
    }
    
    function costruisciVettori() {
        let somma = 0;

        do {
            let aus = [];
            let aus2 = [];
            for(let i = 0; i < 16; i++) {
                aus.push(i);
                aus2.push(i);
            }

            somma = 0;

            for(let k = 0; k < parseInt(_select.value); k++) {
                let n = generaNumero(0, aus.length);
                aus.splice(n, 1);
    
                vet1.push(aus[n]);
                somma += aus[n];
                
                n = generaNumero(0, aus2.length);
                aus2.splice(n, 1);
    
                vet2.push(aus2[n]);
                somma += aus2[n];
            }
        }while(somma == (15 * parseInt(_select.value)));

        console.log(vet1);
        console.log(vet2);
    }
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}

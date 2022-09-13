"use strict";

const RIGHE=6;
const COLONNE=7;
const GREY = "rgb(127, 127, 127)";
let turno = "Y";

window.onload=function(){
    let _wrapper = document.getElementById("wrapper");
    let _giocatore = document.getElementById("nextPlayer");

    _giocatore.classList.add("pedina");
    _giocatore.style.backgroundColor = "yellow";

    for(let i = 0; i < RIGHE; i++) {
        for(let j = 0; j < COLONNE; j++) {
            let div = document.createElement("div");
            _wrapper.appendChild(div);
            div.classList.add("pedina");
            div.id = `div-${i}-${j}`;

            if(i == (RIGHE - 1)) {
                div.addEventListener("click", visualzza);
            }
        }

        function visualzza() {
            let aus = this.id.split("-");
            let i = aus[1];
            let j = aus[2];

            if(turno == "Y") {
                this.style.backgroundColor = "yellow";
                turno = "R";
                _giocatore.style.backgroundColor = "red";
            }
            else {
                this.style.backgroundColor = "red";
                turno = "Y";
                _giocatore.style.backgroundColor = "yellow";
            }

            this.removeEventListener("click", visualzza);

            if(i > 0) {
                let cellaSopra = document.getElementById(`div-${i - 1}-${j}`);
                cellaSopra.addEventListener("click", visualzza);
            }

            controllaVincita();
        }

        function controllaVincita() {
            let contY = 0;
            let contR = 0;
            let i = RIGHE - 1;
            let j = 0;
            let vinto = false;

            while(!vinto && i >= 0 ) { //controllo riga
                j = 0;

                while(!vinto && j < COLONNE) {
                    let cella = document.getElementById(`div-${i}-${j}`);

                    if(cella.style.backgroundColor == "") {
                        contR = 0;
                        contY = 0;
                    }
                    if(cella.style.backgroundColor == "red") {
                        contY = 0;
                        contR++;

                        if(contR == 4) {
                            vinto = true;
                        }
                    }
                    if(cella.style.backgroundColor == "yellow") {
                        contR = 0;
                        contY++;

                        if(contY == 4) {
                            vinto = true;
                        }
                    }

                    j++;
                }

                i--;
            }

            i = RIGHE - 1;
            j = 0;

            while(!vinto && j < COLONNE ) { //controllo colonna
                i = RIGHE - 1;

                while(!vinto && i >= 0) {
                    let cella = document.getElementById(`div-${i}-${j}`);

                    if(cella.style.backgroundColor == "") {
                        contR = 0;
                        contY = 0;
                    }
                    if(cella.style.backgroundColor == "red") {
                        contY = 0;
                        contR++;

                        if(contR == 4) {
                            vinto = true;
                        }
                    }
                    if(cella.style.backgroundColor == "yellow") {
                        contR = 0;
                        contY++;

                        if(contY == 4) {
                            vinto = true;
                        }
                    }

                    i--;
                }

                j++;
            }

            i = 0;
            j = 0;

            while(!vinto && i < 3) { //controllo DP
                j = 0;

                while(!vinto && j < COLONNE) {
                    let cella = document.getElementById(`div-${i}-${j}`);

                    if(cella.style.backgroundColor == "") {
                        contR = 0;
                        contY = 0;
                    }
                    if(cella.style.backgroundColor == "red") {
                        contY = 0;
                        contR++;

                        if(contR == 4) {
                            vinto = true;
                        }
                    }
                    if(cella.style.backgroundColor == "yellow") {
                        contR = 0;
                        contY++;

                        if(contY == 4) {
                            vinto = true;
                        }
                    }

                    i--;
                }

                i++;
            }

            if(vinto) {
                let _divs = document.getElementsByTagName("div");

                if(contR == 4) {
                    alert("Ha vinto il rosso!");
                }
                else if(contY == 4) {
                    alert("Ha vinto il giallo!");
                }

                for (let div of _divs) {
                    div.removeEventListener("click", visualzza);
                }
            }
        }
    }
}

"use strict"

const RIGHE = 29;
const COLONNE = 40;

const PRIMA_RIGA = 1;
const PRIMA_COLONNA = 1;
const ULTIMA_RIGA = RIGHE-2;
const ULTIMA_COLONNA = COLONNE-2;


window.onload = function() {
    let _wrapper = document.getElementById("wrapper");

    let dir = 0;
    let x = 1;
    let y = 1;

    for(let i = 0; i < RIGHE; i++) {
        for(let j = 0; j < COLONNE; j++) {
            let div = document.createElement("div");

            div.id = `div-${i}-${j}`;
            div.classList.add("cella");

            if(i == 0 || j == 0 || i == RIGHE - 1 || j == COLONNE - 1) {
                div.style.backgroundColor = "#666";
            }
            else {
                div.style.backgroundColor = "white";
            }

            _wrapper.appendChild(div);
        }
    }

    let palla = document.getElementById(`div-${x}-${y}`);

    palla.style.backgroundColor = "red";
    palla.style.borderRadius = "50%";

    let timerId = setInterval(spostamento, 5);

    function spostamento() {
        palla.style.backgroundColor = "white";
        palla.style.borderRadius = "";

        if(dir == 0) {
            x++;
            y++;
        }
        else if(dir == 1) {
            x--;
            y++;
        }
        else if(dir == 2) {
            x--;
            y--;
        }
        else {
            x++;
            y--;
        }

        if(x == RIGHE - 2) {
            if(dir == 0) {
                dir = 1;
            }
            else {
                dir = 2;
            }
        }
        if(y == COLONNE - 2) {
            if(dir == 1) {
                dir = 2;
            }
            else {
                dir = 3;
            }
        }
        if(x == 1) {
            if(dir == 2) {
                dir = 3;
            }
            else {
                dir = 0;
            }
        }
        if(y == 1) {
            if(dir == 3) {
                dir = 0;
            }
            else {
                dir = 1;
            }
        }

        palla = document.getElementById(`div-${x}-${y}`);

        palla.style.backgroundColor = "red";
        palla.style.borderRadius = "50%";

        if((x == 1 && y == 1) || (x == 1 && y == COLONNE - 2) || (x == RIGHE - 2 && y == 1) || (x == RIGHE - 2 && y == COLONNE - 2)) {
            clearInterval(timerId);
            alert("Hai vinto!");
        }
    }
}

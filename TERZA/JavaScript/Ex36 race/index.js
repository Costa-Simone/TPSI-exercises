'use strict' 

const COLONNE = 30;
const RIGHE = 20;
const OSTACOLI = 25;

window.onload = function() {
    let _wrapper = document.getElementById("wrapper");

    let cntBomb = 0;
    let r1;
    let r2;
    let colonna1 = 1;
    let colonna2 = 1;

    for(let i = 0; i < RIGHE; i++) {
        for(let j = 0; j < COLONNE; j++) {
            let div = document.createElement("div");

            div.classList.add("cella");
            div.id = `div-${i}-${j}`;
            div.bomba = "";
            div.innerHTML = "&nbsp";

            _wrapper.appendChild(div);
        }
    }

    while(cntBomb < 25) {
        let x = generaNumero(0, RIGHE);
        let y = generaNumero(1, COLONNE);
        let cella = document.getElementById(`div-${x}-${y}`);

        if(cella.bomba == "") {
            cella.bomba = "B";
            cella.style.backgroundImage = `url("bomba.png")`;
            cntBomb++;
        }
    }

    generaGiocatore();
    let timerId = setInterval(gara, 150);

    function generaGiocatore() {
        do {
            r1 = generaNumero(0, RIGHE - 5);
            r2 = generaNumero(0, RIGHE - 5);
        } while(Math.abs(r1 - r2) < 4);

        let cella1 = document.getElementById(`div-${r1}-${0}`);
        let cella2 = document.getElementById(`div-${r2}-${0}`);

        cella1.style.backgroundColor = "blue";
        cella2.style.backgroundColor = "blue";

        cella1.innerHTML = "1";
        cella2.innerHTML = "2";
    }
    function gara() {
        let casuale = generaNumero(0, 11);
        let casuale2 = generaNumero(0, 11);

        if(casuale <= 7) {

            let cella1 = document.getElementById(`div-${r1}-${colonna1}`);

            if(cella1.style.backgroundImage != `url("bomba.png")`) {
                cella1.style.backgroundColor = "blue";

                colonna1++;
            }
            else {
                r1++;
                colonna1--;

                cella1 = document.getElementById(`div-${r1}-${colonna1}`);
                
                if(cella1.style.backgroundImage == `url("bomba.png")`) {
                    clearInterval(timerId);
                    alert("Giocatore 2 hai vinto!");
                }
            }
        }
        
        if(colonna1 == COLONNE) {
            clearInterval(timerId);
            alert("Giocatore 1 hai vinto!");
        }

        if(casuale2 <= 7) {
            let cella2 = document.getElementById(`div-${r2}-${colonna2}`);

            if(cella2.style.backgroundImage != `url("bomba.png")`) {
                cella2.style.backgroundColor = "blue";

                colonna2++;
            }
            else {
                r2++;
                colonna2--;

                cella2 = document.getElementById(`div-${r2}-${colonna2}`);

                if(cella2.style.backgroundImage == `url("bomba.png")`) {
                    clearInterval(timerId);
                    alert("Giocatore 1 hai vinto!");
                }
            }
        }

        if(colonna2 == COLONNE) {
            clearInterval(timerId);
            alert("Giocatore 2 hai vinto!");
        }
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

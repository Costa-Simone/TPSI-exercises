"use strict"
const DIM = 10;
const GRIGIO = "rgb(127, 127, 127)";
const BLU = "rgb(0, 0, 255)";
const ROSSO = "rgb(255, 0, 0)";

window.onload=function(){
    let _wrapper = document.getElementById("wrapper");

    let bomba = "";
    let dir;
    let stop = 0;
    let x;
    let y;

    x = generaNumero(0, 10);
    y = generaNumero(0, 10);

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            let button = document.createElement("button");

            button.id = `div-${j}-${i}`;
            button.style.width = 36 + "px";
            button.style.height = 36 + "px";
            button.style.backgroundColor = GRIGIO;
            button.addEventListener("click", tastoBlu);
            button.bomb = "N";
    
            _wrapper.appendChild(button);
        }
    }

    bomba = document.getElementById(`div-${x}-${y}`);
    bomba.style.backgroundColor = "Red";
    bomba.bomb = "Y";

    let timerId = setInterval(visualizzaBomba, 1000);
    
    function tastoBlu() {
        if(this.bomb == "Y") {
            for(let i = 0; i < 10; i++) {
                for(let j = 0; j < 10; j++) {
                    let cell = document.getElementById(`div-${i}-${j}`);
                    cell.disabled = true;
                }
            }

            alert("Hai perso");
        }
        else if(this.bomb == "N") {
            this.bomb = "B";
            this.style.backgroundColor = BLU;
        }
        else {
            this.bomb = "N";
            this.style.backgroundColor = GRIGIO;
        }
    }
    function visualizzaBomba() {
        let sB = false;
        let aus = 0;
        let k = 0;

        dir = generaNumero(0, 4);

        switch(dir) {
            case 0:
                aus = generaNumero(y + 1, y + 5);

                if(aus >= 0 && aus <= 9) {
                    k = y + 1;

                    while(!sB && k <= aus) {
                        let cella = document.getElementById(`div-${x}-${k}`);
    
                        if(cella.bomb == "B") {
                            sB = true;
                        }
                        else {
                            k++;
                        }
                    }
    
                    if(sB) {
                        aus = y;
                        stop++;
                    }
                    else {
                        stop = 0;
                    }
    
                    bomba.bomb = "N";
                    bomba.style.backgroundColor = GRIGIO;
                    bomba = document.getElementById(`div-${x}-${aus}`);
                    bomba.style.backgroundColor = "Red";
                    bomba.bomb = "Y";
                }
                break;

            case 1:
                aus = generaNumero(x + 1, x + 5);

                if(aus >= 0 && aus <= 9) {
                    k = x + 1;

                    while(!sB && k <= aus) {
                        let cella = document.getElementById(`div-${k}-${y}`);
    
                        if(cella.bomb == "B") {
                            sB = true;
                        }
                        else {
                            k++;
                        }
                    }
    
                    if(sB) {
                        aus = x;
                        stop++;
                    }
                    else {
                        stop = 0;
                    }
    
                    bomba.bomb = "N";
                    bomba.style.backgroundColor = GRIGIO;
                    bomba = document.getElementById(`div-${aus}-${x}`);
                    bomba.style.backgroundColor = "Red";
                    bomba.bomb = "Y";
                }
                break;

            case 2:
                aus = generaNumero(y - 1, y - 5);

                if(aus >= 0 && aus <= 9) {
                    k = y - 1;

                    while(!sB && k >= aus) {
                        let cella = document.getElementById(`div-${x}-${k}`);
    
                        if(cella.bomb == "B") {
                            sB = true;
                        }
                        else {
                            k--;
                        }
                    }
    
                    if(sB) {
                        aus = y;
                        stop++
                    }
                    else {
                        stop = 0;
                    }
    
                    bomba.bomb = "N";
                    bomba.style.backgroundColor = GRIGIO;
                    bomba = document.getElementById(`div-${x}-${aus}`);
                    bomba.style.backgroundColor = "Red";
                    bomba.bomb = "Y";
                }
                break;

            case 3:
                aus = generaNumero(x - 1, x - 5);
                

                if(aus >= 0 && aus <= 9) {
                    k = x - 1;

                    while(!sB && k <= aus) {
                        let cella = document.getElementById(`div-${k}-${y}`);
    
                        if(cella.bomb == "B") {
                            sB = true;
                        }
                        else {
                            k--;
                        }
                    }
    
                    if(sB) {
                        aus = x;
                        stop++;
                    }
                    else {
                        stop = 0;
                    }
    
                    bomba.bomb = "N";
                    bomba.style.backgroundColor = GRIGIO;
                    bomba = document.getElementById(`div-${aus}-${y}`);
                    bomba.style.backgroundColor = "Red";
                    bomba.bomb = "Y";
                }
                break;
        }
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

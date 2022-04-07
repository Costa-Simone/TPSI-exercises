"use strinct"

const MIN = 5;

window.onload = function() {
    let _wrapper = document.getElementById("wrapper");

    let turno = 0;

    for(let i = 0; i < MIN; i++) {
        for(let j = 0; j < MIN; j++) {
            let button = document.createElement("button");

            _wrapper.appendChild(button);
            button.id = `div-${i}-${j}`;
            button.bomba = false;
            button.addEventListener("click", visualizza);
        }
    }

    for(let i = 0; i < 5; i++) {
        let j;
        let k;
        let cella;
        
        do {
            j = generaNumero(0, 5);
            k = generaNumero(0, 5);
            cella = document.getElementById(`div-${j}-${k}`);
        }while(cella.bomba == true);

        cella.bomba = true;
    }

    function visualizza() {
        let cell = this.id;
        let aus = cell.split("-");
        let i = parseInt(aus[1]);
        let j = parseInt(aus[2]);
        let _cella = document.getElementById(`div-${i}-${j}`);
        let _bombs = document.getElementsByTagName("button");

        if(_cella.bomba == true) {
            _cella.style.backgroundImage = "url('bomba.png')";
            alert("Hai perso!");

            for (let button of _bombs) {
                button.removeEventListener("click", visualizza);
            }
        }
        else {
            let bomba = false;
            let cont = 0;

            turno++;

            if(j > 0) {
                let cellaSx = document.getElementById(`div-${i}-${(j - 1)}`);

                if(cellaSx.bomba == true) {
                    bomba = true;
                    cont++;
                }
            }
            if(j < 4) {
                let cellaDx = document.getElementById(`div-${i}-${(j + 1)}`);

                if(cellaDx.bomba == true) {
                    bomba = true;
                    cont++;
                }
            }
            if(i > 0) {
                let cellaTop = document.getElementById(`div-${(i - 1)}-${j}`);

                if(cellaTop.bomba == true) {
                    bomba = true;
                    cont++;
                }
            }
            if(i < 4) {
                let cellaBot = document.getElementById(`div-${(i + 1)}-${j}`);

                if(cellaBot.bomba == true) {
                    bomba = true;
                    cont++;
                }
            }

            _cella.disabled = true;

            if(!bomba) {
                _cella.innerHTML = "X";
            }
            else {
                _cella.innerHTML = cont.toString();
                _cella.style.color = "red";
                _cella.style.fontWeight = "bold";
            }

            if(turno == 20) {
                alert("Hai vinto!");
    
                for (let button of _bombs) {
                    button.removeEventListener("click", visualizza);
                }
            }
        }
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

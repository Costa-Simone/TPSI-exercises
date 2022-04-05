"use strinct"

window.onload = function() {
    let _table = document.getElementsByTagName("table")[0];

    let turno = 1;
    let conteggio = 0;

    for(let i = 0; i < 3; i++) {
        let tr = document.createElement("tr");
        _table.appendChild(tr);
        
        for(let j = 0; j < 3; j++) {
            let td = document.createElement("td");
            let img = document.createElement("img");

            tr.appendChild(td);
            td.appendChild(img);
            img.id = `img-${i}-${j}`;
            img.status = "vuoto";
            img.src = "img/vuota.png";
            img.addEventListener("click", visualizza);
        }
    }

    function visualizza() {
        if(turno == 1) {
            this.src = "img/croce.png";
            turno = 2;
        }
        else {
            this.src = "img/cerchio.png";
            turno = 1;
        }

        this.status = "occupato";
        conteggio++;
        this.removeEventListener("click", visualizza);
        controlloVincita();
    }

    function controlloVincita() {
        let vinto = false;
        let i = 0;

        while(!vinto && i < 3) { //controllo righe
            let img1 = document.getElementById(`img-${i}-${0}`);
            let img2 = document.getElementById(`img-${i}-${1}`);
            let img3 = document.getElementById(`img-${i}-${2}`);

            if(img1.src == img2.src && img2.src == img3.src && img1.status != "vuoto") {
                vinto = true;
            }

            i++;
        }

        i = 0;

        while(!vinto && i < 3) { //controllo colonne
            let img1 = document.getElementById(`img-${0}-${i}`);
            let img2 = document.getElementById(`img-${1}-${i}`);
            let img3 = document.getElementById(`img-${2}-${i}`);

            if(img1.src == img2.src && img2.src == img3.src && img1.status != "vuoto") {
                vinto = true;
            }

            i++;
        }

        if(!vinto) { //diagonale principale
            let img1 = document.getElementById(`img-${0}-${0}`);
            let img2 = document.getElementById(`img-${1}-${1}`);
            let img3 = document.getElementById(`img-${2}-${2}`);

            if(img1.src == img2.src && img2.src == img3.src && img1.status != "vuoto") {
                vinto = true;
            }
        }

        if(!vinto) { //diagonale secondaria
            let img1 = document.getElementById(`img-${0}-${2}`);
            let img2 = document.getElementById(`img-${1}-${1}`);
            let img3 = document.getElementById(`img-${2}-${0}`);

            if(img1.src == img2.src && img2.src == img3.src && img1.status != "vuoto") {
                vinto = true;
            }
        }

        if(conteggio == 9) {
            alert("Pareggio!");
        }

        if(vinto) {
            let _imgs = document.getElementsByTagName("img");

            for (let img of _imgs) {
                img.removeEventListener("click", visualizza);
            }

            if(turno == 2) {
                alert("Ha vinto X");
            }
            else {
                alert("Ha vinto O");
            }
        }
    }
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}

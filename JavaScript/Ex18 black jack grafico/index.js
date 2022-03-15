"use strict";

let vet = [];

window.onload = function(){
    let _btnG = document.getElementsByClassName("card")[0];
    let _cartaG = document.getElementsByClassName("card")[1];
    let _btnB = document.getElementsByClassName("card")[2];
    let _cartaB = document.getElementsByClassName("card")[3];
	let _puntiG = document.getElementsByTagName("span")[0];
	let _puntiB = document.getElementsByTagName("span")[1];	
    let _assoG = document.getElementsByClassName("msgAsso")[0];
    let _assoB = document.getElementsByClassName("msgAsso")[1];
    let _chkG = _assoG.children[0];
    let _chkB = _assoB.children[0];

    _btnB.addEventListener("mouseover", rollOn);
    _btnB.addEventListener("mouseout", rollOff);
    _btnG.addEventListener("mouseover", rollOn);
    _btnG.addEventListener("mouseout", rollOff);
    _btnG.addEventListener("click", visualizzaCartaG);
    _btnB.addEventListener("click", visualizzaCartaB);
    _assoG.addEventListener("click", function() {
        _puntiG.innerHTML = parseInt(_puntiG.innerHTML) + 10;
        _assoG.style.visibility = "hidden";
        _chkG.checked = false;
        controlloVincita();
    });
    _assoB.addEventListener("click", function() {
        _puntiB.innerHTML = parseInt(_puntiB.innerHTML) + 10;
        _assoB.style.visibility = "hidden";
        _chkB.checked = false;
    });

    _assoG.style.visibility = "hidden";
    _assoB.style.visibility = "hidden";
    _btnB.style.opacity = "50%";
    _btnG.style.opacity = "50%";

    function visualizzaCartaB() {
        let carta = generaCarta();
        let punti = valore(carta);

        _btnG.removeEventListener("click", visualizzaCartaG);
        _assoG.removeEventListener("click", function() {
            _puntiG.innerHTML = parseInt(_puntiG.innerHTML) + 10;
            _assoG.style.visibility = "hidden";
        });

        if(punti > 10) {
            punti = 10;
        }
        
        if(punti == 1) {
            _assoB.style.visibility = "visible";
        }
        else {
            _assoB.style.visibility = "hidden";
        }

        _puntiB.innerHTML = parseInt(_puntiB.innerHTML) + punti;

        _cartaB.style.backgroundImage = "url(img/" + carta + ".gif)";

        controlloVincita();
    }

    function visualizzaCartaG() {
        let carta = generaCarta();
        let punti = valore(carta);

        if(punti > 10) {
            punti = 10;
        }
        
        if(punti == 1) {
            _assoG.style.visibility = "visible";
        }
        else {
            _assoG.style.visibility = "hidden";
        }

        _puntiG.innerHTML = parseInt(_puntiG.innerHTML) + punti;

        _cartaG.style.backgroundImage = "url(img/" + carta + ".gif)";

        if(parseInt(_puntiG.innerHTML) > 21) {
            alert("Hai perso!");
            finePartita();
        }
    }

    function controlloVincita() {
        if(parseInt(_puntiB.innerHTML) > 21) {
            alert("Hai vinto!");
            finePartita();
        }
        else if(parseInt(_puntiB.innerHTML) >= 17) {
            if(parseInt(_puntiB.innerHTML) < parseInt(_puntiG.innerHTML)) {
                alert("Hai vinto!");
            }
            else {
                alert("Hai perso");
            }
            finePartita();
        }
    }

    function finePartita() {
        _btnG.removeEventListener("click", visualizzaCartaG);
        _assoG.removeEventListener("click", function() {
            _puntiG.innerHTML = parseInt(_puntiG.innerHTML) + 10;
            _assoG.style.visibility = "hidden";
        });
        _assoB.removeEventListener("click", function() {
            _puntiB.innerHTML = parseInt(_puntiB.innerHTML) + 10;
            _assoB.style.visibility = "hidden";
            _chkB.checked = false;
        });
        _btnB.removeEventListener("click", visualizzaCartaB);
    }

    function generaCarta() {
        let aus = ["a", "b", "c", "d"];

        let seme;
        let valore;
        let carta;

        do {
            seme = generaNumero(0, aus.length);
            valore = generaNumero(1, 14);
            carta = aus[seme] + valore.toString();
        }while(vet.includes(carta));

        vet.push(carta);

        return carta;
    }

    function valore(carta) {
        return parseInt(carta.substr(1));
    }

    function rollOn() {
        this.style.opacity = "100%";
    }
    
    function rollOff() {
        this.style.opacity = "50%";
    }
}

function generaNumero(a, b){
    return Math.floor((b-a)*Math.random())+a
}

"use strict";

let vet = []

window.onload=function(){
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

    _btnB.addEventListener("mouseover", function() { _btnB.style.opacity = "100%"; });
    _btnB.addEventListener("mouseout", function() { _btnB.style.opacity = "50%"; });
    _btnG.addEventListener("mouseover", function() { _btnG.style.opacity = "100%"; });
    _btnG.addEventListener("mouseout", function() { _btnG.style.opacity = "50%"; });
    _btnG.addEventListener("click", assegnaCarta);

    _btnB.style.backgroudImage = "url('img/dorso.gif')";
    _btnG.style.backgroudImage = "url('img/dorso.gif')";
    _assoB.style.visibility = "hidden";
    _cartaB.src = "";
    _cartaG.src = "";
    _btnB.style.opacity = "50%";
    _btnG.style.opacity = "50%";

    function assegnaCarta() {
        let n = generaNumero(1, 14);
        let c = String.fromCharCode(generaNumero(97, 101));
        console.log(c);
    
        _cartaG.style.backgroudImage = "url('img/" + c + n + ".gif')";
    }
}

function generaNumero(a, b){
    return Math.floor((b-a)*Math.random())+a
}

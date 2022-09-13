"use strict"

let vet = [];
let aus = [];
let temp = [];
let _txtN;
let _chkN;
let _btnInvia;

function init(){
    _txtN = document.getElementsByName("txtN");
    _chkN = document.getElementsByName("chkN");
    _btnInvia = document.getElementById("btnInvia");

    for(let i = 0; i < 8; i++) {
        aus[i] = i + 1;
    }
        
    for(let i = 0; i < 3; i++) {
        let pos = generaNumero(0, aus.length);

        vet[i] = aus[pos];
        aus.splice(pos, 1);
    }

    console.log(vet);
}

function controlla() {
    let cont = 0;

    for(let i = 0; i < 3; i++) {
        temp[i] = vet[i];
    }
    
    for(let i = 0; i < 3; i++){
        let val = parseInt(_txtN[i].value);

        if(temp.includes(val)) {
            cont++;
            let pos = temp.indexOf(val);
            temp.splice(pos, 1);
        }

        _chkN[i].checked = false;  
    }

    for(let i = 0; i < cont; i++) {
        _chkN[i].checked = true;
    }
        
    if(cont == 3)
    {
        alert("HAI VINTO");

        _btnInvia.disabled = true;

        for(let i = 0; i < 3; i++) {
            _txtN[i].disabled = true;
        }
    }
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}

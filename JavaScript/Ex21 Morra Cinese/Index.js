"use strict"

window.onload= function(){
    let _big=document.getElementsByClassName("big");
    let _small=document.getElementsByClassName("small");
    let _btnGioca=document.getElementById("btnGioca");
    let _txtRisultato=document.getElementById("txtRisultato");

    let cont=0;
    let pos;
    
    for(let i=0;i<_small.length;i++)
        _small[i].addEventListener("click",function(){
            pos=utente(i);
            _big[1].style.backgroundImage="url(img/vuota.png)";
            _txtRisultato.innerHTML=" ";
        });
    _btnGioca.addEventListener("click",gioca);

    for(let i=0;i<_big.length;i++)
        _big[i].style.backgroundImage="url(img/vuota.png)";

    _small[0].style.backgroundImage="url(img/mano.png)";
    _small[0].masked="mano";
    _small[1].style.backgroundImage="url(img/sasso.png)";
    _small[1].masked="sasso";
    _small[2].style.backgroundImage="url(img/forbice.png)";
    _small[2].masked="forbice";

    function utente(pos){
        _big[0].style.backgroundImage=_small[pos].style.backgroundImage="url(img/" + _small[pos].masked + ".png)";
        cont++;
        return pos;
    }

    function gioca(){

        _txtRisultato.innerHTML=" ";
        let j=0;
        if(cont!=0)
        {
            do
            {
                j=generaNumero(0,3);
            }
            while(j==pos);
            _big[1].style.backgroundImage=_small[j].style.backgroundImage="url(img/"+_small[j].masked+".png)";
            if(_big[0].style.backgroundImage==`url("img/mano.png")` && _big[1].style.backgroundImage==`url("img/sasso.png")`)
                _txtRisultato.innerHTML="Utente";
            else if(_big[1].style.backgroundImage==`url("img/mano.png")` && _big[0].style.backgroundImage==`url("img/sasso.png")`)
                _txtRisultato.innerHTML="Computer";
            else if(_big[0].style.backgroundImage==`url("img/forbice.png")` && _big[1].style.backgroundImage==`url("img/mano.png")`)
                _txtRisultato.innerHTML="Utente";
             else if(_big[1].style.backgroundImage==`url("img/forbice.png")` && _big[0].style.backgroundImage==`url("img/mano.png")`)
                _txtRisultato.innerHTML="Computer"
            else if(_big[1].style.backgroundImage==`url("img/sasso.png")` && _big[0].style.backgroundImage==`url("img/forbice.png")`)
                _txtRisultato.innerHTML="Computer";
            else if(_big[0].style.backgroundImage==`url("img/sasso.png")` && _big[1].style.backgroundImage==`url("img/forbice.png")`)
                _txtRisultato.innerHTML="Utente";
            console.log(_txtRisultato.innerHTML)
        }
        else
            alert("utente deve scegliere immagine")
    }
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}
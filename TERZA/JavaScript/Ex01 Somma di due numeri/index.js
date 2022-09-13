
"use strinct"

function somma() {
    let _txtN1 = document.getElementById("txtN1");
    let n1 = parseInt(_txtN1.value);
    let _txtN2 = document.getElementById("txtN2");
    let n2 = parseInt(_txtN2.value);
    let _txtRis = document.getElementById("txtRis");
    //document.getElementsByTagName(span) crea vettore enumerativo lungo quanti numeri di span nella pagina
    let _span = document.getElementsByTagName("span") [0];

    console.log("n1 =", n1);
    console.log("n2 =", n2);

    let ris = n1 + n2;
    //visualizza risultato
    console.log("ris =", ris);
    _txtRis.value = ris;
    _span.textContent = ris;
    alert(ris);
}

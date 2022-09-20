'use strict'

let studente = {
    "nome" : "mario",
    "cognome" : "rossi",
    "eta" : 16,
    "studente" : true,
    "images" : ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"],
    "hobbies" : [], // vettore al momento vuoto
    "pos": { "x": 40, "y": 300 }, // oggetto annidato
    "stampa" : function () { alert("Hello " + this.nome); },
    "fullName" : function () { return this.nome + " " + this.cognome; }
};

function esegui() {
    console.log(studente["nome"]);
    console.log(studente.nome);
    console.log(studente.fullName());

    if("residenza" in studente) {
        console.log(studente["residenza"]);
    }
    else {
        console.log("La chiave residenza non esiste, aggiunta in automatico");
        studente["residenza"] = "Fossano";
        console.log(studente["residenza"]);
    }

    let studente2 = studente;

    studente2["nome"] = "Minnie";

    console.log(studente["nome"]);

    console.log("Scansione campi JSON");

    for(let key in studente) {
        let output = studente[key];

        if(typeof(studente[key]) == "object") {
            output = JSON.stringify(studente[key]);
        }

        console.log(key + " = " + output + ": " + typeof(studente[key]));
    }

    console.log("Visualizzazione dati vettore enumerativo interno");

    for(let image of studente["images"]) {
        console.log(image);
    }

    console.log("Visualizzazione dati vettore associativo interno");

    for(let key in studente["pos"]) {
        console.log(studente["pos"][key]);
    }

    studente["pos"]["x"]++;

    console.log(studente["pos"]["x"]);
    console.log("Visualizzare il vettore enumerativo delle chiavi");

    let keys = Object.keys(studente);

    for(let key of keys) {
        console.log(key);
    }

    console.log("Numero di chiavi: " + keys.length);

    console.log("Richiamo di una funzione");

    studente["stampa"]();
    console.log(studente["fullName"]());
}

"use strict"

let gender;
let currentPage;
let btn;
let intestazioni = ["name", "city", "state", "nat", "",""];
let indicePersonaCorrente = 0;

window.onload = function() {
    gender = 'male';
    currentPage = 0;
    btn = document.getElementsByTagName("input");
    
    creaTabella();
    aggiornaTabella();
    btn[0].addEventListener("click", changeGender);
    btn[1].addEventListener("click", changeGender);
     /* btn[0].addEventListener("click", function() {
        changeGender(male);
    }); */

    for(let i = 2; i <= 5; i++) {
        btn[i].addEventListener("click", gestisciPulsanti);
    }

    function changeGender() {
        let _dettagli = document.getElementById("dettagli");

        if(this.id == "optMale") {
            gender = 'male';
        }
        else {
            gender = 'female';
        }

        _dettagli.innerHTML = "";

        aggiornaTabella();
    }
    function creaTabella() {
        let _table = document.getElementsByTagName("table") [0];
        let _thead = document.createElement("thead");
        let _tbody = document.createElement("tbody");
        let _tr = document.createElement("tr");
    
        _table.appendChild(_thead);
        _table.appendChild(_tbody);
        _thead.appendChild(_tr);
    
        for(let intestazione of intestazioni) {
            let _th = document.createElement("th");
    
            _tr.appendChild(_th);
    
            _th.innerHTML = intestazione;
        }
    }
    function aggiornaTabella() {
        let _tbody = document.getElementsByTagName("tbody")[0];
        let inizio = currentPage * 6;
    
        _tbody.innerHTML = "";
        
        //for(let [i, person] of people[gender].entries()) 
        for(let i = inizio; i < (inizio + 6) && i < people[gender].length; i++) {
            let person = people[gender][i];
            let _tr = document.createElement("tr");
            _tbody.appendChild(_tr);
        
            let _td = document.createElement("td");
            _tr.appendChild(_td);
            _td.innerHTML = person.name.first + " " + person.name.last;
        
            _td = document.createElement("td");
            _tr.appendChild(_td);
            _td.innerHTML = person.location.city;
    
            _td = document.createElement("td");
            _tr.appendChild(_td);
            _td.innerHTML = person.location.state;
    
            _td = document.createElement("td");
            _tr.appendChild(_td);
            _td.innerHTML = person.nat;
    
            _td = document.createElement("td");
            _tr.appendChild(_td);
            let _img = document.createElement("img");
            _td.appendChild(_img);
            _img.src = "img/lente.jpg";
            _img.width = "30";
            _img.index = i;
            _img.addEventListener("click", visualizzaDettagli);
    
            _td = document.createElement("td");
            _tr.appendChild(_td);
            _img = document.createElement("img");
            _td.appendChild(_img)
            _img.src = "img/delete.png";
            _img.width = "30";
            _img.index = i;
            _img.addEventListener("click", elimina);
        }
    }
    function visualizzaDettagli() {
        let personaCorrente = people[gender][this.index];
        let _dettagli = document.getElementById("dettagli");
        let _p = document.createElement("p");
        let _img = document.createElement("img");

        indicePersonaCorrente = this.index;
        _dettagli.innerHTML = "";

        _dettagli.appendChild(_p);
        
        _p.innerHTML = personaCorrente["email"];

        _dettagli.appendChild(_img);

        _img.src = personaCorrente.picture.large;
        _p = document.createElement("p");

        _dettagli.appendChild(_p);

        _p.innerHTML = personaCorrente.phone;

    }
    function elimina() {
        let indiceCorrente = this.index;

        people[gender].splice(indiceCorrente, 1);
        alert("Record eliminato correttamente");
        aggiornaTabella();

        if(this.index == indicePersonaCorrente) {
            let _dettagli = document.getElementById("dettagli");

            _dettagli.innerHTML = "";
        }
    }
    function gestisciPulsanti() {
        let _dettagli = document.getElementById("dettagli");

        switch(this.value) {
            case "Primo":
                currentPage = 0;
                btn[2].disabled = true;
                btn[3].disabled = false;
                btn[4].disabled = false;
                btn[5].disabled = false;
                break;

            case "Indietro":
                currentPage--;

                
                btn[5].disabled = false;

                if(currentPage == 0) {
                    btn[2].disabled = true;
                    btn[3].disabled = false;
                    btn[4].disabled = false;
                    btn[5].disabled = false;
                }
                break;

            case "Avanti":
                currentPage++;
                
                btn[2].disabled = false;

                if(currentPage == lastPage()) {
                    btn[2].disabled = false;
                    btn[3].disabled = false;
                    btn[4].disabled = false;
                    btn[5].disabled = true;
                }
                break;

            case "Ultimo":
                currentPage = lastPage();
                btn[2].disabled = false;
                btn[3].disabled = false;
                btn[4].disabled = false;
                btn[5].disabled = true;
                break;
        }

        _dettagli.innerHTML = "";

        aggiornaTabella();
    }
    function lastPage() {
        return parseInt((people[gender].length - 1) / 6);
    }
}

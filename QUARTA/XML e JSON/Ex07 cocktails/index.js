"use strict";

let intestazioni = ["", "id", "name", "alcohlic", "main ingredient", ""];
let scelta = 0;
let ingre = "";

window.onload = function() {
    let _table = document.getElementById("table");
    let _thead = document.createElement("thead");
    let _tbody = document.createElement("tbody");
    let _lstIngredienti = document.getElementById("lstIngredienti");
    let _dettagli = document.getElementById("dettagli");
    let _optTutti = document.getElementById("optTutti");
    let _optAlcoholic = document.getElementById("optAlcoholic");
    let _optNonAlcoholic = document.getElementById("optNonAlcoholic");

    _table.appendChild(_thead);
    _table.appendChild(_tbody);
    creaIntestazioni();
    ordina();
    creaTabella();
    visualizzaTabella();

    _optTutti.addEventListener("click", changeDrinks);
    _optAlcoholic.addEventListener("click", changeDrinks);
    _optNonAlcoholic.addEventListener("click", changeDrinks);
    _lstIngredienti.addEventListener("change", changeDrinksList);

    _dettagli.innerHTML = "";

    function changeDrinksList() {
        ingre = _lstIngredienti.value;
        console.log(ingre);

        visualizzaTabella();
    }
    function changeDrinks() {
        if(this.id == "optTutti") {
            scelta = 0;
        }
        else if(this.id == "optAlcoholic") {
            scelta = 1;
        }
        else {
            scelta = 2;
        }

        visualizzaTabella();
    }
    function visualizzaTabella() {
        _tbody.innerHTML = "";

        for(let [i, cocktail] of cocktails.drinks.entries()) {
            let _tr = document.createElement("tr");
            let _td;
            let _img;
            let _a;

            if(scelta == 1) {
                if(cocktail.strAlcoholic == "Alcoholic") {
                    if(ingre == "" || ingre == cocktail.strIngredient1) {
                        _tbody.appendChild(_tr);
                    }
                }
            }
            if(scelta == 2) {
                if(cocktail.strAlcoholic == "Non alcoholic") {
                    if(ingre == "" || ingre == cocktail.strIngredient1) {
                        _tbody.appendChild(_tr);
                    }
                }
            }
            if(_optTutti.checked) {
                if(ingre == "" || ingre == cocktail.strIngredient1) {
                    _tbody.appendChild(_tr);
                }
            }

            _img = document.createElement("img");
            _img.src = cocktail.strDrinkThumb;
            _img.width = 40;
            _tr.appendChild(_img);

            _td = document.createElement("td");
            _td.innerHTML = cocktail.idDrink;
            _tr.appendChild(_td);

            _td = document.createElement("td");
            _td.innerHTML = cocktail.strDrink;
            _tr.appendChild(_td);

            _td = document.createElement("td");
            _td.innerHTML = cocktail.strAlcoholic;
            _tr.appendChild(_td);

            _td = document.createElement("td");
            _td.innerHTML = cocktail.strIngredient1;
            _tr.appendChild(_td);

            _td = document.createElement("td");
            _a = document.createElement("a");
            _a.innerHTML = "Dettagli";
            _a.href = "#";
            _td.appendChild(_a);
            _tr.appendChild(_td);
            _a.pos = i;
            _a.addEventListener("click", function() {
                let _h3 = document.createElement("h3");
                let _div;
                let _br;
                let _img;

                _dettagli.innerHTML = "";

                _h3.innerHTML = cocktails.drinks[i].strDrink;
                _dettagli.appendChild(_h3);

                _br = document.createElement("br");
                _dettagli.appendChild(_br);
                
                _div = document.createElement("p");
                _div.innerHTML = cocktails.drinks[i].strIngredient1;

                if(cocktails.drinks[i].strIngredient2 != null) {
                    _div.innerHTML += "-" + cocktails.drinks[i].strIngredient2;
                }
                if(cocktails.drinks[i].strIngredient3 != null) {
                    _div.innerHTML += "-" + cocktails.drinks[i].strIngredient3;
                }
                if(cocktails.drinks[i].strIngredient4 != null) {
                    _div.innerHTML += "-" + cocktails.drinks[i].strIngredient4;
                }
                if(cocktails.drinks[i].strIngredient5 != null) {
                    _div.innerHTML += "-" + cocktails.drinks[i].strIngredient5;
                }

                _dettagli.appendChild(_div);

                _img = document.createElement("img");
                _img.src = cocktails.drinks[i].strDrinkThumb;
                _img.width = 140;
                _dettagli.appendChild(_img);
            });
        }
    }
    function creaTabella() {
        let _option = document.createElement("option");

        _option.innerHTML = "";

        _lstIngredienti.appendChild(_option);

        for(let ingredient of ingredients.ingredients) {
            _option = document.createElement("option");

            _option.innerHTML = ingredient.strIngredient1;

            _lstIngredienti.appendChild(_option);
        }

        _lstIngredienti.selectedIndex = 0;
    }
    function ordina() {
		let myKey = "strIngredient1";
		let scelta = 1;

		ingredients.ingredients.sort(function(record1, record2) {
			let str1 = record1[myKey].toUpperCase();
			let str2 = record2[myKey].toUpperCase();

			if (str1 < str2)
				return -scelta;
			else if (str1 > str2)
				return scelta;
			else 
				return 0;
		});

		visualizzaTabella();
	}
    function creaIntestazioni() {
        let _th;
        let _tr = document.createElement("tr");

        _thead.appendChild(_tr);

        _th = document.createElement("th");
        _th.innerHTML = intestazioni[0];
        _th.style.width = "40px";
        _tr.appendChild(_th);

        _th = document.createElement("th");
        _th.innerHTML = intestazioni[1];
        _th.style.width = "40px";
        _tr.appendChild(_th);

        _th = document.createElement("th");
        _th.innerHTML = intestazioni[2];
        _th.style.width = "40px";
        _tr.appendChild(_th);

        _th = document.createElement("th");
        _th.innerHTML = intestazioni[3];
        _th.style.width = "70px";
        _tr.appendChild(_th);

        _th = document.createElement("th");
        _th.innerHTML = intestazioni[4];
        _th.style.width = "70px";
        _tr.appendChild(_th);

        _th = document.createElement("th");
        _th.innerHTML = intestazioni[5];
        _th.style.width = "40px";
        _tr.appendChild(_th);
    }
}

"use strict";

const COLONNE=61;
const RIGHE=10;
const GRIGIO = "rgb(252, 252, 252)";
const BLU = "rgb(0, 0, 255)";
const ROSSO = "rgb(255, 0, 0)";


window.onload=function()
{
    var _wrapper = document.getElementById("wrapper");
	
	// creazione matrice gi gioco
    for (var i = 0; i < RIGHE; i++){
        for (var j = 0; j < COLONNE; j++)
        {
           
        }
	}
	
	var player1 = document.getElementById("div-0-30")
	var player2 = document.getElementById("div-6-30")
	var ostacolo = document.getElementById("div-1-30")
	
	

}


function random(a, b){
	return Math.floor((b-a+1)*Math.random()) +a;
	
}
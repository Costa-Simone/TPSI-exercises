"use strict";

let vet = []

window.onload=function(){
    let _btnG=document.getElementsByClassName("card")[0]
    let _cartaG=document.getElementsByClassName("card")[1]
    let _btnB=document.getElementsByClassName("card")[2]
    let _cartaB=document.getElementsByClassName("card")[3]
	let _puntiG = document.getElementsByTagName("span")[0]
	let _puntiB = document.getElementsByTagName("span")[1]	
    let _assoG=document.getElementsByClassName("msgAsso")[0]
    let _assoB=document.getElementsByClassName("msgAsso")[1]

 
}





function generaNumero(a, b){
    return Math.floor((b-a)*Math.random())+a
}
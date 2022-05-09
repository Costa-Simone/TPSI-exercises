const DIM = 10;
let livello = 0;

window.onload= function(){
	let _wrapper = document.getElementById("wrapper");
	
	
}	



function generaNumero(min, max){
    let rnd = Math.floor((max - min + 1) * Math.random()) + min;   
    return rnd;
}
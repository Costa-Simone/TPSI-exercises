const DIM = 10;
let livello = 0;

window.onload= function(){
	let _wrapper = document.getElementById("wrapper");

    let livello = 0;

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            let div = document.createElement("div");

            div.id = `div-${i}-${j}`;
            div.classList.add("cella");

            _wrapper.appendChild(div);
        }
    }

    let timeId = setInterval(visualizza, 500);

    function visualizza() {
        reset();

        for(let i = 0; i < 10 - (livello); i++) {
            let cella1 = document.getElementById(`div-${i}-${0 + livello}`);
            let cella2 = document.getElementById(`div-${0 + livello}-${i}`);
            let cella3 = document.getElementById(`div-${9 - livello}-${i}`);
            let cella4 = document.getElementById(`div-${i}-${9 - livello}`);

            cella1.style.backgroundColor = "red";
            cella2.style.backgroundColor = "red";
            cella3.style.backgroundColor = "red";
            cella4.style.backgroundColor = "red";
        }

        livello++;
    }
    function reset() {
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                let cella = document.getElementById(`div-${i}-${j}`);
                
                cella.style.backgroundColor = "#CCC";
            }
        }
    }
}	

function generaNumero(min, max){
    let rnd = Math.floor((max - min) * Math.random()) + min;   
    return rnd;
}

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

        for(let i = 0; i < 10 - livello * 2; i++) {
            let cella1 = document.getElementById(`div-${livello}-${i + livello}`);
            let cella2 = document.getElementById(`div-${i + livello}-${livello}`);
            let cella3 = document.getElementById(`div-${10 - (livello + 1)}-${i + livello}`);
            let cella4 = document.getElementById(`div-${i + livello}-${10 - (livello + 1)}`);

            cella1.style.backgroundColor = "red";
            cella2.style.backgroundColor = "red";
            cella3.style.backgroundColor = "red";
            cella4.style.backgroundColor = "red";
        }

        if(livello == 4) {
            livello = 0;
        }
        else {
            livello++;
        }
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

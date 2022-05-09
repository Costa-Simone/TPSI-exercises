"use strict";

window.onload = function () {
	let _wrapper = document.getElementById("wrapper");
	let _btnStop = document.getElementById("btnStop");
	let _btnRestart = document.getElementById("btnRestart");

	// leggo le dimensioni wrapper
	// alert(_wrapper.style.width)  // stringa vuota
	let wrapper_w = getComputedStyle(_wrapper).width;
	let wrapper_h = getComputedStyle(_wrapper).height;
	// alert(wrapper_w) devo togliere il 'px' finale
	wrapper_w = parseInt(wrapper_w.substr(0, wrapper_w.length - 2));
	wrapper_h = parseInt(wrapper_h.substr(0, wrapper_h.length - 2));

	let timerId = setInterval(visualizza, 50);

	_btnStop.addEventListener("click", function() {
		if(timerId) {
			clearInterval(timerId);
		}
	});
	_btnRestart.addEventListener("click", function() {
		_wrapper.innerHTML = "";
		timerId = setInterval(visualizza, 50);
		_btnRestart.disabled = true;
		_btnStop.disabled = true;
	});


	function visualizza() {
		let div = document.createElement("div");
		let red = generaNumero(0, 256);
		let green = generaNumero(0, 256);
		let blue = generaNumero(0, 256);
		let width = generaNumero(10, 101);
		let height = generaNumero(10, 101);
		let top = generaNumero(0, wrapper_h - height);
		let left = generaNumero(0, wrapper_w - width);

		div.style.width = width;
		div.style.height = height;
		div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
		div.style.top = top;
		div.style.left = left;
		div.style.position = "absolute";

		_wrapper.appendChild(div);
	}
}

function generaNumero(min, max) {
	let rnd = Math.floor((max - min) * Math.random()) + min;

	return rnd;
}

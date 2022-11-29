"use strict";

function ritorna() {
	window.location.href = "index.html";
}

function salva() {
	let json = localStorage.getItem("bookstore_json");
    let bookstore = JSON.parse(json);
    let book = {};
    let _input = document.getElementsByTagName("input");

    for(let item of _input) {
        book[item.id] = item.value;
    }

    bookstore.push(book);
    json = JSON.stringify(bookstore);
    localStorage.setItem("bookstore_json", json);
}

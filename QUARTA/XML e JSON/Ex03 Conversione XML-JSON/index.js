'use strict'

localStorage.setItem("bookstore_xml", bookstore);

function converti() {
    let xml = localStorage.getItem("bookstore_xml");
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml, "text/xml");
    let root = xmlDoc.documentElement;
    let JSONLibri = [];
    let json;

    for(let book of root.children) {
        let JSONLibro = {};

        JSONLibro["author"] = "";

        if(book.hasAttribute("category")) {
            JSONLibro["category"] = book.getAttribute("category");
        }

        for(let campo of book.children) {
            switch(campo.tagName) {
                case "title":
                    JSONLibro["title"] = campo.textContent;

                    if(campo.hasAttribute("lang")) {
                        JSONLibro["lang"] = campo.getAttribute("lang");
                    }
                    break;
                
                case "author":
                    if(JSONLibro["author"] != "") {
                        JSONLibro["author"] += ";";
                    }

                    JSONLibro["author"] += campo.textContent;
                    break;

                case "price":
                    JSONLibro["price"] = campo.textContent;
                    break;
            }
        }

        if(JSONLibro["author"] == "") {
            delete JSONLibro["author"];
        }

        for(let key in JSONLibro) {
            console.log(key + " = " + JSONLibro[key]);
        }

        JSONLibri.push(JSONLibro);
    }

    alert("Conversione eseguita correttamente!");

    json = JSON.stringify(JSONLibri);

    localStorage.setItem("bookstore_json", json);
}

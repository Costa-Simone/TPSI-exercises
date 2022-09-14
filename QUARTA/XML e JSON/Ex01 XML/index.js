'use strict'

function crea() {
    localStorage.setItem("bookstore_xml", bookstore);
    alert("Dati salvati correttamente nel localStorage")
}

function visualizza() {
    // lettura della stringa dal localStorage
    let xml = localStorage.getItem("bookstore_xml");
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml, "text/xml");
    let root = xmlDoc.documentElement;

    let _tabLibri = document.getElementById("tabLibri");
    let _child = root.children;

    console.log("Children: ", root.children.length);
    console.log("ChildNods: ", root.childNodes.length);

    for(let i = 0; i < root.children.length; i++) {
        let tr = document.createElement("tr");

        _tabLibri.appendChild(tr);

        for(let j  = 0; j < 6; j++) {
            let th = document.createElement("th");

            tr.appendChild(th);
        }

        let cella = tr.children;

        for(let j = 0; j < _child[i].children.length; j++) {
            let tagName = _child[i].children[j].tagName;

            switch(tagName) {
                case "title":
                    cella[0].innerHTML = _child[i].children[j].innerHTML;
                    cella[2].innerHTML = _child[i].children[j].getAttribute("lang");
                    break;
                case "year":
                    cella[4].innerHTML = _child[i].children[j].innerHTML;
                    break;
                case "price":
                    cella[5].innerHTML = _child[i].children[j].innerHTML;
                    break;
                case "author":
                    if(cella[3].innerHTML != "") { 
                        cella[3].innerHTML += ";";
                    }

                    cella[3].innerHTML += _child[i].children[j].innerHTML;
                    break;
            }
        }

        cella[1].innerHTML = _child[i].getAttribute("category");
    }
}

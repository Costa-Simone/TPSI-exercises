'use strict';

window.onload = function() {
    let _salva = document.getElementById("btnSalva");
    let _annulla = document.getElementById("btnAnnulla");
    let _optGender = document.getElementsByName("optGender");

    _annulla.addEventListener("click", function() {
        window.location.href = "index.html";
    });
    _salva.addEventListener("click", function() {
        let gender;
        let code;
        let price;
        let color;
        let img;
        let model = {};
        let swatches = [];
        let json = localStorage.getItem("swatches_json");
        let swatchesStore = JSON.parse(json);
        let trovato = false;

        if(_optGender[0].checked) {
            gender = "Men";
        }
        else {
            gender = "Women";
        }

        code = document.getElementById("txtCode").value;
        price = document.getElementById("txtPrice").value;
        color = document.getElementById("lstColor").value;
        img = `${color.toLowerCase()}_cardigan.jpg`;
        /*model.code = code;
        model.price = price;

        swatches.push({
            "color" : color,
            "img" : img,
        });

        model.swatches = swatches; */

        model = {
            "code" : code,
            "price" : price,
            "swatches" : [{
                "color" : color,
                "img" : img
            }]
        }

        for(let mainItem of swatchesStore) {
            if(mainItem.gender == gender) {
                trovato = false;

                for(let model of mainItem.models) {
                    if(model.code == code) {
                        model.swatches.push( {
                            "color" : color,
                            "img" : img
                        });

                        trovato = true;
                    }
                }

                if(!trovato) {
                    mainItem.models.push(model);
                }
            }
        }

        json = JSON.stringify(swatchesStore);

        localStorage.setItem("swatches_json", json);

        window.location.href = "index.html";
    })
}
 
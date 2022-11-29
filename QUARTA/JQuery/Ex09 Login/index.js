"use strict"
var utenti = [ {"user":"pippo",  "pwd":"pwdPippo"},
               {"user":"pluto",  "pwd":"pwdPluto"},
			   {"user":"minnie", "pwd":"pwdMinnie"} ];

$(document).ready(function() {
    let _txtUser = $("#txtUser")
    let _txtMsg = $("#msgUser")
    let _txtPsw = $("#txtPwd")
    let _msgPwd = $("msgPwd")

    _txtUser.on("change", function() {
        let trov = false

        _txtMsg.hide()

        for(let utente of utenti) {
            if(utente["user"] == _txtUser.val()) {
                trov = true
            }
        }

        if(!trov) {
            _txtUser.addClass("nok")
            _txtMsg.css("color", "red")
            _txtMsg.fadeIn(1000, function() {
                _txtMsg.show()
            })
            _txtMsg.text("Utente non valido")
        } else {
            _txtUser.removeClass("nok")
            _txtMsg.text("Ok")
            _txtUser.css("borderColor", "black")
            _txtMsg.css("color", "green")
            _txtMsg.fadeIn(1000, function() {
                _txtMsg.show()
            })
        }
    })
    _txtUser.on("mouseover", function() {
        _txtUser.css("borderColor", "blue")
        _txtUser.css("backgroundColor", "#ccf")
    })
    _txtUser.on("mouseout", function() {
        _txtUser.css("borderColor", "")
        _txtUser.css("backgroundColor", "")
    })
    _txtPsw.on("change", function() {
        let s = _txtPsw.val()
        let n = s.length
        let cAlf = false
        let cNum = false
        let correct = false

        _msgPwd.hide()
        
        if(n > 7) {
            let i = 0

            while(i < n && (!cAlf && !cNum)) {
                let c = s.charAt(i)

                if(!cNum) {
                    cNum = $.isNumeric(i)
                }
                if(!cAlf) {
                    cAlf = isLetter(s[i])
                }

                i++
            }

            for(let utente of utenti) {
                if(utente["pwd"] == s) {
                    correct = true
                }
            }
        }

        if(correct && cNum && cAlf) {
            _txtPsw.removeClass("nok")
            _msgPwd.text("Ok")
            _txtPsw.css("borderColor", "black")
            _msgPwd.css("color", "green")
            _msgPwd.fadeIn(1000, function() {
                _msgPwd.show()
            })
        } else {
            _txtPsw.addClass("nok")
            _msgPwd.css("color", "red")
            _msgPwd.fadeIn(1000, function() {
                _msgPwd.show()
            })
            _msgPwd.text("Password non valida")
        }
    })

    function isLetter(c) { if (c.toLowerCase() == c.toUpperCase() ) return false; else return true; }
})

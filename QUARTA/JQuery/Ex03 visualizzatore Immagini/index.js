"use strict"

$(document).ready(function() {
  let _btnIndietro = $("#btnIndietro")
  let _btnAvanti = $("#btnAvanti")
  let _img = $("#img")
  let _wrapper = $("#wrapper")
  _wrapper.css("text-align","center")
  
  let i = 1
  let cssPulsanti = {
    "width": "140px",
    "height": "40px",
    "font-weight" : "bold",
    "border-radius":"50%",
    "background-color":"orange",
  }
  _btnIndietro.css(cssPulsanti)
  _btnAvanti.css(cssPulsanti)
  _img.css("width",400)
  _img.css("text-align","center")
  _img.css("vertical-align","middle")
  _btnIndietro.prop("disabled",true)
  _img.prop("src","img/img1.jpg")
  _btnAvanti.on("click",function(){
      if(i<=7){
        i++
      }
      _img.prop("src","img/img"+i+".jpg")
      if(i==7){
        _btnAvanti.prop("disabled",true)
        _btnIndietro.prop("disabled",false)
      }
  })

  _btnIndietro.on("click",function(){
    if(i>=1){
      i--
    }
    _img.prop("src","img/img"+i+".jpg")
    if(i==1){
      _btnAvanti.prop("disabled",false)
      _btnIndietro.prop("disabled",true)
    }
  })
   
});
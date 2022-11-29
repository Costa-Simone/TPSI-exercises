'use strict'

let ul = []
let wrapper;

$(document).ready(function(){	
   wrapper = $("#wrapper")
   
})

function aggiungi(index) {
   //let li = $("<li>")
   // li.text("menu 1 voce 4")
   //li.appendTo(wrapper.children("ul").eq(0))

   let voce = wrapper.children("ul").eq(index - 1).children().length + 1
   $("<li>").text(`menu ${index} voce ${voce}`).appendTo(wrapper.children("ul").eq(index - 1))
}
function sposta(index) {
   let li = wrapper.children("ul").eq(index - 1).children("li").last()

   if(index == 1) {
      index = 2
   }
   else {
      index = 1
   }

   li.appendTo(wrapper.children("ul").eq(index - 1))
}
function aggiungiPrima(index) {
   $("<li>").text(`menu ${index} voce 0`).prependTo(wrapper.children("ul").eq(index - 1))
}
function aggiungiDopo(index) {
   // $("<li>").text(`menu ${index} nuova voce`).insertAfter(wrapper.children("ul").eq(index - 1).children("li").first())
   wrapper.children("ul").eq(index - 1).children("li").first().after($("<li>").text(`menu ${index} nuova voce`))
}  
function replica(index) {
   // wrapper.children("ul").eq(index - 1).children("li").after($("<li>").text(`menu ${index} nuova voce`))
   wrapper.children("ul").eq(index - 1).children("li").each(function(i, ref) {
      let clone = $(ref).clone(i)

      $(ref).after(clone)
   })
}
function creazioneConCostruttore() {

}

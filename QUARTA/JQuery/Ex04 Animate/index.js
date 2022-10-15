$(document).ready(function() {

    var _btnAvvia = $("#btnAvvia");
	_btnAvvia.on("click", eseguiAnimazione);
 
	function eseguiAnimazione(){ 
		$("#pedina")		
		.css({"left":"10px","top":"260px", "width":"15px", "height":"15px"})
		.animate({"left":'+=60px', "width":"8px",  "height":"8px"}, 1300)
		.animate({"top":'+=38px',  "width":"15px", "height":"15px"},1300)
		.animate({"left":'+=116px',"width":"8px",  "height":"8px"}, 1300)
		.animate({"top":'+=77px',  "width":"15px", "height":"15px"},1300)
		.animate({"left":'+=250px',"width":"8px",  "height":"8px"}, 1300)
	}
	
});

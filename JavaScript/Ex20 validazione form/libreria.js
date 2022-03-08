
function generaNumero(a, b){
	return Math.floor((b-a+1)*Math.random()) + a;
}

function isDigit(s){
    for(i=0; i<s.length; i++){
	   if(!(s[i]>="0" &&  s[i]<="9"))
		   return false
    }
	return true;   
}

function isLetter(s){
    for(i=0; i<s.length; i++){
	   if(!(s[i]>="a" &&  s[i]<="z" || s[i]>="A" &&  s[i]<="Z" ))
		   return false
    }
	return true;      
}


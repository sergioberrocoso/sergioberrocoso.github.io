
document.addEventListener('DOMContentLoaded',iniciar);
var texto_historia ='Esto es Esparta!... y Atenas y Tebas, y Axxos y Lesbos y muchas otras Poleis de las que jamás oíste hablar, entra y descubre su historia y la del pueblo cuna de Occidente!'



function iniciar(){
						

var texto_historia=document.getElementById('sello').onclick=seccionHistoria;


}




function seccionHistoria(){
var audio=document.getElementById('esparta');
audio.src='audios/this_is_sparta.mp3';
var desaparece=document.getElementById('sello');
desaparece.style.display='none';
var parrafo= document.getElementById('texto');
parrafo.style.display='block';
escribeMaquina(texto_historia);


}



function escribeMaquina (str){


var parrafo= document.getElementById('texto');



var arrayletras = str.split('');
var i=0;


var printStr = setInterval(function(){

	parrafo.innerHTML += arrayletras[i];
	i++;

	if(i=== arrayletras.length){
		clearInterval(printStr);
	}
},200);


};


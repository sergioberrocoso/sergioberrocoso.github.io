  
 var elementext = document.getElementById("textos"); 
 var elementfotos = document.getElementById("imagenes");
 var elementaudios = document.getElementById("audios");
 var contador = 0;
 var srcfotos = ["../img/img1.jpg", "../img/img2.gif","../img/img3.jpg","../img/img4.jpg","../img/img5.jpg","../img/img6.jpg"];
 var srcaudios =["../audios/audio1.mp3","../audios/audio2.mp3","../audios/audio3.mp3","../audios/audio4.mp3","../audios/audio5.mp3","../audios/audio6.mp3"];
 var titulos = ["IronMaiden: The Trooper", "HelloWeen: Future World", "HAGGARD: In a FullMoon Procession", "SuidKara: Birogs Oath","Rhapsody: Wings of Destiny", "BlindGuardian: Valhalla"];
 var max= srcfotos.length;
 var max1=max-1;
 
 function next(){


	if(contador ==max1) {
		contador=0;
		
	}else {
		contador = contador+1;
	}

	elementfotos.setAttribute('src', srcfotos[contador]);
	elementaudios.setAttribute('src', srcaudios[contador]);
	elementext.innerHTML=titulos[contador];
}

function first (){
 elementfotos.setAttribute('src', srcfotos[0]);
 elementaudios.setAttribute('src', srcaudios[0]);
 elementext.innerHTML=titulos[0];
}
  
function previous (){

	if(contador==0) {
		contador=max1;
		
	}else {
		contador = contador-1;
	} elementfotos.setAttribute('src', srcfotos[contador]);
     elementaudios.setAttribute('src', srcaudios[contador]);
	 elementext.innerHTML=titulos[contador];
}
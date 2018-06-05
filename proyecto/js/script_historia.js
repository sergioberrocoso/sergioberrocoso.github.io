document.addEventListener('DOMContentLoaded',iniciar);

var texto_historia_html='Según aseguraron los espartanos, Teleclo fue asesinado aquella jornada a manos de un grupo de mesenios. Afirmaban que aquellos mismos hombres habían violado a las doncellas espartanas consagradas a la diosa. Teleclo, al conocer lo que estaba ocurriendo, había intentado evitarlo. Como resultado, le dieron muerte. Para empeorar las cosas, las vírgenes humilladas habrían decidido quitarse la vida antes de seguir viviendo con aquella vergüenza. Los espartanos, para quienes Teleclo era un auténtico héroe, se alzaron en armas contra sus vecinos del oeste, los mesenios, por más que sus reyes, primero Antíoco y más tarde su hijo Eufaes, negaran el incidente y aseguraran que habían sido el propio Teleclo y un grupo de espartanos disfrazados de mujer quienes habían atacado a sus contendientes. Así se dio origen a uno de los episodios más importantes en la Historia Arcaica de Grecia:las Guerras Mesenias. La ciudad de Esparta nacería tiempo después, a principios del s. VIII a.C., cuando los habitantes de cuatro aldeas, Pitana, Cinosura, Mesoa y Limnas, realizaron un pacto de sinecismo. Unos años más tarde, el mismo Teleclo anexionaría a Amiclas a ese núcleo, concluyendo de ese modo la creación de la Polis espartana.La expansión doria habría sido gradual en la zona. Hacia la mitad del S. VIII a.C. los dorios ya habían conquistado y esclavizado tanto la Escirítide como la Egítide, controlando así todo el norte del valle. La expansión continuó hacia el sur,y así, Esparta tomó Helos y Gitio, un excelente puerto natural que en los años venideros le facilitaría el comercio exterior.La solución pasaba por obtener nuevas tierras con las que suplir las carencias. Una colonización del interior de Grecia era poco factible, puesto que aquellos que emigraran perderían todos sus derechos y pasarían a ser meros colonos en otras tierras. La salida por mar era una opción aún peor, ya que los lacedemonios eran gente de tierra que apenas miraban al mar, aunque unos años más tarde establecieran su primera colonia en Taras.Pero, si miraban al oeste, más allá del macizo del Taigeto, encontraban una tierra feraz, de campos extensos, que cubriría sin duda alguna todas sus necesidades: el valle del Pamiso, que el monte Itome dividía en las llanuras de Esteníclaro y Macaria. Teleclo ya había creado varios asentamientos espartanos en la llanura de Macaria, al sur de Itome. Era la opción más viable. Y la que causaría la primera Guerra Mesenia, que se alargaría durante 20 años.Habían sido necesarios veinte años de luchas intensas, pero al fin, Lacedemonia había obtenido la victoria. Podía satisfacer sus necesidades, ampliar sus riquezas y poner fin a la hambruna que amenazaba a sus hijos desde hacía años.Aunque no conquistaron la totalidad del territorio mesenio, ni consiguieron dar muerte a la Casa de los Epítidas, su victoria había sido completa. Jamás hubieran pensado que, sólo unos años más tarde, volverían a estar luchando en aquellos mismos campos. Contra aquel mismo enemigo.';
function iniciar(){
						

var texto_historia=document.getElementById('sello').onclick=seccionHistoria;


}


function seccionHistoria(){
var audio=document.getElementById('esparta');
audio.src='../audios/this_is_sparta.mp3';
var audio2=document.getElementById('conan');
audio2.src='../audios/conan.mp3';
var desaparece=document.getElementById('sello');
desaparece.style.display='none';
var parrafo= document.getElementById('texto');

parrafo.style.display='block';
escribeMaquina(texto_historia_html);


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
},100);


};

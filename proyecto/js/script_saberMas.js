addEventListener('DOMContentLoaded', iniciar);

var meses= ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
var dias= dias();
var anos= anos();
var p1 = document.getElementById("password").value;
var p2 = document.getElementById("password2").value;
var espacios = false;
var cont = 0;

function dias(){
var dias=[];
for(var i=1;i<=31;i++){
dias.push(i);}
return dias;
};


function anos(){
	var anos=[];
	for(var i=1900;i<=2018; i++){
	anos.push(i);}
	return anos;
};




function iniciar(){

var mes=document.getElementById('mes');
var dia=document.getElementById('dia');
var ano=document.getElementById('ano');
document.getElementById('comprobar').onclick=comprobarClave;
document.getElementById('alias').onblur=requeridoAlias;
document.getElementById('password').onblur=requeridoPassword;
rellenarMenus(meses,mes);
rellenarMenus(dias,dia);
rellenarMenus(anos,ano);

}


function rellenarMenus(array,padre){

for(var i=0;i<array.length;i++){

	option= document.createElement('option');
	option.text=array[i];
	option.value=array[i];
	padre.appendChild(option);
}


}

function requeridoAlias(){
	var alerta=document.getElementById('alertaAlias');
    var input= document.getElementById('alias');

    if(input.value==""){
    	alerta.innerHTML=" Campo Obligatorio!!!";
    	input.style.backgroundColor='pink';
    	input.style.border='1px red solid';
    }else{
    	input.style.backgroundColor='';
    	input.style.border='';
    	alerta.innerHTML='';
    }


}


function requeridoPassword(){
	var alertaPassword=document.getElementById('alertaPassword');
    var input= document.getElementById('password');

    if(input.value==""){
    	alertaPassword.innerHTML=" Campo Obligatorio!!!";
    	input.style.backgroundColor='pink';
    	input.style.border='1px red solid';
    }else{
    	input.style.backgroundColor='';
    	input.style.border='';
    	alertaPassword.innerHTML='';
    }



}


	function comprobarClave(){
  	 var clave1 = document.mi_formulario.password.value;
     var clave2 = document.mi_formulario.password2.value;
     
     
    if (clave1 != clave2){
    
    alert("Las dos claves son distintas...,compruebe de nuevo.");
   
}
else {
	
	
	document.mi_formulario.submit() 
	
}


}

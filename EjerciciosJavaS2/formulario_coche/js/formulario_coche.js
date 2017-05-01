
  var precioTotal =12000;
    
    var motor1;
    var arrayMotor = [0, 1500, 3000];
    
    var modeloAnterior = 1;
    var nuevoModelo = 1;
    var arrayModelo = [-2000,0,1500];
    
    var colorAnterior = 0;
    var arrayColor = [0, 0, 0, -500, -600];
    
    var opcionesAnteriores = 0;

    function capturaMotor(){
        motor1 = document.getElementById("tipomotor").selectedIndex;

    }
    
    function cambioDeMotor(){
        var nuevoMotor = document.getElementById("tipomotor").selectedIndex;
        switch(nuevoMotor) {
            case 0:    
                precioTotal = precioTotal - arrayMotor[motor1];
                
                document.getElementById("tres").disabled = false;
                 break;
            case 1:     
            case 2:     
                precioTotal = precioTotal + arrayMotor[nuevoMotor] - arrayMotor[motor1];
                
                document.getElementById("tres").disabled = true;
                document.getElementById("tres").checked = false;
                break;
        }
        document.getElementById("total").innerHTML = precioTotal.toString();;
        motor1 = nuevoMotor;
     }
    
 
     function cambiaModelo(){
        
        document.getElementById("onconnected").disabled = true;
        if (document.getElementById('onconnected').checked===true)
            document.getElementById("onconnected").checked === false;
        
        if (document.getElementById("tres").checked === true)
            nuevoModelo = 0;
        else if(document.getElementById("cinco").checked=== true)
            nuevoModelo = 1;
        else
            nuevoModelo = 2;
        precioTotal = precioTotal + arrayModelo[nuevoModelo] - arrayModelo[modeloAnterior];
        document.getElementById("total").innerHTML = precioTotal.toString();
        // Habilitamos el check on-Connected si nuevo modelo es familiar
        if(nuevoModelo === 2)
            document.getElementById("onconnected").disabled = false;
        modeloAnterior = nuevoModelo;
     }
     
     function cambiaColor(){
        var nuevoC = document.getElementById("colores").selectedIndex;
        switch(nuevoC) {
            case 0:     
            case 1:    
            case 2:    
                precioTotal = precioTotal - arrayColor[colorAnterior];
        
                document.getElementById("metalizada").disabled = false;
                 break;
            case 3:    
            case 4:     
                precioTotal = precioTotal + arrayColor[nuevoC] - arrayColor[colorAnterior];
             
                document.getElementById("metalizada").disabled = true;
                break;
        }
        document.getElementById("total").innerHTML = precioTotal.toString();;
        colorAnterior = nuevoC;
     }
     
     function opciones(){
         nuevasOpciones = 0;
         if (document.getElementById('metalizada').checked===true)
             nuevasOpciones += 750;
         if (document.getElementById('llanta').checked===true)
             nuevasOpciones += 2000; 
         if (document.getElementById('climatizador').checked===true)
             nuevasOpciones += 800; 
         if (document.getElementById('gps').checked===true)
             nuevasOpciones += 340; 
         if (document.getElementById('onconnected').checked===true)
             nuevasOpciones += 800;
        
         precioTotal = precioTotal + (nuevasOpciones - opcionesAnteriores);
         document.getElementById("total").innerHTML = precioTotal.toString();;
         opcionesAnteriores = nuevasOpciones;
	
     }

	 function fotocoche(){
	    var nuevoC = document.getElementById("colores").selectedIndex;
		var elementfotos = document.getElementById("imagenes");
		var srcfotos=["../fotos/coche3puertas.jpg","../fotos/coche3puertasrojo.jpg","../fotos/coche3puertasverde.jpg",      "../fotos/coche3puertasnaranja.jpg","../fotos/coche3puertasnegro.jpg"];
		var srcfotos2=["../fotos/coche5puertas.jpg","../fotos/coche5puertasrojo.jpg","../fotos/coche5puertasverde.jpg","../fotos/coche5puertasnaranja.jpg","../fotos/coche5puertasnegro.jpg"];
		var srcfotos3=["../fotos/cochefamiliar.jpg","../fotos/cochefamiliarrojo.jpg","../fotos/cochefamiliarverde.jpg","../fotos/cochefamiliarnaranja.jpg","../fotos/cochefamiliarnegro.jpg"];
		if (document.getElementById("tres").checked === true )
			 switch(nuevoC) {
            case 0: elementfotos.setAttribute("src", srcfotos[1]); 
			break;
            case 1: elementfotos.setAttribute("src", srcfotos[2]); 
				break;
            case 2: elementfotos.setAttribute("src", srcfotos[3]);      
               
                 break;
            case 3:  elementfotos.setAttribute("src", srcfotos[0]); 
				break;
            case 4:  elementfotos.setAttribute("src", srcfotos[4]);      
                
                break;
        }
else if(document.getElementById("cinco").checked=== true)
	
		  switch(nuevoC) {
            case 0: elementfotos.setAttribute("src", srcfotos2[1]); 
			break;
            case 1: elementfotos.setAttribute("src", srcfotos2[2]); 
				break;
            case 2: elementfotos.setAttribute("src", srcfotos2[3]);      
               
                 break;
            case 3:  elementfotos.setAttribute("src", srcfotos2[0]); 
				break;
            case 4:  elementfotos.setAttribute("src", srcfotos2[4]);      
                
                break;
        }
else if(document.getElementById("famil").checked=== true)	
	 switch(nuevoC) {
            case 0: elementfotos.setAttribute("src", srcfotos3[1]); 
			break;
            case 1: elementfotos.setAttribute("src", srcfotos3[2]); 
				break;
            case 2: elementfotos.setAttribute("src", srcfotos3[3]);      
               
                 break;
            case 3:  elementfotos.setAttribute("src", srcfotos3[0]); 
				break;
            case 4:  elementfotos.setAttribute("src", srcfotos3[4]);      
                
	 break;}



	 }
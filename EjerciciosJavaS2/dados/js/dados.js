  
        var face0=new Image()
        face0.src="../img/dado1.png"
        var face1=new Image()
        face1.src="../img/dado2.png"
        var face2=new Image()
        face2.src="../img/dado3.png"
        var face3=new Image()
        face3.src="../img/dado4.png"
        var face4=new Image()
        face4.src="../img/dado5.png"
        var face5=new Image()
        face5.src="../img/dado6.png"
  







  function lanzar()
    {
        var randomdice=Math.round(Math.random()*5);
        document.images["mydice"].src=eval("face"+randomdice+".src");
    }
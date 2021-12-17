function mostrarFormulario (){

    document.getElementById('formulario').style.display='block';
      
  }
  
  function mostrarRegistro (){
     
    alert('Se ha registrado correctamente');
    
  } 
  
  
  
  
  /*boton me gusta*/
  
  function cambiarImagen(){
    element = document.getElementById("MiImagen");
    if (element.src.match ("Megustaactivado")){
        element.src = "img/Me gusta/Me gusta.png";
    }
        else {
            element.src = "img/Me gusta/Me gustaactivado.png";
        }
    }
  
    
    
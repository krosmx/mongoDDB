$(document).ready(function(){

    $("#boton_rentar").click(function(){
        $.post("test.php",
        {
          id_renta: $("#id_renta").val()
        },
        function(data,status){
            //alert("Data: " + data + "\nStatus: " + status);
              if( data == 1 )
                alert("peliculas rentadas :)");
              else
                alert("user no registrado...registralo primero");
        });
    });

});

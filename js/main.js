function validateForm(){
    var nom = document.getElementById("name").value;
    var contr = document.getElementById("input-password").value;
    var apellido = document.getElementById("lastname").value;
    var cor = document.getElementById("input-email").value;
    var opcion = document.querySelector("select").value;
	/* Validando Nombres */
    if( nom == null || nom.length == 0 || nom == ""){
    	var anclatexto=document.createTextNode("Escribe tu nombre.");
    	nombremessage(anclatexto,"name");
    }else if ( /[0-9]/.test(nom)){
        var anclatexto=document.createTextNode("No ingrese números.");
        nombremessage(anclatexto,"name");
    }else if ( /^[a-z]/.test(nom.charAt(0))){
        var anclatexto=document.createTextNode("Escriba el primer caracter de su nombre en mayúscula.");
   		nombremessage(anclatexto,"name");
    }
    function nombremessage(texto,identificador){
   		var spanNombre = document.createElement("span");
		spanNombre.appendChild(anclatexto);
		var etiquetaexistente = document.getElementById("name"); 
		var padre= etiquetaexistente.parentNode;
		var nuevoHijo =padre.insertBefore(spanNombre,etiquetaexistente);
    }
    /* Validando Apellido */
   if( apellido == null || apellido.length == 0 || apellido == ""){
      	var anclatexto=document.createTextNode("Escribe tu apellido.");
      	lastnamemessage(anclatexto,"lastname");
    }else if ( /[0-9]/.test(apellido)){
    	var anclatexto=document.createTextNode("No ingrese números.");
      	lastnamemessage(anclatexto,"lastname");
        
    }else if ( /^[a-z]/.test(apellido.charAt(0)) ){
        var anclatexto=document.createTextNode("Escriba el primer caracter de su apellido en mayúscula.");
      	lastnamemessage(anclatexto,"lastname");
    }
    function lastnamemessage(texto,identificador){
   		var spanNombre = document.createElement("span");
		spanNombre.appendChild(anclatexto);
		var etiquetaexistente = document.getElementById("lastname"); 
		var padre= etiquetaexistente.parentNode;
		var nuevoHijo =padre.insertBefore(spanNombre,etiquetaexistente);
    }
    /* Validando Correo Electronico */
    var emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!emailRegex.test(cor)) {
        var anclatexto=document.createTextNode("Ingrese un correo válido.");
      	email(anclatexto,"input-email");
    }
    function email(texto,identificador){
   		var spanNombre = document.createElement("span");
		spanNombre.appendChild(anclatexto);
		var etiquetaexistente = document.getElementById("input-email"); 
		var padre= etiquetaexistente.parentNode;
		var nuevoHijo =padre.insertBefore(spanNombre,etiquetaexistente);
    }
    /* Validando Contraseña */
    if (contr.length <= 6 || contr.length == 0 || contr == "123456" || contr == "98754" || contr == "password" ) {
        var anclatexto=document.createTextNode("Contraseña no válida, debe contener al menos 6 carácteres.");
      	ContraseñaValida(anclatexto,"input-email");    
    }
    function ContraseñaValida(texto,identificador){
   		var spanNombre = document.createElement("span");
		spanNombre.appendChild(anclatexto);
		var etiquetaexistente = document.getElementById("input-password"); 
		var padre= etiquetaexistente.parentNode;
		var nuevoHijo =padre.insertBefore(spanNombre,etiquetaexistente);
    }
   	/*validando Selector de opciones */
    if(opcion == 0) {
       	var anclatexto=document.createTextNode("Elige una opción.");
      	elegirSelector(anclatexto,"select");
    }    
     function elegirSelector(texto,identificador){
   		var spanNombre = document.createElement("span");
		spanNombre.appendChild(anclatexto);
		var etiquetaexistente = document.querySelector("select"); 
		var padre= etiquetaexistente.parentNode;
		var nuevoHijo =padre.insertBefore(spanNombre,etiquetaexistente);
    }
    
}
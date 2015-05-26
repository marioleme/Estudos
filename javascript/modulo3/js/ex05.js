window.onload=function(){
  /* Controles*/
  var f =  document.getElementById("form1");
  var s = document.getElementById("enviar");

   /* elementos*/

   var nome = document.getElementById("nome");
   var email = document.getElementById("email");
   var login = document.getElementById("login");
   var senha = document.getElementById("senha");


   // CORE

   function write_g(idelemento, texto)
   {
     var x = document.getElementById(idelemento);
     x.innerHTML=texto
   }
   function show(idelemento)
   {
    var x = document.getElementById(idelemento);
    x.style.display="block";
   }
   function hide(idelemento)
   {
    var x = document.getElementById(idelemento);
    x.style.display="none";
   }

   // Controle de envio
   s.onclick=function(){
   	  if(nome.value == '' || email.value == '' || login.value == '' || senha.value == '') 
   	  {
        write_g('erro','Presencha todos os campos Obrigatorios')
        show('erro');
   	  }else if(email.value.indexOf("@")< 1)
   	  {
   	  	write_g('erro','Email invalido')
        show('erro');
   	  }else if(login.value.length < 6 || login.value.length > 12)
   	  {
        write_g('erro','O login deve ter 6-12 caracteres')
        show('erro');
   	  }else{
   	  	alert("nem Um erro encontrado. Enviado com sucesso!!")
   	  	f.submit();
   	  }
   	  return false;
   }
};
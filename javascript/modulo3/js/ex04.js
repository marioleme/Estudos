window.onload=function(){
  /* Controles*/
  var form =  document.getElementById("form1");
  var s = document.getElementById("enviar");

   /* elementos*/

   var nome = document.getElementById("nome");
   var email = document.getElementById("email");
   var login = document.getElementById("login");
   var senha = document.getElementById("senha");

   // Controle de envio
   s.onclick=function(){
   	  if(nome.value == '' || email.value == '' || login.value == '' || senha.value == '') 
   	  {
   	 	alert("Presencha todos os campos Obrigatorios");
   	  }else if(email.value.indexOf("@")< 1)
   	  {
   	  	alert("email Invalido");	
   	  }else if(login.value.length < 6 || login.value.length > 12)
   	  {
   	   alert("O login deve ter 6-12 caracteres")	
   	  }else{
   	  	alert("nem Um erro encontrado. Enviado com sucesso!!")
   	  	f.submit();
   	  }
   	  return false;
   }
};
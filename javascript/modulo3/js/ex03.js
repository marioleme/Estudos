window.onload=function(){
 var s = document.getElementById("enviar");
 var f = document.getElementById("form1");

  s.onclick=function(){
   

     if (nome.value == '') {
      alert("Preencha o Campo");
     }else{
        f.submit();
     }
     return false;


  }
	
};
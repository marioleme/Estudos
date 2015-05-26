window.onload=function(){

	var y = document.getElementById("sim");
	var n = document.getElementById("nao");
	var b = document.getElementById("next");
	b.disabled='disabled'; // ele inicia desativado , inabilitado//
	n.checked='checked'	; // ele já vem clicado o Não Aceito por foi declarado essa checked//
    
    y.onclick=function(){
    	y.checked='checked';
    	checabotao();
    }

    n.onclick=function(){
      	checabotao();
    }

    function checabotao(){
      if (y.checked) {
      	disabilita('next');
      }else if(n.checked){
      	disabilita('next','y');
      }

    }
    function disabilita(elemento,estado){
    	var attr = '';
    	if (estado == "y") {
             attr='disabled'
    	}
    	document.getElementById(elemento).disabled=attr;
    }
};
/*
HTML DOM API
-ID
-CLASS
-NAME
-TAG
-SELETOR

*/

window.onload=function(){
	var x = document.getElementById("titulo"); // para acessar o elemento pelo id
    var y = document.getElementsByClassName("titulo"); // Para acessae o elemento pela  class
	var z = document.getElementsByName("nome"); // para acessando o atributo pela tag name
	var w = document.getElementsByTagName("h4"); // acessando pelo nome da Tag (h4)
    var s = document.querySelector(".titulo"); // ele um acessa o elemento coma class titulo
    var m = document.querySelectorAll(".titulo")// este caso ele encontra mais do que um com esta class
	// var input=y[2];
	// input.value="teste de acesso"; // ele  altera o value 
	// input.size="60" // ele ajusta o tamanho do input
	// input.disabled="disabled";
 
    // for (i=0; i<w.length;i++) {
    // 	alert(w[i]);
    // }


}
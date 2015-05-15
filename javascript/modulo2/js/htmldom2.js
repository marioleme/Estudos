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
    var m = document.querySelectorAll(".titulo");// este caso ele encontra mais do que um com esta class
 
    // alert(w[1].className); // className ele retorna o nome da class do elemento que é h4
 
    // alert(w[1].innerHTML); // innerHTML ele retorna oque tem dentro dele do elemento que é h4
  
    // w[1].innerHTML="<h1><p style=\"color:blue;\">Mario Leme</p></h1>";
     // selecionando um unico elemento
    var t =  w[1];
    // escrevendo o meu objeto
    var i  = t.innerHTML="Mario Oliveira";
    // personalizar o meu objeto
    var s = t.style.color="red";

}
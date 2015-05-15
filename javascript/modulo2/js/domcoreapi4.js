window.onload=function(){


    
    // Criação um Elemento 
	var div      = document.createElement("div");
	// Criando um atributo
	var attr     = document.createAttribute("class");
	//atrinuindo  um valor par ao atributo
	attr.value   =  "attr";
	// inserindo o atributo ao elemento
	div.setAttributeNode(attr);
	// removendo atributo
	div.removeAttribute("class");
 	// criando texto
	var  text    = document.createTextNode("Exercicio de Javascript");
	// Preenchendo o elemento criado com um texto
	div.appendChild(text);
	//Selecionando o container 
    var container =  document.getElementById("container");
	// Inserindo o elemento no container
	container.appendChild(div);
	//Removendo atributo 
	container.removeAttribute("id")
	


	


	
};
window.onload=function(){


    
    // Criação um Elemento 
	var div      = document.createElement("div");
	// Adicionando atributo
	div.setAttribute("class", "node");
	// criando texto
	var  text    = document.createTextNode("Exercicio de Javascript");
	// Preenchendo o elemento criado com um texto
	div.appendChild(text);
	//Selecionando o container 
    var container =  document.getElementById("container");
	// Inserindo o elemento no container
	container.appendChild(div);

	


	
};
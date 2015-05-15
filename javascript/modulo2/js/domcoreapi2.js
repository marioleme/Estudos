/* 
DOM CORE API:
- TIPOS DE NÓS
  - Documento
  - Elemento
  - Atributo
  - Texto

 -Parentescos:
   - Pai   -> parentNOde
   - filho -> childNodes
   - irmãos -> sibling

 CARACTERISTICAS DOS NÓS
  - nodeName  -> nome do nó
  - nodeType  -> Tipo de nó
  - nodeValue -> valor do nó 



 TIPOS DE NÓ
  - 1 Element
  - 2 attr
  - 3 text

  RETORNO VALOR
   - 1 Element
   - 2 attr
   - 3 Text
  
*/
window.onload=function(){

 // Navegação em nivel extremo - - Metodo Fracionado
	var ul = document.getElementsByTagName("ul").item(0);
  var liprimaria   = ul.childNodes.item(1);
  var ulsecundaria = liprimaria.childNodes.item(1);
  var lisecundaria = ulsecundaria.childNodes.item(1);
  var ulfinal      = lisecundaria.childNodes.item(1);
  var lifinal      = ulfinal.childNodes.item(1);
  var txt          = lifinal.firstChild.nodeValue; 

  // Navegação em nivel extremo - - Metodo direto
  var completa =  document.getElementsByTagName("ul").item(0).childNodes.item(1).childNodes.item(1).childNodes.item(1).childNodes.item(1).childNodes.item(1).firstChild.nodeValue; 
  // resultado da arvore  
  alert(completa);

	// alert(ul.childNodes,item(1));
  var strong = document.getElementsByTagName("strong").item(0);
  // alert(strong.firstChild.nodeType);
  

}
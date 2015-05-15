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

*/

window.onload=function(){


	var ul = document.getElementsByTagName("ul").item(0);
	 // alert(ul.childNodes,item(1));
    var p = document.getElementsByTagName("p").item(0);
    // alert(p.lastChild);
    // // firstChild o primeiro elemento filho
    // lastChild o ultimo elemento filho
    p.lastChild.setAttribute("style", "color:red;");

}
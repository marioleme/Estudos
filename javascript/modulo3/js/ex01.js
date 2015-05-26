var x = prompt("Didite seu numero da sorte?");
 
/*

@autor: Usuario apressado sem logica e preguiçoso
if (x == 1) {
	alert("a");
}else if(x == 2){
	alert("b");
	
}else if(x == 3){
	alert("c");
	
}else if(x == 4){
	alert("d");
	
}else if(x == 5){
	alert("e");
	
}else if(x == 6){
	alert("f");
	
}else if(x == 7){
	alert("g");
	
}else if(x == 8){
	alert("h");
	
}else if(x == 9){
	alert("i");
	
}else if(x == 10){
	alert("j");
	
}else if(x == 11){
	alert("k");
	
}else if(x == 12){
	alert("l");
	
}else if(x == 13){
	alert("m");
	
}else if(x == 14){
	alert("n");
	
}else if(x == 15){
	alert("o");
	
}
*/
x=parseInt(x);
//converte o valor x para String , se não ele  não imprimi ,sendo number para string //
var t = new String();
  switch(x){
  	case 1: t="a";break;
  	case 2: t="b";break;
  	case 3: t="c";break;
  	case 4: t="d";break;
  	case 5: t="e";break;
  	case 6: t="f";break;
  	case 7: t="g";break;
  	case 8: t="h";break;
  	case 9: t="i";break;
  	case 10: t="j";break;
  	case 11: t="k";break;
  	case 12: t="l";break;
  	case 13: t="m";break;
  	case 14: t="n";break;
  	case 15: t="0";break; 
  }
  alert(t);
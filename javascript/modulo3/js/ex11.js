window.onload=function(){
  var x = document.getElementById("x");
  var y = document.getElementById("y");
  var h = document.getElementById("h");
  var c = document.getElementById("c");
  hipotenusa = catetox = catetoy = triangulo = false;
  

  c.onclick=function(){
    if(x.value != '' && y.value != ''){hipotenusa=true;}
    if(h.value != '' && y.value != ''){catetox=true;}
    if(h.value != '' && x.value != ''){catetoy=true;}



    if(x.value != '' && y.value != '' && h.value != ''){
      alert("Desculpe, somente dois valores são necessarios par ao calculo!");
        }else if(hipotenusa || catetox || catetoy){
       with(Math){
        if(hipotenusa){
          z = sqrt(pow(x.value,2)+pow(y.value,2)); 
          if(z*z ==(pow(y.value,2)-pow(x.value,2))){triangulo=true;}
        }else if(cateto){
            z = sqrt(pow(h.value,2)-pow(y.value,2));
             if(h.value*h.value ==(pow(y.value,2)+pow(z,2))){triangulo=true;} 
        }else if(catetoy){
           z = sqrt(pow(h.value,2)-pow(x.value,2));
           if(h.value*h.value ==(pow(x.value,2)+pow(z,2))){triangulo=true;} 
        }
        if(triangulo){
          alert('Resposta: ' +z);
        }
        else
            alert("este não é um triangulo Retangulo");
          }

    }else{
      alert("Preencha todos os campos");
    }
  }
 
};
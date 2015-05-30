window.onload=function(){
  var l   =  document.getElementById("l");
  var cm  =  document.getElementById("cm");
  var sd  =  document.getElementById("converter");
  resposta = new Number();


   sd.onclick=function(e){
    e.preventDefault();
      if(cm.value != '' && l.value != ''){
        alert('Preencha um  campos apenas');
      }else if(cm.value != ''){
        if (is_nunber(cm.value)) {
          resposta = parseInt(cm.value)/1000;
      
        }else{
          alert('digite um valor Numerico');
        }
        
      }else if(l.value != ''){
        if (is_nunber(l.value)) {
            resposta = parseInt(l.value)*1000;
        }else{
          alert('Digite um valor Numerico');
        }
        
      }else{
        alert('Informe um vamor para conversão');
      }
      alert(resposta);
      return false;
   }


/// verifica se é um valor numerico
function is_nunber(str){
   var er = /^[0-9]+$/;
   return (er.test(str));
};

     /*
     1l = 1000cm³
     x1 = cm³
     */

     };

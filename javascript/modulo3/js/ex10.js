window.onload=function(){
  // Declaração das Variaveis
  modal    =  document.getElementById("modal");
  button   =  document.getElementById("button")
  login    =  document.getElementById("login");
  field    =  document.getElementById("senha");
  box      =  document.getElementById("box");
  controls =  document.getElementById("controls");
  sb       =  document.getElementById("enviar")
  // Pega a largura da Pagina
  width    =  window.innerWidth;
  // pega a altura da Pagina
  height   =  window.innerHeight;
  x = '';

 // For para adicionar os button 0 ao 9 
  for (i=0;i<10;i++) 
  {
   x += '<input type="button" class="keys" value="'+i+'">';
  };
 // pega a varialvel x informando ao button html
  button.innerHTML=x;

  // pega os elementos que o for criou
  keys = document.getElementsByClassName('keys');
  
  // For que pega os valores
  for(i=0;i<keys.length;i++){
      keys.item(i).onclick=function(){
        // adiciona o valor clicado e adicioonado no field concateando '+' oque ja tinha 
       field.value=field.value+this.value;
      }
    
  }
  // função clicar mo field eçe mostar o modal
  field.onclick =  function(){mostrar();}
  // se o usuario consegui escrever sem abrir modal ele zera value='';
  field.onkeyup =  function(){this.value='';}
  // função que clicando no modal ele oculta
  modal.onclick =  function(){ocultar();}
  // função do botão enviar , e ele oculta o modal.
  cf.onclick   =  function(){ocultar();}
  // função do botão reset e apaga todo o valor do field
  rs.onclick   =  function(){field.value=''}
  sb.onclick   =  function(e){
    e.preventDefault();
    if(login.value!= '' && field.value != ''){
      form1.submit();
    }else{
      alert("Preencha todos os Campos");
    }

  }

}
// função de mostrar o modal e key ,controls
 function mostrar(){
    box.style.padding='5px';
    modal.style.display="block";
    key.style.display="block";
    controls.style.display="block";
    modal.style.width=width+'px';
    modal.style.height=height+'px';
 }
 // função de oculta o modal e key ,controls
 function ocultar(){
    box.style.padding='0px';
    modal.style.display="none";
    key.style.display="none";
    controls.style.display="none";
 }
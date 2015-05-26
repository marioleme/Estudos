window.onload=function(){
  modal    =  document.getElementById("modal");
  button   =  document.getElementById("button")
  field    =  document.getElementById("senha");
  box      =  document.getElementById("box");
  controls =  document.getElementById("controls");
  width    =  window.innerWidth;
  height   =  window.innerHeight;
  x = '';


  for (i=0;i<10;i++) 
  {
   x += '<input type="button" class="keys" value="'+i+'">';
  };
  button.innerHTML=x;

  field.onclick=function()
  { 
     mostrar();
  }
  field.onkeyup=function()
  {
    this.value='';
  }
  modal.onclick=function()
  {
    ocultar();
  }
   cf.onclick=function(){
     ocultar();
   }
   rs.onclick=function(){
     field.value='';
   }

}
 function mostrar(){
    box.style.padding='5px';
    modal.style.display="block";
    key.style.display="block";
    controls.style.display="block";
    modal.style.width=width+'px';
    modal.style.height=height+'px';
 }
 function ocultar(){
    box.style.padding='0px';
    modal.style.display="none";
    key.style.display="none";
    controls.style.display="none";
 }
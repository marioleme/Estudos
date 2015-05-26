window.onload=function(){
  modal  =  document.getElementById("modal");
  button =  document.getElementById("button")
  field  =  document.getElementById("senha");
  box    =  document.getElementById("box");
  width  =  window.innerWidth;
  height =  window.innerHeight;

  
  x = '';

  for (i=0;i<10;i++) 
  {
   x += '<input type="button" class="keys" value="'+i+'">';
  };
  button.innerHTML=x;

  field.onclick=function()
  { 
    box.style.padding='5px';
    modal.style.display="block";
    modal.style.width=width+'px';
    modal.style.height=height+'px';
  }
  field.onkeyup=function()
  {
    this.value='';
  }
  modal.onclick=function()
  {
    box.style.padding='0px';
    modal.style.display='none';

  }
};
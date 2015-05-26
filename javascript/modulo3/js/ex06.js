window.onload=function(){
  modal  =  document.getElementById("modal");
  field  =  document.getElementById("senha");
  box    =  document.getElementById("box");
  width  =  window.innerWidth;
  height =  window.innerHeight;

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
};
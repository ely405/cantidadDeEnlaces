window.addEventListener("load", function(){
  var enlaces = document.getElementsByTagName("a");
  var imprime = document.getElementById("num_enlaces");
  var cantEnlaces = 0;
  for(var i= 0; i<enlaces.length; i++){
    (enlaces[i].href!=="")? cantEnlaces++ : "";
  }
  imprime.innerHTML = "Hay "+ cantEnlaces + " enlaces.";
})



//*!BOTONOES 

let Gradosfc  = document.querySelectorAll(".Cambiargrados")



//*!

let  Botonbuenosaires = document.getElementById("Buenosaires")
Botonbuenosaires.addEventListener("click",function(){
    document.getElementById("Buenosairesbody").style.display ="block";
    document.getElementById("Mexicobody").style.display = "none";
    document.getElementById("Santiagobody").style.display = "none";
    document.getElementById("Saobody").style.display = "none";
    document.getElementById("Quitobody").style.display = "none";
})

let  Botonquito = document.getElementById("Quitobu")
Botonquito.addEventListener("click",function(){
    document.getElementById("Buenosairesbody").style.display ="none";
    document.getElementById("Quitobody").style.display = "block";
    document.getElementById("Mexicobody").style.display = "none";
    document.getElementById("Santiagobody").style.display = "none";
    document.getElementById("Saobody").style.display = "none";
})
let  Botonmexico = document.getElementById("Ciudadmexico")
Botonmexico.addEventListener("click",function(){
    document.getElementById("Buenosairesbody").style.display ="none";
    document.getElementById("Quitobody").style.display = "none";
    document.getElementById("Mexicobody").style.display = "block";
    document.getElementById("Santiagobody").style.display = "none";
    document.getElementById("Saobody").style.display = "none";
})

let  Botonsao = document.getElementById("Saopaulo")
Botonsao.addEventListener("click",function(){
    document.getElementById("Buenosairesbody").style.display ="none";
    document.getElementById("Quitobody").style.display = "none";
    document.getElementById("Mexicobody").style.display = "none";
    document.getElementById("Santiagobody").style.display = "none";
    document.getElementById("Saobody").style.display = "block";
})

let  Botonsantiago = document.getElementById("Santiago")
Botonsantiago.addEventListener("click",function(){
    document.getElementById("Buenosairesbody").style.display ="none";
    document.getElementById("Quitobody").style.display = "none";
    document.getElementById("Mexicobody").style.display = "none";
    document.getElementById("Santiagobody").style.display = "block";
    document.getElementById("Saobody").style.display = "none";
})
let Cambioletra = document.querySelectorAll(".Cambiarletra")
let Opciones = document.getElementById("Grados").addEventListener("change",function(){
      var Ftrue = false
      var Ctrue = false
      if(this.value=="c"){
        Ctrue = true
      }
      if(this.value=="f"){
        Ftrue = true 
       }
      Gradosfc.forEach(function(node){
      if(Ctrue==true){
        let numero = node.innerHTML;
        const numerof = node.innerHTML =Math.trunc(((numero -32)*(5/9)));
        Cambioletra.forEach(function(node){
          node.innerHTML = "C"
        })
        
        
      }
      if(Ftrue == true){
        let numero =  node.innerHTML;
        const numerof = node.innerHTML = Math.trunc((numero*(9/5))+32);
        Cambioletra.forEach(function(node){
          node.innerHTML = "F"
        })
      }
        
      });
    
})

   
   



    

let Cookiebutton = document.getElementById("Cookiedelete")
Cookiebutton.addEventListener("click",function(){
    Cookiebutton.parentElement.parentElement.remove();

})







function Mensaje(){
    window.alert("Cargando estado del clima")
}
setTimeout(Mensaje,10)


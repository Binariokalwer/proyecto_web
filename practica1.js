// // if (!'speechSynthesis' in window) {
// //   alert("no compratible");
// // } else
// //   alert("compatible");
var fecha = new Date();
var hora = fecha.getHours();
var idi = window.navigator.language||navigator.browserLanguage;
var leg = idi.substring(0,2)
var inicio_de_idioma = 0;
function saludo(){
  if(hora >= 0 && hora < 6){
    speechSynthesis.speak(new SpeechSynthesisUtterance("Feliz media noche"));
  };
  if(hora >= 6 && hora < 12){
    speechSynthesis.speak(new SpeechSynthesisUtterance("Buen día"));
  };
  if(hora >= 12 && hora < 18){
    speechSynthesis.speak(new SpeechSynthesisUtterance("Feliz Tarde"));
  };
  if(hora >= 18 && hora < 24){
    speechSynthesis.speak(new SpeechSynthesisUtterance("Feliz noche"));
  };
   
};
function resolucion() {
  var widthBrowser = window.outerWidth;
  var heightBrowser = window.outerHeight;
  alert("Tamaño de la pantalla del navegador: width=" + widthBrowser + ", height=" + heightBrowser);
}
function españollatino(){
var titulo = document.getElementById("titulo").innerHTML="Proyectos"
var tituloh1 = document.getElementById("tituloh1").innerHTML="PROYECTOS ITMACLIF"
var textocontacto = document.getElementById("contacto").innerHTML ="Datos de contacto"
descripción_de_videos = descripción_de_videos2;
var parra = document.getElementById("leviamont-parrafo1").innerHTML=(descripción_de_videos[numero_arrays]);
speechSynthesis.speak(new SpeechSynthesisUtterance("Modo Español Latino"));
}
function ingles(){
  var titulo = document.getElementById("titulo").innerHTML="Projects"
  var tituloh1 = document.getElementById("tituloh1").innerHTML="Projects ITMACLIF"
  var infonum = document.getElementById("info-num").innerHTML="Number to be inserted"
  var textocontacto = document.getElementById("contacto").innerHTML ="Contact information"
  descripción_de_videos = descripción_de_videosen;
  document.getElementById("leviamont-parrafo1").innerHTML=(descripción_de_videos[numero_arrays]);
  speechSynthesis.speak(new SpeechSynthesisUtterance("American English mode"));
  }

function idiomas(){
  if (leg == 'es') {
    españollatino();
    document.getElementById("leviamont-parrafo1").innerHTML=("Bienvenido da click en el botón continuar");
   }
   if (leg == 'en') {
    ingles();
    descripción_de_videos = descripción_de_videosen;
    document.getElementById("leviamont-parrafo1").innerHTML=("Welcome click on the continue button");
   }
   document.getElementById("video44").src = ("https://player.vimeo.com/video/572838392?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1");
  }
  //area de videos e información//
const videos = ["","https://www.dropbox.com/s/31ybw541kvocd0e/Ceukos%202021.mp4?raw=1","https://www.youtube.com/embed/6xu_MrSxZaY","https://www.dropbox.com/s/xbo4lav0ocsw0xs/Leviamont3.mp4?raw=1"];
var descripción_de_videos = ["","Proyecto Ordenadores Cuánticos ¿qué son? ¿para que sirven? ¿son el futuro de la tecnología?","Proyecto para mejorar el sistema de transporte de materiales pesados mediante levitación electromagnética","Leviamont2"];
var descripción_de_videos2 = ["","Proyecto Ordenadores Cuánticos ¿qué son? ¿para que sirven? ¿son el futuro de la tecnología?","Proyecto para mejorar el sistema de transporte de materiales pesados mediante levitación electromagnética","Leviamont2"];
const descripción_de_videosen = ["","Quantum Computers Project What are they? What are they for? Are they the future of technology?","Project to improve the transport system for heavy materials by electromagnetic levitation","Leviamont2"];
//fin de area de videos e información//
///----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------///
var contenedor_de_video = document.getElementById("total-video1");
var numero_arrays = 1;
var numero_arrays_total = videos.length;
function borrar_animación(){
  contenedor_de_video.style.removeProperty("animation-name");
}
function avanzar2(){
   if (numero_arrays < numero_arrays_total){
     contenedor_de_video.style.setProperty("animation-name","animación1");
     document.getElementById("video44").src = (videos[numero_arrays]);
     setTimeout(borrar_animación,5000)
     document.getElementById("leviamont-parrafo1").innerHTML=(descripción_de_videos[numero_arrays]);
      numero_arrays++
    } else{
    contenedor_de_video.style.setProperty("animation-name","animación1");
    numero_arrays = 1;
    document.getElementById("video44").src = (videos[numero_arrays]);
    setTimeout(borrar_animación,5000)
      document.getElementById("leviamont-parrafo1").innerHTML=(descripción_de_videos[numero_arrays]);
   }
  }
  Swal.fire({
    title: 'Welcome Professor María Dolores Ramírez Dzib this is our project.',
    text: 'click ok to continue',
    imageUrl: 'https://lh3.googleusercontent.com/a-/AOh14GgXfpliOwbziyOdux3voA2W5V7yJzLx7cSZlwmkxw=s75-c',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
  function hablaer(){
    speechSynthesis.speak(new SpeechSynthesisUtterance("created by Daniel Isai Maas Cach and Daniel Aldayr Suastes Pech"));
  }
  // function retroceder2(){
  //   if (numero_arrays > 1){
  //     alert(numero_arrays);
  //       contenedor_de_video.style.setProperty("animation-name","animación1");
  //       document.getElementById("video44").src = (videos[numero_arrays]);
  //       alert(estado_anterior);
  //       numero_arrays = estado_anterior;
  //       alert(numero_arrays);
  //       setTimeout(borrar_animación,5000);
  //     if(leg == 'es'){
  //       document.getElementById("leviamont-parrafo1").innerHTML=(descripción_de_videos[numero_arrays]);
  //     }
  //     if(leg == 'en'){
  //       document.getElementById("leviamont-parrafo1").innerHTML=(descripción_de_videosen[numero_arrays]);
  //     } else{
  //       document.getElementById("leviamont-parrafo1").innerHTML=(descripción_de_videosen[numero_arrays]);
  //     }
  //   };
      
    
  //  }
  
  
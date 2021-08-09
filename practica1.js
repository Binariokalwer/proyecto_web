// // if (!'speechSynthesis' in window) {
// //   alert("no compratible");
// // } else
// //   alert("compatible");
var fecha = new Date();
var hora = fecha.getHours();

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
var infonum = document.getElementById("info-num").innerHTML="Numero por colocar"
var textocontacto = document.getElementById("contacto").innerHTML ="Datos de contacto"
var parrafo1 = document.getElementById("leviamont-parrafo1").innerHTML = "Proyecto para mejorar el sistema de transporte de materiales pesados mediante levitación electromagnetica"
var parrafo2 = document.getElementById("ceukos1").innerHTML="Proyecto Ordenadores Cuánticos ¿que son? ¿para que sirven? ¿son el futuro de la tecnología?"
speechSynthesis.speak(new SpeechSynthesisUtterance("Modo Español Latino"));
}
function ingles(){
  var titulo = document.getElementById("titulo").innerHTML="Projects"
  var tituloh1 = document.getElementById("tituloh1").innerHTML="Projects ITMACLIF"
  var infonum = document.getElementById("info-num").innerHTML="Number to be inserted"
  var textocontacto = document.getElementById("contacto").innerHTML ="Contact information"
  var parrafo1 = document.getElementById("leviamont-parrafo1").innerHTML ="Project to improve the transport system for heavy materials by electromagnetic levitation"
  var parrafo2 = document.getElementById("ceukos1").innerHTML="Quantum Computers Project What are they? What are they for? Are they the future of technology?"
  speechSynthesis.speak(new SpeechSynthesisUtterance("American English mode"));
  }

function idioma(){
  var idi = window.navigator.language||navigator.browserLanguage;
  var leg = idi.substring(0,2)
  if (leg == 'es') {
    españollatino();
   }
   if (leg == 'en') {
    ingles();
   }
   
}

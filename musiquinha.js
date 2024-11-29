let musica;

function preload(){
  musica = loadSound("música.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}
var tablero=[];

function tab(){
function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

var poner=function(){
for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    var mat = Gris;
    if (isEven(i)) {
      if (isOdd(j)) {
        mat = Blanco;
      } 
    } else {
      if (isEven(j)) {
        mat = Blanco;
      } 
    }
    var geometry = new THREE.BoxGeometry( 10, 10, 10 );
    var cubo = new THREE.Mesh(geometry,mat);
    cubo.position.x = j*10;
    cubo.position.y = i*10; 
    tablero.push(cubo);
  }
}
// Juntar cuadros
for (i = 1; i < 64; i++) {
tablero[0].add(tablero[i]);
}
 }
 
setup=function(){
 
  camara=new THREE.PerspectiveCamera();
  camara.position.z=20;
  
  var lienzo=document.getElementById("ejemplo-constructor");
  renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias:true});
  renderizador.setSize(600,600);
  
  escena=new THREE.Scene();
  escena.add(tablero[i]);
}

loop=function(){
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
}
setup();
loop();

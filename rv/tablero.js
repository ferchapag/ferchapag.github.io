var Gris = new THREE.MeshBasicMaterial({color: 0xB0A9A7});
var Blanco = new THREE.MeshBasicMaterial({color: 0xffffff});
var Marco= new THREE.MeshBasicMaterial({color: 0xB59402});

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

var tablero = [];
var lado = 10;
for (i = 0; i < 10; i++) {
  for (j = 0; j < 10; j++) {
    var material = Gris;
    if(i==0 || j==0){
    material=Marco;
    }
    else{
      if (isEven(i)) {
         if (isOdd(j)) {
          material = Blanco;
         } 
      } else {
         if (isEven(j)) {
         material = Blanco;
         } 
      }
    }
    
    var geometry = new THREE.BoxGeometry( 10, 10, 10 );
    var cubo = new THREE.Mesh(geometry,material);
    cubo.position.x = j*lado;
    cubo.position.y = i*lado; 
    tablero.push(cubo);
  }
}
// Juntas los cuadros al tablero
for (i = 1; i < 100; i++) {
tablero[0].add(tablero[i]);
}

var camara = new THREE.PerspectiveCamera();
camara.position.set(40,-100,100);
camara.lookAt(new THREE.Vector3(40,40,12))


//malla.position.set(-10,-10,0);
//var malla2=new THREE.Mesh(forma,mate);
//malla2.position.set(80,-10,0);

var escena = new THREE.Scene();
for (i = 0; i < 100; i++) {
escena.add(tablero[i]);
}


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);


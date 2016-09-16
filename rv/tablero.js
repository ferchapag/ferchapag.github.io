
var Gris = new THREE.MeshBasicMaterial({color: 0xB0A9A7});
var Blanco = new THREE.MeshBasicMaterial({color: 0xffffff});

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

var tablero = [];
var lado = 10;
for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    var material = Gris;
    if (isEven(i)) {
      if (isOdd(j)) {
        material = Blanco;
      } 
    } else {
      if (isEven(j)) {
        material = Blanco;
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
for (i = 1; i < 64; i++) {
tablero[0].add(tablero[i]);
}

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;
camara.position.x = 40;
camara.position.y = -100;
camara.lookAt(new THREE.Vector3(40,40,12))

var escena = new THREE.Scene();
for (i = 0; i < 64; i++) {
escena.add(tablero[i]);
}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);


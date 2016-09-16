var Gris = new THREE.MeshBasicMaterial({color: 0xB0A9A7});
var Blanco = new THREE.MeshBasicMaterial({color: 0xffffff});

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

var tablero = [];
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
    cubo.position.x = j*10;
    cubo.position.y = i*10; 
    tablero.push(cubo);
  }
}
// Juntar cuadros
for (i = 1; i < 64; i++) {
tablero[0].add(tablero[i]);
}

var camara = new THREE.PerspectiveCamera();
camara.position.set(40,-100,100);
camara.lookAt(new THREE.Vector3(40,40,12))


//malla.position.set(-10,-10,0);
//var malla2=new THREE.Mesh(forma,mate);
//malla2.position.set(80,-10,0);

var escena = new THREE.Scene();
for (i = 0; i < 64; i++) {
escena.add(tablero[i]);
}


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);


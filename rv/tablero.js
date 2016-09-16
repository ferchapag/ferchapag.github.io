var blanco= new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
var gris= new THREE.MeshBasicMaterial( {color: 0x6E6E6E} );

function par(n) {
   return n % 2 == 0;
}

function non(n) {
   return Math.abs(n % 2) == 1;
}

var l=10;
var tablero = [];
for(var i=0;i<8;i++){
  for(var j=0;j<8;j++){
    var mat = gris;
     if (par(i)){ 
      if (non(j)){ 
        mat=blanco;
      }
      }else{
        if(par(j)){
          mat=blanco;
        }
      }
    var cu= new THREE.Mesh(new THREE.BoxGeometry(l,l,l));
    var cubo=new THREE.Mesh (cu,mat);
    cubo.position.x=j*l;
    cubo.position.y=i*l;
    tablero.push(cubo);
    }

  }
for (i = 1; i < 64; i++) {
tablero[0].add(tablero[i]);
}
var escena= new THREE.Scene();
escena.add(tablero);

var camara= new THREE.PerspectiveCamera();
camara.position.x=10;
camara.position.y=10;
camara.position.z=10;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,
                     window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

var blanco= new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
var gris= new THREE.MeshBasicMaterial( {color: 0x6E6E6E} );

var l=10;
var tablero = [];

for(var i=0;i<8;i++){
  for(var j=0;j<8;j++){
    var mat = gris;
     if (i% 2){ 
      if (j % 2){ 
     mat=gris;
      }
      else{
        mat=blanco;
      }
    }
    else{
      if (j % 2){ 
      mat=gris;
      }
      else{
        mat=blanco;
      }
    }
    var cubo= new THREE.Mesh(new THREE.BoxGeometry(l,l,l),mat);
    cubo.position.x=j*l;
    cubo.position.y=i*l;
    tablero.push(cubo);
    }

  }

var escena= new THREE.Scene();
escena.add(tablero);

var camara= new THREE.PerspectiveCamera();
camara.position.x=100;
camara.position.y=100;
camara.position.z=100;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,
                     window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

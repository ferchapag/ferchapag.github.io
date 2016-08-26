var figura= new THREE.Shape();

figura.moveTo(2,7);
figura.lineTo(2,7);
figura.lineTo(0,4);
figura.lineTo(4,4);
figura.lineTo(6,0);
figura.lineTo(8,4);
figura.lineTo(12,4);
figura.lineTo(10,7);
figura.lineTo(12,10);
figura.lineTo(8,10);
figura.lineTo(6,14);
figura.lineTo(4,10);
figura.lineTo(0,10);
figura.lineTo(2,7);


var forma=new THREE.ShapeGeometry(figura);
var malla=new THREE.Mesh(forma);

var escena=new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,
                     window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

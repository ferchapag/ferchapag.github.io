var figura= new THREE.Shape();

figura.moveTo(10,35);
figura.lineTo(10,35);
figura.lineTo(0,20);
figura.lineTo(20,20);
figura.lineTo(30,0);
figura.lineTo(40,20);
figura.lineTo(60,20);
figura.lineTo(50,35);
figura.lineTo(60,50);
figura.lineTo(40,50);
figura.lineTo(30,70);
figura.lineTo(20,50);
figura.lineTo(0,50);
figura.lineTo(10,35);


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

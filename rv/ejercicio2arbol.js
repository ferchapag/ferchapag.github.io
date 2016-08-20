var escena=new THREE.Scene();
var camara=new THREE.PerspectiveCamera();
camara.position.z=100;
camara.position.y=15;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
var forma=new THREE.CylinderGeometry(5,5,50,60);
var material =new THREE.MeshNormalMaterial("brown");
var material2 =new THREE.MeshNormalMaterial("green");
var tronco=new THREE.Mesh(forma, material);


var forma2=new THREE.SphereGeometry(20,50,60);
var hojas=new THREE.Mesh(forma2,material2);
hojas.position.y=50;
hojas.fillStyle="green";

escena.add(tronco);
escena.add(hojas);

renderizador.render(escena,camara);



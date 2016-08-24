var escena=new THREE.Scene();
var camara=new THREE.PerspectiveCamera();
camara.position.z=100;
camara.position.y=5;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
var forma=new THREE.CylinderGeometry(7,11,30,60);
var material =new THREE.BasicMaterial("color:433B0F");
var material1 =new THREE.BasicMaterial("color:0DDA09");
var tronco=new THREE.Mesh(forma, material);


var forma2=new THREE.SphereGeometry(20,60,60);
var hojas=new THREE.Mesh(forma2,material1);
hojas.position.y=30;

escena.add(tronco);
escena.add(hojas);

renderizador.render(escena,camara);



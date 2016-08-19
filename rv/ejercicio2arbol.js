var escena=new THREE.Scene();
var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
var forma=new THREE.CyliderGeometry(5,5,50,80);
var material =new THREE.MeshNormalMaterial();
var tronco=new THREE.Mesh(forma, material);

var forma2=new THREE.SphereGeometry(20,60,60);
var hojas=new THREE.Mesh(forma2,material);

hojas.position.y=50;


escena.add(tronco);
escena.add(hojas);

renderizador.render(escena,camara);



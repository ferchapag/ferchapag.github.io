var escena=new THREE.Scene();
var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
var forma=new THREE.BoxGeometry(1,1,1);
var material =new THREE.MeshNormalMaterial();
var cubo=new THREE.Mesh(forma, material);

cubo.rotateX(-Math.PI/4);
cubo.rotateY(-Math.PI/4);

escena.add(cubo);

var renderizador1=new THREE.WebGLRenderer();
renderizador1.setSize(window.innerHeight*1,window.innerGeight*1);

document.body.appendChild(renderizador1.domElement);
var forma1=new THREE.SphereGeometry(1,1,1);
var material1=new THREE.MeshNormalMaterial();
var esfera=new THREE.Mesh(forma1, material1);

esfera.rotateX(-Math.PI/4);
esfera.rotateY(-Math.PI/4);
escena.add(esfera);

renderizador.render(escena,camara);


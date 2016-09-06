var campoVision=45;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=1;
var planoleLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);

camara.position.z=15;

var cubo=new THREE.Mesh(new THREE.BoxGeometry(2,2,2),new THREE.MeshNormalMaterial());

cubo.rotateY(Math.PI/4);

var esfera1=new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshNormalMaterial() );
esfera1.position.x=5;

var esfera2=new THREE.Mesh(new THREE.SphereGeometry(1),new THREE.MeshNormalMaterial() );
esfera2.position.x=-5;
esfera2.position.z=-10;

var escena=new THREE.Scene();
escena.add(esfera1);
escena.add(esfera2);
escena.add(cubo);

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);


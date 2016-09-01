var baseForma= new THREE.CylinderGeometry(1,1,1);
var pilarForma= new THREE.CylinderGeometry(.5,.5,2);
pilarForma.translate(0,1,0);
var base2Forma=new THREE.CylinderGeometry(1,1,1);


var baseMalla=new THREE.Mesh(baseForma);
var pilarMalla=new THREE.Mesh(pilarForma);

var material=new THREE.MeshNormalMaterial();

var torreForma= new THREE.Geometry();
torreForma.merge(baseMalla.geometry, baseMalla.matrix);
torreForma.merge(pilarMalla.geometry, pilarMalla.matrix);

var torreMalla=new THREE.Mesh(torreForma,material);
var base2Malla=new THREE.Mesh(base2Forma,material);
base2Malla.position.y=3;


var escena=new THREE.Scene();
escena.add(torreMalla);
escena.add(base2Malla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);



var baseForma= new THREE.CylinderGeometry(1,1,1);
var pilarForma= new THREE.CylinderGeometry(.5,.5,2);
pilarForma.translate(0,1,0);

var baseMalla=new THREE.Mesh(baseForma);
var pilarMalla=new THREE.Mesh(pilarForma);

var torreForma= new THREE.Geometry();
torreForma.merge(baseMalla.geometry, baseMalla.matrix);
torreForma.merge(pilarMalla.geometry, pilarMalla.matrix);
var torreMalla=new THREE.Mesh(torreForma);

var material=new THREE.MeshNormalMaterial();
var base2= new THREE.CylinderGeoemtry(1,1,1);
base2.translate(0,3,0);
var base2Malla=new THREE.Mesh(base2Forma);


var torreForma1= new THREE.CylinGeometry(1,1,1);
torreForma1.merge(torreMalla.geometry, torreMalla.matrix);
torreForma1.merge(base2Malla.geometry, base2Malla.matrix);

var torreMalla1= new THREE.mesh(torreForma1, material);

var escena=new THREE.Scene();
escena.add(torreMalla1);

var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);


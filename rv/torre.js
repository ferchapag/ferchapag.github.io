var baseForma= new THREE.CylinderGeometry(1,1,1);
var pilarForma= new THREE.CylinderGeometry(.7,.7,2);
pilar.translate(0,1,0);
var pilar2Forma= new THREE.CylinderGeometry(1,1,1);
pilar2.translate(0,3,0);

var baseMalla=new THREE.Mesh(baseForma);
var pilarMalla=new THREE.Mesh(pilarForma);
var pilar2Malla=new THREE.Mesh(pilar2Forma);

var torreForma= new THREE.Geometry();
torreForma.merge(baseMalla.geometry, baseMalla.matrix);
torreForma.merge(pilarMalla.geometry, pilarMalla.matrix);
torreForma.merge(pilar2Malla.geometry, pilar2Malla.matrix);

var material=new THREE.MeshNormalMaterial();
var torreMalla=new THREE.Mesh(torreForma,material);

var escena=new THREE.Scene();
escena.add(torreMalla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);

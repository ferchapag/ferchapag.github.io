var baseForma= new THREE.CylinderGeometry(1,1,1);
var pilarForma= new THREE.CylinderGeometry(.5,.5,2);
pilarForma.translate(0,1,0);

var baseMalla=new THREE.Mesh(baseForma);
var pilarMalla=new THREE.Mesh(pilarForma);

var torreForma= new THREE.Geometry();
torreForma.merge(baseMalla.geometry, baseMalla.matrix);
torreForma.merge(pilarMalla.geometry, pilarMalla.matrix);
torreForma.merge(pilar2Malla.geometry, pilar2Malla.matrix);
var pilar2Forma= new Three.CylinderGeometry(1,1,1);
pilar2Forma.translate(0,3,0);


var torreMalla=new THREE.Mesh(torreForma);
var pilar2Malla=new THREE.Mesh(pilar2Forma);

var torre1Forma=new THREE.Geoemtry();
torre1Forma.merge(torreMalla.geometry, torreMalla.matrix);
torre1Forma.merge(pilar2Malla.geometry, pilar2Malla.matrix);

var material=new THREE.MeshNormalMaterial(); 
var torre1Malla=new THREE.Mesh(torre1Forma,material);


var escena=new THREE.Scene();
escena.add(torre1Malla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);


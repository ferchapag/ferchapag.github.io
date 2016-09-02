var base= new THREE.Shape();
base.moveTo(-7,-4);
base.lineTo(-7,0);
base.lineTo(7,0);
base.lineTo(7,-4);
base.lineTo(-7,-4);
var baseForma=new THREE.ExtrudeGeometry(base,{amount:10});
var puntos = [];
for(var i = 0; i<18; i++){
  puntos.push(new THREE.Vector2(Math.sin(i*0.2)*1+7,(i)));
}
var material=new THREE.MeshNormalMaterial();

var rev=new THREE.LatheGeometry(puntos);

var revMalla= new THREE.Mesh(rev, material);
var baseMalla=new THREE.Mesh(baseForma,material);

var pilarForma= new THREE.CylinderGeometry(10,10,5);
pilarForma.translate(0,18,0);
var base2Forma=new THREE.CylinderGeometry(4,4,5);
base2Forma.translate(0,23,0);
var pilarMalla=new THREE.Mesh(pilarForma,material);
var base2Malla=new THREE.Mesh(base2Forma,material);
var base3Forma=new THREE.CylinderGeometry(10,10,5);
base3Forma.translate(0,28,0);
var base3Malla=new THREE.Mesh(base3Forma,material);

var torreForma= new THREE.Geometry();
torreForma.merge(revMalla.geometry, revMalla.matrix);
torreForma.merge(baseMalla.geometry, baseMalla.matrix);
var torreMalla=new THREE.Mesh(torreForma,material);

var torreForma1= new THREE.Geometry();
torreForma1.merge(pilarMalla.geometry, pilarMalla.matrix);
torreForma1.merge(torreMalla.geometry, torreMalla.matrix);
var torre1Malla=new THREE.Mesh(torreForma1,material);

var torreForma2= new THREE.Geometry();
torreForma2.merge(torre1Malla.geometry, torre1Malla.matrix);
torreForma2.merge(base2Malla.geometry, base2Malla.matrix);
var torre2Malla=new THREE.Mesh(torreForma2,material);

var torreForma3= new THREE.Geometry();
torreForma3.merge(torre2Malla.geometry, torre1Malla.matrix);
torreForma3.merge(base3Malla.geometry, base3Malla.matrix);
var torre3Malla=new THREE.Mesh(torreForma2,material);


var escena=new THREE.Scene();
escena.add(torre3Malla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=100;


renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);



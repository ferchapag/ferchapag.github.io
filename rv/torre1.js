var base= new THREE.Shape();
base.moveTo(10,10);
base.lineTo(20,10);
base.lineTo(20,20);
base.lineTo(10,20);
base.lineTo(10,10);
var baseForma=new THREE.ExtrudeGeometry(base,{amount:10});
var puntos = [];
for(var i = 0; i<10; i++){
  puntos.push(new THREE.Vector2(Math.sin(i*0.2)*1+10,(i)*2));
}
var material=new THREE.MeshNormalMaterial();

var rev=new THREE.LatheGeometry(puntos);

var revMalla= new THREE.Mesh(rev, material);
var baseMalla=new THREE.Mesh(baseForma,material);

var pilarForma= new THREE.CylinderGeometry(.5,.5,2);
pilarForma.translate(0,10,0);
var base2Forma=new THREE.CylinderGeometry(1,1,1);
base2Forma.translate(0,-1,0);
var pilarMalla=new THREE.Mesh(pilarForma,material);
var base2Malla=new THREE.Mesh(base2Forma,material);

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


var escena=new THREE.Scene();
escena.add(torre2Malla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=100;


renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);



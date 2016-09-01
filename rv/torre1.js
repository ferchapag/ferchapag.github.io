var baseForma= new THREE.CylinderGeometry(1,1,1);
var pilarForma= new THREE.CylinderGeometry(.5,.5,2);
pilarForma.translate(0,1,0);

var baseMalla=new THREE.Mesh(baseForma);
var pilarMalla=new THREE.Mesh(pilarForma);

var torreForma= new THREE.Geometry();
torreForma.merge(baseMalla.geometry, baseMalla.matrix);
torreForma.merge(pilarMalla.geometry, pilarMalla.matrix);

var material=new THREE.MeshNormalMaterial();
var torreMalla=new THREE.Mesh(torreForma,material);

var puntos = [];
for(var i = 0; i<50; i++){
  puntos.push(new THREE.Vector2(
                  Math.sin(i*0.2)*15+50,
                  (i-5)*2));
}

var forma= new THREE.LatheGeometry(puntos);
forma.translate(0,3,0);
var material=new THREE.MeshNormalMaterial();

var malla= new THREE.Mesh(forma, material);
malla.rotateX(Math.PI/6);


var escena=new THREE.Scene();
escena.add(torreMalla);

var escena1=new THREE.Scene();
escena1.add(malla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=5;
camara.position.y=200;

renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);

renderizador1= new THREE.WebGLRenderer();
renderizador1.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador1.domElement);
renderizador1.render(escena1, camara);

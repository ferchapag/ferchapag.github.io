var puntos = [];
for(var i = 0; i<75; i++){
  puntos.push(new THREE.Vector2(Math.sin(i*0.2)*1+10,(i)*2));
}
var material=new THREE.MeshNormalMaterial();

var rev=new THREE.LatheGeometry(puntos);

var base= new THREE.Shape();
base.moveTo(10,75);
base.lineTo(20,75);
base.lineTo(20,20);
base.lineTo(10,20);
base.lineTo(10,75);
var baseForma=new THREE.ExtrudeGeometry(base,{amount:10});


var revMalla= new THREE.Mesh(rev, material);
var baseMalla=new THREE.Mesh(baseForma,material);

var torreForma= new THREE.Geometry();
torreForma.merge(revMalla.geometry, revMalla.matrix);
torreForma.merge(baseMalla.geometry, baseMalla.matrix);
var torreMalla=new THREE.Mesh(torreForma,material);



var escena=new THREE.Scene();
escena.add(torreForma);

var camara=new THREE.PerspectiveCamera();
camara.position.z=210;


renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);

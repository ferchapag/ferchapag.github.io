function Pieza(){
THREE.Object3D.call(this);
var piernaizq=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
var piernader=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
var cuerpo=new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
this.add(piernaizq,piernader,cuerpo);
this.piernaizq.position.z=-2;
this.piernaizq.position.y=-2.5;
this.piernader.position.z=2;
this.piernader.position.y=-2.5;
cuerpo.position.z=2.5;
}
var pieza
Pieza.prototype=new THREE.Object3D
function setup(){
pieza=new Pieza();
}

function loop(){
pieza.rotateY=.1;

}

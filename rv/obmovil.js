function Pieza(){
 
THREE.Object3D.call(this);
this.piernaizq=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
this.piernader=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
this.brazoizq=new THREE.Mesh(new THREE.BoxGeometry(1,2.5,1));
this.brazoder=new THREE.Mesh(new THREE.BoxGeometry(1,2.5,1));
var cuerpo=new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
this.add(this.piernaizq, this.piernader, this.brazoizq, this.brazoder, cuerpo);
this.piernaizq.position.set(0,-2.5,-2);
this.piernader.position.set(0,-2.5,2);
this.brazoizq.position.set(0,1.5,-3);
this.brazoder.position.set(0,1.5,3);
cuerpo.position.y=2.5;
}
var pieza
Pieza.prototype=new THREE.Object3D

function setup(){
 pieza=new Pieza();
 
  camara=new THREE.PerspectiveCamera();
  camara.position.z=20;
  
  var lienzo=document.getElementById("objeto movil");
  renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias:true});
  renderizador.setSize(600,600);
  
  escena=new THREE.Scene();
  escena.add(pieza);
}

loop=function(){
 for (i = 0; i < 1.57; i=i+.01) {
 requestAnimationFrame(loop);
 renderizador.render(escena,camara);
 pieza.rotateY(.01);
 pieza.piernaizq.rotateZ(i);
 pieza.piernader.rotateZ(-i);
 pieza.brazoizq.rotateZ(-i);
 pieza.brazoder.rotateZ(i);
 }
 
}

setup();
loop();

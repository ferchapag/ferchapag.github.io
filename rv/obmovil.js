function Pieza(){
 
THREE.Object3D.call(this);
this.piernaizq=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
this.piernader=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
var cuerpo=new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
this.add(this.piernaizq, this.piernader, cuerpo);
this.piernaizq.position.z=-2;
this.piernaizq.position.y=-2.5;
this.piernader.position.z=2;
this.piernader.position.y=-2.5;
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

 requestAnimationFrame(loop);
 renderizador.render(escena,camara);
 pieza.rotateY(.01);
 pieza.rotateZ(.01);
}

setup();
loop();
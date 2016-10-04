function Arbol(){
  var troncoForma=new THREE.CylinderGeometry(.25,.5,1);
  var esferaForma=new THREE.SphereGeometry(.65);
  esferaForma.translate(0,1,0);
  
  var troncoMalla=new THREE.Mesh(troncoForma);
  var esferaMalla=new THREE.Mesh(esferaForma);
 
  var arbolForma= new THREE.Geometry();
  arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
  arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);
  
  var material=new THREE.MeshNormalMaterial();
  this.malla=new THREE.Mesh(arbolForma, material);
 }
 
var CONSTRUCTOR=new Object();

CONSTRUCTOR.setup=function(){
  var arbol1=new Arbol();
  var arbol2=new Arbol();
  
  arbol1.malla.position.x=-5;
  arbol2.malla.position.x=5;
  
  CONSTRUCTOR.camara=new THREE.PerspectiveCamera();
  CONSTRUCTOR.camara.position.z=20;
  
  var lienzo=document.getElementById("ejemplo-csontructor");
  CONSTRUCTOR.renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias:true});
  CONSTRUCTOR.renderizador.setSize(600,600);
  
  CONSTRUCTOR.escena=new THREE.Scene();
  CONSTRUCTOR.escena.add(arbol1.malla);
  CONSTRUCTOR.escena.add(arbol2.malla);
}

CONSTRUCTOR.loop=function(){
  requestAnimationFrame(CONSTRUCTOR.loop);
  CONSTRUCTOR.renderizador.render(CONSTRUCTOR.escena,CONSTRUCTOR.camara);
}
CONSTRUCTOR.setup();
CONSTRUCTOR.loop();

  

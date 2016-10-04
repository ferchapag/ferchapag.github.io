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
 
setup=function(){
  var arbol1=new Arbol();
  var arbol2=new Arbol();
  
  arbol1.malla.position.x=-5;
  arbol2.malla.position.x=5;
  
  camara=new THREE.PerspectiveCamera();
  camara.position.z=20;
  
  var lienzo=document.getElementById("ejemplo-constructor");
  renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias:true});
  renderizador.setSize(600,600);
  
  escena=new THREE.Scene();
  escena.add(arbol1.malla);
  escena.add(arbol2.malla);
}

loop=function(){
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
}
setup();
loop();

  

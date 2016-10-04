ArbolGeometry=function(){
  THREE.Geometry.call(this);

  var troncoForma=new THREE.CylinderGeometry(.25,.5,1);
  var esferaForma=new THREE.SphereGeometry(.65);

  var troncoMalla=new THREE.Mesh(troncoForma);
  var esferaMalla=new THREE.Mesh(esferaForma);

  this.merge(troncoMalla.geometry, troncoMalla.matrix);
  this.merge(esferaMalla.geometry, esferaMalla.matrix);
}

ArbolGeometry.prototype=new THREE.Geometry();

setup=function(){
  var arbol1=new THREE.Mesh(new ArbolGeometry(),new THREE.MeshNormalMaterial());
  var arbol2=new THREE.Mesh(new ArbolGeometry(),new THREE.MeshNormalMaterial());

  arbol1.position.x=5;
  arbol2.position.x=-5;

  camara=new THREE.PerspectiveCamera();
  camara.position.z=20;
  
  var lienzo=document.getElementById("ejemplo-herencia");
  renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias:true});
  renderizador.setSize(600,600);
  
  escena=new THREE.Scene();
  escena.add(arbol1.malla);
  escena.add(arbol2.malla)
}

loop=function(){
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
}
setup();
loop();

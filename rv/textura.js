var TEXTURA =new Object();

TEXTURA.retrollamada=function(textura){
   var material=new THREE.MeshBasicMaterial({map: textura});
   TEXTURA.malla=new THREE.Mesh(new THREE.SphereGeometry(1), material);
   TEXTURA.esscena.add(TEXTURA.malla);
  }
  
  TEXTURA.escena=new THREE.Scene();
  var cargador=new TREE.TextureLoader();
  
  cargador.load("earth.jpg", TEXTURA.retrollamada);
  TEXTURA.camara=new THREE.PerspectiveCamera

var TEXTURA =new Object();

TEXTURA.retrollamada=function(textura){
   var material=new THREE.MeshBasicMaterial({map: textura});
   TEXTURA.malla=new THREE.Mesh(new THREE.SphereGeometry(1), material);
   TEXTURA.esscena.add()

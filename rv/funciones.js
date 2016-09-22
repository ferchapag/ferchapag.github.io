function init(p) {

material = new THREE.MeshNormalMaterial();
malla = new THREE.Mesh( new THREE.BoxGeometry(p,p,p), material);

escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
camara.position.z = 3*p;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize(700,700);
document.body.appendChild(renderizador.domElement);

}
 var loop = function(p) {
   requestAnimationFrame(loop);
   renderizador.render(escena,camara);
   malla.rotateY(.01);
   malla.position.x=malla.position.x+.01;
   if(malla.position.x<15){
    malla.position.x=malla.position.x-.01;
   }
 }
 var escena, camara, renderizador,malla,material;
 init(1);
 loop();

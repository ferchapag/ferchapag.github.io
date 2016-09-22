function init(p) {

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( new THREE.BoxGeometry(p,p,p), material);

escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
camara.position.z = 3*p;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize(100,700);
document.body.appendChild(renderizador.domElement);
}
var main=function(p){
  p(1);
  renderizador.render(escena, camara);
  
}
var escena,camara, renderizador;
main(inti);

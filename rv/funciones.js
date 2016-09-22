function init(p) {

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( new THREE.BoxGeometry(p,p,p), material);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 3*p;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

}

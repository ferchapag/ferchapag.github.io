var campoVision=45;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=1;
var planoleLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto, planoCercano, planoLejano);

camara.position.z=15;

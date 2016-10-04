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

renderizador=new THREE.WebGLRenderer();
renderizador.

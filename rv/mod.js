var ventana=new Object();

ventana.listener=function(){
  ventana.camara.aspect=window.innerWidth/window.innerHeight;
  ventana.camara.updateProjectionMatrix();
  ventana.renderizador.setSize(window.innerWidth, window.innerHeight);
 }
 
ventana.setup=function(){
  var tipo_evento='resize';
  var capturarp=false;
  window.addEventListener(tipo_evento,ventana.listener,capturarp);
  ventana.escena=new THREE.Scene();
  ventana.camara=new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight*0.1,1000);
  ventana.camara.position.z=5;
  
  var lienzo=document.getElementById("Ejemplo-Ventana");
  ventana.renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias:true});
  ventana.renderizador.setSize(window.innerWidth, window.innerHeight);
  ventana.malla=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshNormalMaterial());
  ventana.escena.add(ventana.malla)
 }
 
 ventana.loop=function(){
  requestAnimationFrame(ventana.loop);
  ventana.malla.rotateX(0.01);
  ventana.malla.rotateY(0.01);
  ventana.renderizador.render(ventana.escena, ventana.camara);
 }
 
 ventana.setup();
 ventana.loop();
 

 
 

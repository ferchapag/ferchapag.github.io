var TEXTURA =new Object();

TEXTURA.retrollamada=function(textura){
   var material=new THREE.MeshBasicMaterial({map: textura});
   TEXTURA.malla=new THREE.Mesh(new THREE.SphereGeometry(1), material);
   TEXTURA.esscena.add(TEXTURA.malla);
  }
  
TEXTURA.setup=function(){
   TEXTURA=new THREE.Scene();
   var cargador=new THREE.TextureLoader();
   cargador.load("earth.jpg", TEXTURA.retrollamada);
   TEXTURA.camara=new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,
                                               0.1,
                                               1000);
   TEXTURA.camara.position.z=5;
    
   var lienzo=document.getElemenById("ejemplo-textura");
   TEXTURA.renderizador=new THREE.WebGLRenderer({canvas: lienzo,
                                                 antialias: true});
   TEXTURA.renderizador.setSize(600,600);
}
    
TEXTURA.loop=function(){
   requestAnimationFrame(TEXTURA.loop);
   if(TEXTURA.malla!==undefined){
     TEXTURA.malla.rotateX(.01);
     TEXTURA.malla.rotateY(.01);
   }
   TEXTURA.renderizador.render(TEXTURA.escena, TEXTURA.camara);
   
}
TEXTURA.setup();
TEXTURA.loop();
          
          
      

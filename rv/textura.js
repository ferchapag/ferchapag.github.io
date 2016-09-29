var TEXTURA =new Object();


TEXTURA.retrollamada=function(textura){
   var material=new THREE.MeshBasicMaterial({map: textura});
   //Torre
var base= new THREE.Shape();
base.moveTo(-7,-4);
base.lineTo(-7,4);
base.lineTo(7,4);
base.lineTo(7,-4);
base.lineTo(-7,-4);
var baseForma=new THREE.ExtrudeGeometry(base,{amount:10});
var puntos = [];
for(var i = 0; i<18; i++){
  puntos.push(new THREE.Vector2(Math.sin(i*0.2)*1+7,(i)));
}

var rev=new THREE.LatheGeometry(puntos);

var revMalla= new THREE.Mesh(rev, material);
var baseMalla=new THREE.Mesh(baseForma,material);

var pilarForma= new THREE.CylinderGeometry(10,10,5);
pilarForma.translate(0,18,0);
var base2Forma=new THREE.CylinderGeometry(4,4,5);
base2Forma.translate(0,23,0);
var base3Forma=new THREE.CylinderGeometry(10,10,5);
base3Forma.translate(0,28,0);

var pilarMalla=new THREE.Mesh(pilarForma,material);
var base2Malla=new THREE.Mesh(base2Forma,material);
var base3Malla=new THREE.Mesh(base3Forma,material);




var torreForma= new THREE.Geometry();
torreForma.merge(revMalla.geometry, revMalla.matrix);
torreForma.merge(baseMalla.geometry, baseMalla.matrix);
//var torreMalla=new THREE.Mesh(torreForma,material);
   
   
   TEXTURA.malla=new THREE.Mesh(new THREE.torreForma, material);
   TEXTURA.escena.add(TEXTURA.malla);
  }
  
TEXTURA.setup=function(){
   TEXTURA.escena=new THREE.Scene();
   var cargador=new THREE.TextureLoader();
   cargador.load("earth.jpg",
                 TEXTURA.retrollamada);
   TEXTURA.camara=new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,
                                               0.1,
                                               1000);
   TEXTURA.camara.position.z=5;
    
   var lienzo=document.getElementById("ejemplo-textura");
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
          
          
      

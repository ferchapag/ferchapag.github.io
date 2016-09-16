
var Gris = new THREE.MeshBasicMaterial({color: 0xB0A9A7});
var Blanco = new THREE.MeshBasicMaterial({color: 0xffffff});
var Marco = new THREE.MeshBasicMaterial({color: 0xB59402});

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

var tablero = [];
for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    var mat = Gris;
    if (isEven(i)) {
      if (isOdd(j)) {
        mat = Blanco;
      } 
    } else {
      if (isEven(j)) {
        mat = Blanco;
      } 
    }
    var geometry = new THREE.BoxGeometry( 10, 10, 10 );
    var cubo = new THREE.Mesh(geometry,mat);
    cubo.position.x = j*10;
    cubo.position.y = i*10; 
    tablero.push(cubo);
  }
}
// Juntar cuadros
for (i = 1; i < 64; i++) {
tablero[0].add(tablero[i]);
}
//Torre
var base= new THREE.Shape();
base.moveTo(-7,-4);
base.lineTo(-7,0);
base.lineTo(7,0);
base.lineTo(7,-4);
base.lineTo(-7,-4);
var baseForma=new THREE.ExtrudeGeometry(base,{amount:10});
var puntos = [];
for(var i = 0; i<18; i++){
  puntos.push(new THREE.Vector2(Math.sin(i*0.2)*1+7,(i)));
}
var material=new THREE.MeshBasicMaterial( {color: 0x6e6e6e});

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
var torreMalla=new THREE.Mesh(torreForma,material);

var torreForma1= new THREE.Geometry();
torreForma1.merge(pilarMalla.geometry, pilarMalla.matrix);
torreForma1.merge(torreMalla.geometry, torreMalla.matrix);
var torre1Malla=new THREE.Mesh(torreForma1,material);

var torreForma2= new THREE.Geometry();
torreForma2.merge(torre1Malla.geometry, torre1Malla.matrix);
torreForma2.merge(base2Malla.geometry, base2Malla.matrix);
var torre2Malla=new THREE.Mesh(torreForma2,material);

var torreForma3= new THREE.Geometry();
torreForma3.merge(torre2Malla.geometry, torre1Malla.matrix);
torreForma3.merge(base3Malla.geometry, base3Malla.matrix);

var torre3Malla=new THREE.Mesh(torreForma3,material);
torre3Malla.rotateX(1.57);
torre3Malla.scale.set(.6,.5,.5);
torre3Malla.position.set(0,0,12);
var torre4Malla=new THREE.Mesh(torreForma3,Gris);
torre4Malla.position.set(65,0,12);
torre4Malla.rotateX(1.57);
torre4Malla.scale.set(.3,.5,.5);
var torre5Malla=new THREE.Mesh(torreForma3,Blanco);
torre5Malla.position.set(0,80,12);
torre5Malla.rotateX(1.57);
torre5Malla.scale.set(.5,.5,.5);
var torre6Malla=new THREE.Mesh(torreForma3,Blanco);
torre6Malla.position.set(65,80,12);
torre6Malla.rotateX(1.57);
torre6Malla.scale.set(.5,.5,.5);



//camara
var camara = new THREE.PerspectiveCamera();
camara.position.set(40,-130,100);
camara.lookAt(new THREE.Vector3(40,40,15))

var malla=new THREE.Mesh(new THREE.BoxGeometry(5,90,10), Marco);
malla.position.set(-7.5,35,0);
var malla2=new THREE.Mesh(new THREE.BoxGeometry(5,90,10), Marco);
malla2.position.set(77.5,35,0);
var malla3=new THREE.Mesh(new THREE.BoxGeometry(80,5,10), Marco);
malla3.position.set(35,77.5,0);
var malla4=new THREE.Mesh(new THREE.BoxGeometry(80,5,10), Marco);
malla4.position.set(35,-7.5,0);

var escena = new THREE.Scene();
for (i = 0; i < 64; i++) {
escena.add(tablero[i]);
escena.add(torre3Malla);
escena.add(torre4Malla);
escena.add(torre5Malla);
escena.add(torre6Malla);
escena.add(malla);
escena.add(malla2);
escena.add(malla3);
escena.add(malla4);
}



var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);


function Agent(x=0, y=0){
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
 }

Agent.prototype=new THREE.Object3D();
Agent.prototype.sense=function(environment) {};
Agent.prototype.plan=function(environment) {};
Agent.prototype.act= function(environment) {};

function Environment(){
  THREE.Scene.call(this);
}
Environment.prototype=new THREE.Scene();
Environment.prototype.sense=function(){
  for (var i=0; i < this.children.length; i++){
    if(this.children[i].sense !==undefined)
      this.children[i].sense(this);
  }
}
Environment.prototype.plan=function(){
  for (var i=0; i < this.children.length; i++){
    if(this.children[i].plan !==undefined)
      this.children[i].plan(this);
  }
}
Environment.prototype.act=function(){
  for (var i=0; i < this.children.length; i++){
    if(this.children[i].act !==undefined)
      this.children[i].act(this);
  }
}

function Wall(size,x,y){
  THREE.Mesh.call(this,
                  new THREE.BoxGeometry(size,size,size),
                  new THREE.MeshNormalMaterial());
  this.size=size;
  this.position.x=x;
  this.position.y=y;
}
Wall.prototype=new THREE.Mesh();




function Sensor(position, direction){
  THREE.Raycaster.call(this, position, direction);
  this.colision=false;
}
Sensor.prototype=new THREE.Raycaster();

function Robot(size,x,y){
  Agent.call(this,x,y);
  
  this.sensor=new Sensor();
  this.actuator=new THREE.Mesh(new THREE.BoxGeometry(size,size,size),
                              new THREE.MeshBasicMaterial({color:'#aa0000'}));
  this.actuator.commands=[];
  this.add(this.actuator);
}
Robot.prototype=new Agent();

Robot.prototype.sense=function(environment){
  this.sensor.set(this.position,
                 new THREE.Vector3(Math.cos(this.rotation.z),
                                  Math.sin(this.rotation.z),
                                  0));
  var obstaculo=this.sensor.intersectObjects(environment.children,
                                            true);
  
  if((obstaculo.length>0 &&
     (obstaculo[0].distance<= .5)))
    this.sensor.collision=true;
  else
    this.sensor.collision=false;
}

Robot.prototype.plan=function(environment){
  this.actuator.commands=[];
    
  if(this.sensor.collision==true)
    this.actuator.commands.push('rotateCCW');
  else
    this.actuator.commands.push('goStraight');
}

Robot.prototype.act=function(environment){
  var command=this.actuator.commands.pop();
   
  if(command===undefined)
    console.log('Undefined command');
  else if (command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');
}

Robot.prototype.operations={};

Robot.prototype.operations.goStraight=function(robot, distance){
  if(distance===undefined)
    distance=.05;
  robot.position.x += distance*Math.cos(robot.rotation.z);
  robot.position.y += distance*Math.sin(robot.rotation.z);
}

Robot.prototype.operations.rotateCW=function(robot, angle){
  if(angle===undefined)
    angle=-Math.PI/2;
  robot.rotation.z+=angle;
}

Robot.prototype.operations.rotateCCW=function(robot, angle){
  if(angle===undefined)
    angle=Math.PI/2;
  robot.rotation.z+=angle;
}

Environment.prototype.setMap = function(map){
  var _offset= Math.floor(map.length/2);
  
  for(var i=0; i<map.length; i++){
    for(var j=0; j<map.length; j++){
      if (map[i][j]==="x")
        this.add(new Wall(1, j- _offset, - (i- _offset)));
      else if (map[i][j]==="r")
        this.add(new Robot(.5, j- _offset, - (i- _offset)));
}}
}

function setup(){
  var mapa=new Array();
  mapa[0]= "xxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[1]= "xr           r          x";
  mapa[2]= "x                       x";
  mapa[3]= "x                       x";
  mapa[4]= "x                       x";
  mapa[5]= "x                      rx";
  mapa[6]= "xxxxxxxxxx      xxxxxxxxx";
  mapa[7]= "xr           r          x";
  mapa[8]= "x                       x";
  mapa[9]= "x                       x";
  mapa[10]="x                       x";
  mapa[11]="x                      rx";
  mapa[12]="xxxx  xxxxxxxxxxxxxxxxxxx";
  mapa[13]="xr             r       rx";
  mapa[14]="x                       x";
  mapa[15]="x     r               r x";
  mapa[16]="xxxxxxxxxxxxxxx      xxxx";
  mapa[17]="xr           r          x";
  mapa[18]="x                       x";
  mapa[19]="x                      rx";
  mapa[20]="xxx    xxxxxxxxxxxxxxxxxx";
  mapa[21]="xr           r          x";
  mapa[22]="x                      rx";
  mapa[23]="xr                      x";
  mapa[24]="xxxxxxxxxxxxxxxxxxxxxxxxx";
  
  environment=new Environment();
  environment.setMap(mapa);
  
  camera=new THREE.PerspectiveCamera();
  camera.position.z=30;
  
  var lienzo=document.getElementById("agentetab");
  renderer=new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  
  environment.add(camera);
}

var mat1 = false;
var mat2 = false;
var mat3 = false;

var fnBlack = function(textura) {
   Gris = new THREE.MeshBasicMaterial({map: textura});  
   mat1 = true;
}
var fnWhite = function(textura) {
   Blanco = new THREE.MeshBasicMaterial({map: textura});  
   mat2 = true;
}
var fnWood = function(textura) {
   Marco = new THREE.MeshBasicMaterial({map: textura});  
   mat3 = true;
}

var cargadorBlack=new THREE.TextureLoader();
cargadorBlack.load("mnegro.jpg",
              fnBlack);
var cargadorWhite=new THREE.TextureLoader();
cargadorWhite.load("mblanco.jpg",
              fnWhite);
var cargadorWood=new THREE.TextureLoader();
cargadorWood.load("madera.jpg",
              fnWood);

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

var poner=function(){
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
base.moveTo(-7,-2);
base.lineTo(-7,2);
base.lineTo(7,2);
base.lineTo(7,-2);
base.lineTo(-7,-2);
var baseForma=new THREE.ExtrudeGeometry(base,{amount:15});
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

var torre3Malla=new THREE.Mesh(torreForma3,Gris);
torre3Malla.scale.set(.4,.4,.4);
torre3Malla.rotateX(1.57);
torre3Malla.position.set(1,-1,10);
var torre4Malla=new THREE.Mesh(torreForma3,Gris);
torre4Malla.scale.set(.4,.4,.4);
torre4Malla.position.set(68.5,-4,12);
torre4Malla.rotateX(1.57);
var torre5Malla=new THREE.Mesh(torreForma3,Blanco);
torre5Malla.scale.set(.4,.4,.4);
torre5Malla.position.set(1,65,12);
torre5Malla.rotateX(1.57);
var torre6Malla=new THREE.Mesh(torreForma3,Blanco);
torre6Malla.scale.set(.4,.4,.4);
torre6Malla.position.set(68.5,63,12);
torre6Malla.rotateX(1.57);

//camara
camara = new THREE.PerspectiveCamera();
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

escena = new THREE.Scene();
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



renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderizador.domElement);
}
var didSetup = false;


var loop1 = function(){
   requestAnimationFrame(loop);
   if(mat1 && mat2 && mat3){
      if (didSetup == false) {
      poner();
      didSetup = true;
      }
   
   renderizador.render(escena, camara);
   }
}

function loop(){
  requestAnimationFrame(loop);
  environment.sense();
  environment.plan();
  environment.act();
  renderer.render(environment, camera);
}
var environment, camera, renderer;

loop1();
setup();
loop();

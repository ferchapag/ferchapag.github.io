function Wall(size,x,y){
  THREE.Mesh.call(this,
                  new THREE.BoxGeometry(size,size,size),
                  new THREE.MeshNormalMaterial());
  this.size=size;
  this.position.x=x;
  this.position.y=y;
}
Wall.prototype=new THREE.Mesh();

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


function Sensor(position, direction){
  THREE.Raycaster.call(this, position, direction);
  this.colision=false;
}
Sensor.prototype=new THREE.Raycaster();

function Robot(size,x,y){
  Agent.call(this,x,y);
  
  this.sensor=new Sensor();
  this.actuator=new THREE.Mesh(new THREE.BoxGeometry(size,size,size),
                              new THREE.BasicMaterial({color:'#aa0000'}));
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
    this.sensor.colision=true;
  else
    this.sensor.colision=false;
};

Robot.prototype.plan=function(environment){
  this.actuator.commands=[];
    
  if(this.sensor.collision==true)
    this.actuator.commands.push('rotateCCW');
  else
    this.actuator.commands.push('goStraight');
};

Robot.prototype.act=function(environment){
  var command=this.actuator.commands.pop();
   
  if(command===undefined)
    console.log('Undefined command');
  else if (command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');
};

Environment.prototype.setMap=function(map){
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
  mapa[12]="xxxxxxxxxx    xxxxxxxxxxx";
  mapa[13]="xr             r       rx";
  mapa[14]="x                       x";
  mapa[15]="x     r               r x";
  mapa[16]="xxxxxxxxxxx      xxxxxxxx";
  mapa[17]="xr           r          x";
  mapa[18]="x                       x";
  mapa[19]="x                      rx";
  mapa[20]="xxxxxxxxxx  xxxxxxxxxxxxx";
  mapa[21]="xr           r          x";
  mapa[22]="x                      rx";
  mapa[23]="xr                      x";
  mapa[24]="xxxxxxxxxxxxxxxxxxxxxxxxx";
  
  environment=new Environment();
  environment.setMap(mapa);
  
  camera=new THREE.PerspectiveCamera();
  camera.position.z=30;
  
  var lienzo=document.getElementById("agentemapa");
  renderer=new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  
  environment.add(camara);
}

function loop(){
  requestAnimationFrame(loop);
  environment.sense();
  environment.plan();
  environment.act();
  renderer.render(entorno, camara);
}
var environment, camera, renderer;

setup();
loop();

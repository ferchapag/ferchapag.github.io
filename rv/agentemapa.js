function Wall(size,x,y){
  THREE.Mesh.call(this,
                  new THREE.BoxGeometry(size,size,size),
                  new THREE.MeshNormalMaterial());
function Agent(x=0, y=0){
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
 }
 Agent.prototype=new THREE.Object3D();
Agent.prototype.sense=function(evironment) {};
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
        
function Pared(size,x=0,y=0){
  THREE.Object3D.call(this,x,y);
  this.add(new THREE.Mesh(new THREE.BoxGeometry(size,size,size),
                         new THREE.MeshNormalMaterial()));
  this.size=size;
  this.position.x=x;
  this.position.y=y;  
}

Pared.prototype=new THREE.Object3D();

function setup(){
  entorno=new Environment();
  camara =new THREE.PerspectiveCamera();
  camara.position.z=30;
  
  entorno.add(new Pared(1,7,0));
  entorno.add(new Pared(1,-7,0));
  entorno.add(new Pared(1,7,1));
  entorno.add(new Pared(1,-7,1));
  entorno.add(new Pared(1,7,-1));
  entorno.add(new Pared(1,-7,-1));
  entorno.add(new Pelota(0.5));
  entorno.add(camara);

  var lienzo=document.getElementById("agente");
  
  renderer=new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
}

function loop(){
  requestAnimationFrame(loop);
  
  entorno.sense();
  entorno.plan();
  entorno.act();
  renderer.render(entorno, camara);
}

setup();
loop();

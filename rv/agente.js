function Agent(x=0, y=0){
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
 }
 
Agent.prototype=new THREE.Object3D();
 
Agent.prototype.plan=funciton(environment){};
Agent.prototype.sense=function(evironment){};
Agent.prototype.act= function(environment){};
 
 

function Wall(size,x,y){
  THREE.Mesh.call(this,
                  new THREE.BoxGeometry(size,size,size),
                  new THREE.MeshNormalMaterial());
            

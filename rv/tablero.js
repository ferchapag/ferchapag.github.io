var tablero = [];
for(var i = 0; i<=8; i++){
  for(var j=0;j<=8;j++){
  var cubo = new THREE.BoxGeometry( 10, 10, 10);
  var blanco= new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
  var negro= new THREE.MeshBasicMaterial( {color: 0x6E6E6E} );
  var cube = new THREE.Mesh( geometry, material );
  }
}

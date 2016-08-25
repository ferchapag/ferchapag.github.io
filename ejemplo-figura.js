var figura= new THREE.Shape();

figura.moveTo(10,10);
figura.lineTo(10,40);
figura.lineTo(40,10);
figura.lineTo(10,10);

var forma=new THREE.ShapeGeometry(figura);
var malla=new THREE.Mesh(forma);


var forma= new THREE.SphereGeometry(1);
var material= new THREE.MeshLambertMaterial({color: '#00cc00'})
var mala= new THREE.Mesh(forma, material)

var escena=new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z=5;

var lienzo= document.getElementById("lambertMaterial");
var renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias:true});

renderizador.SetSize(600,600);
renderizador.render(escena, camara);

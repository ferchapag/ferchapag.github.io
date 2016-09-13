var iluminacion=new THREE.PointLight(0xFFFFFF);
iluminacion.position.set(0,20,0);

var forma= new THREE.SphereGeometry(1);
var material= new THREE.MeshLambertMaterial({color: '#00cc00'})
var malla= new THREE.Mesh(forma, material)
malla.position.y=2;

var base=new THREE.Mesh(new THREE.BoxGeometry(5,.1,5), new THREE.MeshLambertMaterial({color:0xFFFFFF}));

var escena=new THREE.Scene();
escena.add(malla);
escena.add(iluminacion);
escena.add(base);

var camara = new THREE.PerspectiveCamera();
camara.position.set(0,5,15);

var lienzo= document.getElementById("luzsinSombras");
var renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias:true});

renderizador.setSize(600,600);
renderizador.render(escena, camara);

var container;
var camera, scene, renderer, group, particle;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
    container = document.createElement('div');
	document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
	camera.position.z = 1000;

    scene = new THREE.Scene();

    var PI2 = Math.PI * 2;
	var program = function ( context ) {
		context.beginPath();
		context.arc( 0, 0, 0.05, 0, PI2, true );
		context.fill();
	};

	group = new THREE.Group();
    group.position.x = window.innerWidth;
    group.position.y = window.innerHeight;
	scene.add(group);
    //(Math.random() >= 0.5 ? 0x644124 : 0x325c6f + Math.random() * 100)
	for ( var i = 0; i < 4000; i++ ) {
		var material = new THREE.SpriteCanvasMaterial( {
			color: 0xEEEEEE,
			program: program
		} );
		particle = new THREE.Sprite(material);
		particle.position.x = Math.random() * 16000 - 8000;
		particle.position.y = Math.random() * 16000 - 8000;
		particle.position.z = -500 - (Math.random() * 500);
		particle.scale.x = particle.scale.y = Math.random() * 30 + 10;
		group.add(particle);
	}

    renderer = new THREE.CanvasRenderer({ alpha: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);
	window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	camera.lookAt( scene.position );
	group.rotation.z -= 0.0007;
	renderer.render( scene, camera );
}

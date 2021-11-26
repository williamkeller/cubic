const THREE = require('three')


document.onLoad = appStartup()


function appStartup() {

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,
    0.6, 1200)

  const renderer = new THREE.WebGL1Renderer({ antialias: true })

  renderer.setClearColor("#000000")
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)

  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial( { color: "#AA0000" } )
  const cube = new THREE.Mesh(geometry, material)

  scene.add(cube)
  camera.position.z = 5

  renderer.render(scene, camera)
}

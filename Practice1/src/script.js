import './style.css'
import * as THREE from 'three'


//Cursor
const cursor = {
    x: 0, 
    y: 0
}
window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX
    cursor.y = event.clientY
    console.log(event.clientX, event.clientY)
})

//Sizes
const sizes = {
    width: 800,
    height: 600
}

//Canvas
const canvas = document.querySelector('.webgl')

//Scene
const scene = new THREE.Scene()

//Object (Shape, Material = Mesh)
const cube = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
const material = new THREE.MeshBasicMaterial({ color: 0x00ffaf })
const mesh = new THREE.Mesh(cube, material)
scene.add(mesh)

//Camera
const camera1 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera1.position.z = 5
scene.add(camera1)

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

//Clock
const clock = new THREE.Clock()

//Animation

const tick = () => 
{
    const elapsedTime = clock.getElapsedTime()

    mesh.position.x = (cursor.x / 100) - 4
    mesh.position.y = 4 - (cursor.y / 100)

    renderer.render(scene, camera1)
    window.requestAnimationFrame(tick)
}

tick()

import * as THREE from 'three'
import { AnaglyphEffect } from 'three/examples/jsm/effects/AnaglyphEffect'

import './index.scss'
import { skybox, autoResize, renderLoop } from './utils'

const container = document.createElement('div')
document.body.appendChild(container)

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 100)
camera.position.z = 3
camera.focalLength = 3
const textureCube = skybox('https://threejs.org/examples/textures/cube/pisa/')
const scene = new THREE.Scene()
scene.background = textureCube

const geometry = new THREE.SphereBufferGeometry(0.1, 32, 16)
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: textureCube })

const spheres = []
for (let i = 0; i < 500; i++) {
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.x = Math.random() * 10 - 5
  mesh.position.y = Math.random() * 10 - 5
  mesh.position.z = Math.random() * 10 - 5
  mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1
  scene.add(mesh)
  spheres.push(mesh)
}

const renderer = new THREE.WebGLRenderer()
renderer.setPixelRatio(window.devicePixelRatio)
container.appendChild(renderer.domElement)
const effect = new AnaglyphEffect(renderer)
effect.setSize(window.innerWidth || 2, window.innerHeight || 2)

autoResize(camera, effect)

let mouseX = 0
let mouseY = 0
document.addEventListener('mousemove', event => {
  mouseX = (event.clientX - (window.innerWidth / 2)) / 100
  mouseY = (event.clientY - (window.innerHeight / 2)) / 100
}, false)

renderLoop(() => {
  const timer = 0.0001 * Date.now()
  camera.position.x += (mouseX - camera.position.x) * 0.05
  camera.position.y += (-mouseY - camera.position.y) * 0.05
  camera.lookAt(scene.position)
  for (let i = 0, il = spheres.length; i < il; i++) {
    const sphere = spheres[ i ]
    sphere.position.x = 5 * Math.cos(timer + i)
    sphere.position.y = 5 * Math.sin(timer + i * 1.1)
  }
  effect.render(scene, camera)
})

import * as THREE from 'three'

export const skybox = (path, format = '.png') => new THREE.CubeTextureLoader().load([
  path + 'px' + format, path + 'nx' + format,
  path + 'py' + format, path + 'ny' + format,
  path + 'pz' + format, path + 'nz' + format
])

export const autoResize = (camera, effect) => {
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    effect.setSize(window.innerWidth, window.innerHeight)
  }, false)
}

export const renderLoop = (f) => {
  window.requestAnimationFrame(() => renderLoop(f))
  f()
}

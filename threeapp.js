// Basic Three.js scene
const container = document.getElementById("three-container");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, 0.1, 100);
camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha:true });
renderer.setSize(innerWidth, innerHeight);
container.appendChild(renderer.domElement);

// Light
const light = new THREE.PointLight(0x99ccff, 1.2, 100);
light.position.set(2,2,5);
scene.add(light);

// Simple 3D Box
const geometry = new THREE.BoxGeometry(1.5,1.5,1.5);
const material = new THREE.MeshStandardMaterial({ color: 0x1a3cff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
animate();

// Adjust on resize
window.addEventListener("resize", () => {
  camera.aspect = innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

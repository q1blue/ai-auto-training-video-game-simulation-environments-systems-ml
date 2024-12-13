import { World } from './engine/physics/World';
import { RigidBody } from './engine/physics/RigidBody';
import { Vector3 } from './engine/math/Vector3';
import { Renderer } from './visualization/Renderer';
import * as THREE from 'three';

// Create physics world
const world = new World();

// Create visualization
const renderer = new Renderer(world);

// Create a test body
const body = new RigidBody(1);
body.setPosition(new Vector3(0, 2, 0));
world.addBody(body);

// Add visual representation
const geometry = new THREE.SphereGeometry(0.1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
renderer.addObject(1, geometry, material);

// Animation loop
let lastTime = 0;
function animate(currentTime: number) {
  const deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;

  // Update physics
  world.update(deltaTime);

  // Update visualization
  renderer.render();

  requestAnimationFrame(animate);
}

// Start animation loop
animate(0);
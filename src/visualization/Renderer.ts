import * as THREE from 'three';
import Stats from 'stats.js';
import { World } from '../engine/physics/World';

export class Renderer {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private stats: Stats;
  private objects: Map<number, THREE.Mesh>;

  constructor(private world: World) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.objects = new Map();
    this.stats = new Stats();

    this.init();
  }

  private init(): void {
    // Setup renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    // Setup camera
    this.camera.position.z = 5;

    // Setup stats
    document.body.appendChild(this.stats.dom);

    // Setup lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(ambientLight);
    this.scene.add(directionalLight);

    // Handle window resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  addObject(id: number, geometry: THREE.BufferGeometry, material: THREE.Material): void {
    const mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);
    this.objects.set(id, mesh);
  }

  render(): void {
    this.stats.begin();
    this.renderer.render(this.scene, this.camera);
    this.stats.end();
  }
}
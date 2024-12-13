import { Vector3 } from '../math/Vector3';

export class RigidBody {
  private position: Vector3;
  private velocity: Vector3;
  private acceleration: Vector3;
  private mass: number;
  private forces: Vector3;

  constructor(mass: number = 1) {
    this.position = new Vector3();
    this.velocity = new Vector3();
    this.acceleration = new Vector3();
    this.mass = mass;
    this.forces = new Vector3();
  }

  applyForce(force: Vector3): void {
    this.forces = this.forces.add(force);
  }

  update(deltaTime: number): void {
    // Calculate acceleration from forces (F = ma)
    this.acceleration = this.forces.multiply(1 / this.mass);
    
    // Update velocity (v = v0 + at)
    this.velocity = this.velocity.add(this.acceleration.multiply(deltaTime));
    
    // Update position (p = p0 + vt)
    this.position = this.position.add(this.velocity.multiply(deltaTime));
    
    // Reset forces for next frame
    this.forces = new Vector3();
  }

  getPosition(): Vector3 {
    return this.position;
  }

  setPosition(position: Vector3): void {
    this.position = position;
  }

  getVelocity(): Vector3 {
    return this.velocity;
  }

  setVelocity(velocity: Vector3): void {
    this.velocity = velocity;
  }
}
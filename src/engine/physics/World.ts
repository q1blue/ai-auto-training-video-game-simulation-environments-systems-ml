import { RigidBody } from './RigidBody';
import { Vector3 } from '../math/Vector3';

export class World {
  private bodies: RigidBody[] = [];
  private gravity: Vector3 = new Vector3(0, -9.81, 0);

  addBody(body: RigidBody): void {
    this.bodies.push(body);
  }

  update(deltaTime: number): void {
    for (const body of this.bodies) {
      // Apply gravity
      body.applyForce(this.gravity);
      
      // Update physics
      body.update(deltaTime);
    }
  }
}
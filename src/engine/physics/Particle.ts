import { Vector3 } from '../math/Vector3';
import { Constants } from './Constants';

export class Particle {
  private position: Vector3;
  private velocity: Vector3;
  private charge: number;
  private mass: number;
  private spin: number;

  constructor(
    mass: number = Constants.ELECTRON_MASS,
    charge: number = -1.60217663e-19, // electron charge
    spin: number = 0.5 // electron spin
  ) {
    this.position = new Vector3();
    this.velocity = new Vector3();
    this.mass = mass;
    this.charge = charge;
    this.spin = spin;
  }

  get deBroglieWavelength(): number {
    return Constants.PLANCK_CONSTANT / (this.mass * this.velocity.length());
  }

  get kineticEnergy(): number {
    const v = this.velocity.length();
    // Use relativistic formula if velocity is high
    if (v > Constants.SPEED_OF_LIGHT * 0.1) {
      const gamma = 1 / Math.sqrt(1 - (v * v) / (Constants.SPEED_OF_LIGHT * Constants.SPEED_OF_LIGHT));
      return this.mass * Constants.SPEED_OF_LIGHT * Constants.SPEED_OF_LIGHT * (gamma - 1);
    }
    // Use classical formula for low velocities
    return 0.5 * this.mass * v * v;
  }

  update(deltaTime: number, forces: Vector3): void {
    const acceleration = forces.multiply(1 / this.mass);
    this.velocity = this.velocity.add(acceleration.multiply(deltaTime));
    this.position = this.position.add(this.velocity.multiply(deltaTime));
  }

  getPosition(): Vector3 {
    return this.position;
  }

  getVelocity(): Vector3 {
    return this.velocity;
  }

  getCharge(): number {
    return this.charge;
  }

  getMass(): number {
    return this.mass;
  }

  getSpin(): number {
    return this.spin;
  }
}
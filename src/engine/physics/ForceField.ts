import { Vector3 } from '../math/Vector3';
import { Constants } from './Constants';

export class ForceField {
  private static calculateGravitationalForce(mass1: number, mass2: number, distance: number): number {
    return (Constants.GRAVITATIONAL_CONSTANT * mass1 * mass2) / (distance * distance);
  }

  static gravitationalField(position: Vector3, sourceMass: number, sourcePosition: Vector3): Vector3 {
    const direction = sourcePosition.subtract(position);
    const distance = direction.length();
    
    if (distance === 0) return new Vector3();
    
    const magnitude = ForceField.calculateGravitationalForce(1, sourceMass, distance);
    return direction.normalize().multiply(magnitude);
  }

  static electricField(position: Vector3, charge: number, sourcePosition: Vector3): Vector3 {
    const direction = position.subtract(sourcePosition);
    const distance = direction.length();
    
    if (distance === 0) return new Vector3();
    
    const magnitude = (8.99e9 * charge) / (distance * distance);
    return direction.normalize().multiply(magnitude);
  }

  static magneticField(position: Vector3, current: Vector3, sourcePosition: Vector3): Vector3 {
    const direction = position.subtract(sourcePosition);
    const distance = direction.length();
    
    if (distance === 0) return new Vector3();
    
    return current.cross(direction).multiply(1e-7 / (distance * distance));
  }
}
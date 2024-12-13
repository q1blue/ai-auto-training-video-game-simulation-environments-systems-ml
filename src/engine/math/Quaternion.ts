export class Quaternion {
  constructor(
    public w: number = 1,
    public x: number = 0,
    public y: number = 0,
    public z: number = 0
  ) {}

  multiply(q: Quaternion): Quaternion {
    return new Quaternion(
      this.w * q.w - this.x * q.x - this.y * q.y - this.z * q.z,
      this.w * q.x + this.x * q.w + this.y * q.z - this.z * q.y,
      this.w * q.y - this.x * q.z + this.y * q.w + this.z * q.x,
      this.w * q.z + this.x * q.y - this.y * q.x + this.z * q.w
    );
  }

  conjugate(): Quaternion {
    return new Quaternion(this.w, -this.x, -this.y, -this.z);
  }

  normalize(): Quaternion {
    const magnitude = Math.sqrt(
      this.w * this.w + 
      this.x * this.x + 
      this.y * this.y + 
      this.z * this.z
    );
    
    if (magnitude === 0) return new Quaternion();
    
    return new Quaternion(
      this.w / magnitude,
      this.x / magnitude,
      this.y / magnitude,
      this.z / magnitude
    );
  }

  static fromEuler(x: number, y: number, z: number): Quaternion {
    const cx = Math.cos(x * 0.5);
    const cy = Math.cos(y * 0.5);
    const cz = Math.cos(z * 0.5);
    const sx = Math.sin(x * 0.5);
    const sy = Math.sin(y * 0.5);
    const sz = Math.sin(z * 0.5);

    return new Quaternion(
      cx * cy * cz + sx * sy * sz,
      sx * cy * cz - cx * sy * sz,
      cx * sy * cz + sx * cy * sz,
      cx * cy * sz - sx * sy * cz
    );
  }
}
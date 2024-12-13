export class ComplexNumber {
  constructor(
    public real: number = 0,
    public imaginary: number = 0
  ) {}

  add(c: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real + c.real,
      this.imaginary + c.imaginary
    );
  }

  multiply(c: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real * c.real - this.imaginary * c.imaginary,
      this.real * c.imaginary + this.imaginary * c.real
    );
  }

  magnitude(): number {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
  }

  phase(): number {
    return Math.atan2(this.imaginary, this.real);
  }

  conjugate(): ComplexNumber {
    return new ComplexNumber(this.real, -this.imaginary);
  }

  static fromPolar(r: number, theta: number): ComplexNumber {
    return new ComplexNumber(
      r * Math.cos(theta),
      r * Math.sin(theta)
    );
  }
}
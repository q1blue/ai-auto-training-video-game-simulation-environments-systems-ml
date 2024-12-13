export class Tensor {
  private data: number[];
  private shape: number[];

  constructor(shape: number[]) {
    this.shape = shape;
    const size = shape.reduce((a, b) => a * b, 1);
    this.data = new Array(size).fill(0);
  }

  private flattenIndex(indices: number[]): number {
    if (indices.length !== this.shape.length) {
      throw new Error('Invalid number of indices');
    }

    let flatIndex = 0;
    let multiplier = 1;

    for (let i = this.shape.length - 1; i >= 0; i--) {
      if (indices[i] >= this.shape[i]) {
        throw new Error('Index out of bounds');
      }
      flatIndex += indices[i] * multiplier;
      multiplier *= this.shape[i];
    }

    return flatIndex;
  }

  get(indices: number[]): number {
    return this.data[this.flattenIndex(indices)];
  }

  set(indices: number[], value: number): void {
    this.data[this.flattenIndex(indices)] = value;
  }

  static contract(tensor: Tensor, dim1: number, dim2: number): Tensor {
    if (dim1 === dim2) {
      throw new Error('Cannot contract same dimension');
    }

    // Implementation of tensor contraction
    // This is a simplified version - real implementation would be more complex
    const newShape = tensor.shape.filter((_, i) => i !== dim1 && i !== dim2);
    const result = new Tensor(newShape);

    // Basic contraction implementation
    // Note: This is a simplified version
    let sum = 0;
    for (let i = 0; i < tensor.shape[dim1]; i++) {
      sum += tensor.get([i, i]); // Simplified for 2D case
    }
    result.set([], sum);

    return result;
  }
}
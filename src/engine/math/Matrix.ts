export class Matrix {
  private data: number[][];

  constructor(rows: number, cols: number) {
    this.data = Array(rows).fill(0).map(() => Array(cols).fill(0));
  }

  static multiply(a: Matrix, b: Matrix): Matrix {
    if (a.getCols() !== b.getRows()) {
      throw new Error('Invalid matrix dimensions for multiplication');
    }

    const result = new Matrix(a.getRows(), b.getCols());
    for (let i = 0; i < a.getRows(); i++) {
      for (let j = 0; j < b.getCols(); j++) {
        let sum = 0;
        for (let k = 0; k < a.getCols(); k++) {
          sum += a.get(i, k) * b.get(k, j);
        }
        result.set(i, j, sum);
      }
    }
    return result;
  }

  get(row: number, col: number): number {
    return this.data[row][col];
  }

  set(row: number, col: number, value: number): void {
    this.data[row][col] = value;
  }

  getRows(): number {
    return this.data.length;
  }

  getCols(): number {
    return this.data[0].length;
  }
}
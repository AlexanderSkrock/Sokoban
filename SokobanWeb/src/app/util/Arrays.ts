export function createEmpty2DArray(width: number, height: number): any[][] {
  const result = [];
  for(let rowIndex = 0; rowIndex < height; rowIndex++) {
    result[rowIndex] = [];
    for(let columnIndex = 0; columnIndex < width; columnIndex++) {
      result[rowIndex][columnIndex] = undefined;
    }
  }
  return result;
}

export function create2DArrayWithDefaultValues<T>(width: number, height: number, supplier: (rowIndex, columnIndex) => T) : T[][] {
  const result = createEmpty2DArray(width, height);
  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    for (let columnIndex = 0; columnIndex < width; columnIndex++) {
      const value = supplier(rowIndex, columnIndex);
      result[rowIndex][columnIndex] = value;
    }
  }
  return result;
}

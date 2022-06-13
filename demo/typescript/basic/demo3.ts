// demo3:can have any number of properties--when the parameter is not certain
interface SquareConfig {
  color?: string;
  width: number;
  // [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return { color: '333', area: 133 }
}

let mySquare = createSquare({ width: 100, opacity: 0.5, height: 133 });

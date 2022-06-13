//声明合并
interface A {
  x: number;
  foo(bar: number): number;
}

interface A {
  y: number;
  foo(bar: string): number;  //函数重载
}

let a: A = {
  x: 1,
  y: 2,
  z: 3
};

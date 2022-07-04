class MyTestableClass {
  private name = "";
  private age = 0;
  private readonly score = 100;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   * Accepts a function that contains imperative, possibly effectful code.
   *
   * @param effect Imperative function that can return a cleanup function
   * @param deps If present, effect will only activate if the values in the list change.
   *
   * @version 16.8.0
   * @see https://reactjs.org/docs/hooks-reference.html#useeffect
   */
  getName() {
    return this.name;
  }

  /**
   * @deprecated 将于下个版本 1.0.2 被弃用
   */
  getAge() {
    return this.age;
  }

  /**
   * 设置分数
   */
  setScore(value: number) {
    this.score = value;
  }
}

export default MyTestableClass;

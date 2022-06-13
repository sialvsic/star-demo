import Stack from "./stack";

describe('栈测试', () => {
  const stack = new Stack();
  beforeEach(() => {
    stack.push(4);
    stack.push(5);
    stack.push(6);
  });

  afterEach(() => {
    stack.clear()
  })

  test('入栈', () => {
    stack.push(1)
    expect(stack.size()).toEqual(4);
  });

  test('出栈', () => {
    expect(stack.size()).toEqual(3);
    const value = stack.pop()
    expect(value).toEqual(6);
  });

  test('获取长度', () => {
    expect(stack.size()).toEqual(3);
    stack.push(1)
    expect(stack.size()).toEqual(4);
  });

  test('是否为空', () => {
    expect(stack.isEmpty()).toEqual(false);
    stack.clear()
    expect(stack.isEmpty()).toEqual(true);
  });

  test('获取栈顶元素', () => {
    expect(stack.peek()).toEqual(6);
    stack.push(7)
    expect(stack.peek()).toEqual(7);
  });

  test('清空栈', () => {
    expect(stack.size()).toEqual(3);
    stack.clear()
    expect(stack.size()).toEqual(0);
  });
})


import Queue from './queue'

describe('队列测试', () => {
  const queue = new Queue();

  beforeEach(() => {
    queue.push(4);
    queue.push(5);
    queue.push(6);
  });

  afterEach(() => {
    queue.clear()
  })

  test('入队', () => {
    queue.push(1)
    expect(queue.size()).toEqual(4);
  });

  test('出队', () => {
    expect(queue.size()).toEqual(3);
    const value = queue.pop()
    expect(value).toEqual(4);
  });

  test('获取队首元素', () => {
    expect(queue.front()).toEqual(4);
    queue.push(7)
    expect(queue.front()).toEqual(4);
  });

  test('获取队尾元素', () => {
    expect(queue.end()).toEqual(6);
    queue.push(7)
    expect(queue.end()).toEqual(7);
  });

  test('队列大小', () => {
    expect(queue.size()).toEqual(3);
    queue.push(7)
    expect(queue.size()).toEqual(4);
    queue.clear()
    expect(queue.size()).toEqual(0);
  });

  test('队列否为空', () => {
    expect(queue.isEmpty()).toEqual(false);
    queue.clear()
    expect(queue.isEmpty()).toEqual(true);
  });

  test('队列清空', () => {
    expect(queue.isEmpty()).toEqual(false);
    queue.clear()
    expect(queue.isEmpty()).toEqual(true);
  });

})

import List from './list'

describe('单链表测试', () => {
  const list = new List();

  beforeEach(() => {
    list.add(4)
    list.add(5)
    list.add(6)
  });

  afterEach(() => {
    list.clear()
  })

  test('添加', () => {
    expect(list.size()).toEqual(3);
    list.add(7)
    expect(list.size()).toEqual(4);
  });

  test('查找', () => {
    const pos1 = list.indexOf(4)
    expect(pos1).toEqual(0);

    const pos2 = list.indexOf(6);
    expect(pos2).toEqual(2);

    const pos3 = list.indexOf(7);
    expect(pos3).toEqual(-1);

    list.add(1)
    list.add(2)
    const pos4 = list.indexOf(1);
    const pos5 = list.indexOf(2);

    expect(pos4).toEqual(3);
    expect(pos5).toEqual(4);
  });

  describe('插入', () => {

    test('插入开始', () => {
      expect(list.size()).toEqual(3)
      list.insert(0, 3);

      expect(list.size()).toEqual(4);
      expect(list.getHead()).toEqual(3);
    })

    test('插入最后', () => {
      expect(list.size()).toEqual(3)
      list.insert(2, 3);

      expect(list.size()).toEqual(4);
    })

    test('插入中间', () => {
      expect(list.size()).toEqual(3)
      list.insert(1, 3);

      expect(list.size()).toEqual(4);
      const pos = list.indexOf(3);
      expect(pos).toEqual(1);

      const pos1 = list.indexOf(5);
      expect(pos1).toEqual(2);

      const pos2 = list.indexOf(7);
      expect(pos2).toEqual(-1);
    })

    test('插入不存在的位置', () => {
      expect(() => list.insert(4, 3)).toThrowError('position is not valid')
    })
  })

  describe('删除指定元素 返回下标', () => {
    test('删除头', () => {
      const pos = list.remove(4);
      expect(list.size()).toEqual(2);
      expect(pos).toEqual(0);
    })

    test('删除中间', () => {
      const pos = list.remove(5);
      expect(list.size()).toEqual(2);
      expect(pos).toEqual(1);
    })

    test('删除尾巴', () => {
      const pos = list.remove(6);
      expect(list.size()).toEqual(2);
      expect(pos).toEqual(2);
    })

    test('删除不存在', () => {
      const pos = list.remove(7);
      expect(list.size()).toEqual(3);
      expect(pos).toEqual(-1);
    })

    test('多次删除', () => {
      list.pop();
      expect(list.size()).toEqual(2);
      const pos = list.remove(6);
      expect(pos).toEqual(-1);

      const pos1 = list.remove(5);
      expect(pos1).toEqual(1);

      list.pop();
      const pos2 = list.remove(4);
      expect(pos2).toEqual(-1);
    })
  })

  describe('删除指定位置 返回该元素', () => {
    test('删除头', () => {
      const pos = list.removeAt(0);
      expect(list.size()).toEqual(2);
      expect(pos).toEqual(4);
    })

    test('删除中间', () => {
      const pos = list.removeAt(1);
      expect(list.size()).toEqual(2);
      expect(pos).toEqual(5);
    })

    test('删除尾巴', () => {
      const pos = list.removeAt(2);
      expect(list.size()).toEqual(2);
      expect(pos).toEqual(6);
    })

    test('删除不存在位置', () => {
      expect(list.size()).toEqual(3);
      expect(() => list.removeAt(3)).toThrowError('position is not valid')
    })

    test('多次删除', () => {
      list.pop();
      expect(list.size()).toEqual(2);
      const pos = list.removeAt(1);
      expect(pos).toEqual(5);

      const pos1 = list.removeAt(0);
      expect(pos1).toEqual(4);

      expect(() => list.removeAt(0)).toThrowError('position is not valid')
    })
  })

  test('获取头节点', () => {
    expect(list.getHead()).toEqual(4);
    list.clear();
    expect(list.getHead()).toEqual(null);
  })

  test('获取尾节点', () => {
    expect(list.getEnd()).toEqual(6);
    list.clear();
    expect(list.getEnd()).toEqual(null);
  })

  test('删除末尾节点', () => {
    const pop1 = list.pop();
    expect(pop1).toEqual(6);
    expect(list.size()).toEqual(2);
    // console.log(list);

    const pop2 = list.pop();
    expect(pop2).toEqual(5);
    expect(list.size()).toEqual(1);
    // console.log(list);

    const pop3 = list.pop();
    expect(pop3).toEqual(4);
    expect(list.size()).toEqual(0);
    // console.log(list);

    const pop4 = list.pop();
    expect(pop4).toEqual(undefined);
    expect(list.size()).toEqual(0);
  })

  test('长度', () => {
    expect(list.size()).toEqual(3);
    list.add(3)
    expect(list.size()).toEqual(4);
  })

  test('清空', () => {
    expect(list.size()).toEqual(3);
    list.clear()
    expect(list.size()).toEqual(0);
  })

})

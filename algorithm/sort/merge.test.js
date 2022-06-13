import merge from './merge';

describe('归并排序', () => {

  describe('方式一', () => {
    test('sort1', () => {
      const array = [10, 8, 6, 4, 2, 1];
      const expect_array = [1, 2, 4, 6, 8, 10];

      const result = merge(array)
      expect(result).toEqual(expect_array);
    })

    test('sort2', () => {
      const array = [10, 8, 8, 6, 9, 2, 1, 3, 4, -5];
      const expect_array = [-5, 1, 2, 3, 4, 6, 8, 8, 9, 10];

      const result = merge(array);
      expect(result).toEqual(expect_array);
    })

    test('sort3', () => {
      const array = [1, 5, 100, 102, 1, 3, 4, 77, 6, 2, 3, 4, 7, 9, 0];
      const expect_array = [0, 1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 9, 77, 100, 102];

      const result = merge(array);
      expect(result).toEqual(expect_array);
    })
  })
})

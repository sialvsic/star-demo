# 几种继承方式

1. ES5继承 绑定构造函数  [ES5.js](./ES5.js)
2. 原型链继承 [prototype.js](./prototype.js)
3. 组合继承 combination.js [combination.js](./combination.js)
4. 寄生组合继承 parasiticCombination.js [parasiticCombination.js](./parasiticCombination.js)
5. ES6继承 [ES6.js](./ES6.js)

## 分析
### ES5继承 绑定构造函数
*缺点*
不能继承父类原型和属性

### 原型链继承
*缺点*
无法向父类构造函数中传递参数；
子类原型链上定义的方法有先后顺序问题
来自原型对象的所有属性被所有实例共享

### 组合继承
*缺点*
调用了2次父类的构造函数，
在第2次调用(继承父类函数的时候调用了父类构造函数)导致子类的原型上多了不需要的父类属性，存在内存上的浪费

### 寄生组合继承
改进了组合继承的缺点，只需要调用 1 次父类的构造函数。它是引用类型最理想的继承范式

## 参考

1. [重学 JS 系列：聊聊继承](https://github.com/KieSun/Dream/issues/16) 
2. [JavaScript常见的六种继承方式](https://github.com/ljianshu/Blog/issues/20)
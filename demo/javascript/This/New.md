# new的过程
----------------  

1. 新生成了一个对象
2. 链接到原型
3. 绑定 this
4. 返回新对象


```ecmascript 6
function create(Con, ...args) {
	// 创建一个空的对象
	let obj = {};
	
	// 链接到原型
	Object.setPrototypeOf(obj, Con.prototype); // obj.__proto__ = Con.prototype;
	
	// 绑定 this，执行构造函数
	let result = Con.apply(obj, ...args);
	
	// 判断构造函数返回值是否为对象，如果为对象就使用构造函数返回的值，否则使用obj
	return typeof result === 'object' ? result : obj
}
```

## 参考

1. [https://github.com/KieSun/Dream/issues/](https://github.com/KieSun/Dream/issues/2)
2. [重学 JS 系列：聊聊 new 操作符](https://github.com/KieSun/Dream/issues/14)

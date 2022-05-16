/******************************************/

//工厂模式
function createPerson(name, age, job) {
  var o = {};  // var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(this.name)
  };
  return o;
}

var person1 = createPerson('yixing', 24, 'dev');
var person2 = createPerson('xiaoya', 24, 'net');
/******************************************/


/******************************************/

//构造函数模式
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name)
  }
}

var person3 = new Person('yixing', 24, 'dev');
var person4 = new Person('xiaoya', 24, 'dev');
/******************************************/


/******************************************/

//另一种构造函数模式
function sayName() {
  console.log(this.name)
}

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = sayName
}

/******************************************/


/******************************************/

//原型模式
function Person() {

}

Person.prototype.name = 'Yixing';
Person.prototype.age = '24';
Person.prototype.job = 'dev';
Person.prototype.sayName = function() {
  console.log(this.name)
};

var person5 = new Person();
person5.sayName(); //Yixing

var person6 = new Person();
person6.sayName(); //Yixing

console.log(person5.sayName == person6.sayName); //true
/******************************************/


/******************************************/

//原型模式的局限  另一种原型模式的写法
function Person() {
}

Person.prototype = {
  constructor: Person,
  name: 'yixing',
  age: 24,
  job: 'dev',
  friends: ['a', 'b']
};

var person7 = new Person();
var person8 = new Person();

person7.friends.push('c');
console.log(person7);  //'a,b,c'
console.log(person8);  //'a,b,c'
console.log(person7.friends === person8.friends);  //true
/******************************************/


/******************************************/

//组合使用构造函数模式和原型模式
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ['a', 'b']
}

Person.prototype = {
  constructor: Person,
  sayName: function() {
    console.log(this.name)
  }
};

var person9 = new Person('yixing', 24, 'dev');
var person10 = new Person('xiaoya', 24, 'net');

person9.friends.push('c');

console.log(person9);  //'a,b,c'
console.log(person10);  //'a,b'
console.log(person9.friends === person10.friends);  //false
console.log(person9.sayName === person10.sayName);  //true
/******************************************/


/******************************************/

//原型链
function SuperType() {
  this.superName = 'super';
}

SuperType.prototype.getSuperName = function() {
  return this.superName;
};

function SubType() {
  this.subName = 'sub';
}

//继承了SuperType
SuperType.prototype = new SuperType();

SuperType.prototype.getSubName = function() {
  return this.subName;
};

var ins = new SubType();
console.log(ins.getSuperName());  //'super'
/******************************************/


/******************************************/

//借用构造函数
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue']
}

function SubType() {
  //继承了SuperType
  SuperType.call(this, 'yixing');
}

var ins1 = new SubType();
ins1.colors.push('green');
console.log(ins1.colors);  //'red,blue,green'

var ins2 = new SubType();
console.log(ins2.colors);  //'red', 'blue'
/******************************************/


/******************************************/

//组合继承
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue']
}

SuperType.prototype.sayName = function() {
  console.log(this.name)
};

function SubType(name, age) {
  //继承属性
  SuperType.call(this, name);
  this.age = age;
}

//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;  //如果不添加，原型(父类的实例)上是没有这个属性的
SubType.prototype.sayAge = function() {
  console.log(this.age)
};

var ins3 = new SubType('yixing', 24);
ins3.colors.push('green');
console.log(ins3.colors);  //'red,blue,green'
ins3.sayName();  //'yixing'
ins3.sayAge();  //24

var ins4 = new SubType('xiaoya', 23);
ins4.colors.push('yellow');
ins4.sayName();  //'xiaoya'
ins4.sayAge();  //23
/******************************************/


/******************************************/

//一般的函数调用
function compare(value1, value2) {
  if(value1 < value2) {
    return -1;
  } else if(value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}

var result = compare(5, 10);

//闭包
function createComparisonFunction(propertyName) {
  return function(Object1, Object2) {
    var value1 = Object1[propertyName];
    var value2 = Object2[propertyName];

    if(value1 < value2) {
      return -1;
    } else if(value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
}

var compareName = createComparisonFunction("name");

var result = compareName({ name: 'Yixing' }, { name: 'xiaoya' });

/******************************************/


/******************************************/
//闭包与this指针
var name = "This is window";

var obj = {
  name: 'this is obj name',

  getNameFunc: function() {
    return function() {
      return this.name;
    }
  }
};

console.log(obj.getNameFunc()());  //"This is window"

//增强this的作用域
var name = "This is window";

var obj = {
  name: 'this is obj name',

  getNameFunc: function() {
    var that = this;
    return function() {
      return that.name;
    }
  }
};

console.log(obj.getNameFunc()());  //"this is obj name"

/******************************************/


/******************************************/

//块级作用域
function block() {
  var i = 3;
  i++;
  var b = 102 + i;
  console.log(i);
  //重复定义变量没有报错，但是会更改值
  var i = 100;
  console.log(i);
}

block();

(function block() {

})();

/******************************************/


/******************************************/

//私有变量
function Person(name) {
  var gender = 'male';  //私有属性
  this.name = name;  //特权属性

  function getName() {
    return 'name';
  }  //私有方法

  this.setName = function(name) {
    this.name = name;
  };  //特权方法

  this.setGender = function(gd) {
    gender = gd;
  };

  this.getGender = function() {
    return gender;
  };
}

/******************************************/


/******************************************/
//静态私有变量
(function() {
  var value = 0;

  function getVaule() {
    return value;
  }

  //构造函数  初始化未经声明的变量，总是会创建一个全局变量
  Obj = function() {

  };

  Obj.prototype.method = function() {
    value++;
    return value;
  }

})();
/******************************************/
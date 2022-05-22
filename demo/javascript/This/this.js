const test = {
  id: 123,
  aabb: function () {
    console.log(this);
    console.log(this.id);
  },
};

test.aabb();
//{id: 123, aabb: ƒ}
//123

console.log("test \n");

/*********************/
const test1 = {
  id: 123,
  aabb: () => {
    console.log(this);
    console.log(this.id);
  },
};

test1.aabb();
//Window
//undefined

console.log("test1 \n");
/*********************/
const test2 = {
  id: 123,
  aabb: {
    cc: function () {
      console.log(this);
      console.log(this.id);
    },
    dd: () => {
      console.log(this);
      console.log(this.id);
    },
  },
};

test2.aabb.cc();
//{cc: ƒ, dd: ƒ}
//undefined

test2.aabb.dd();
//Window
//undefined

console.log("test2 \n");

/*********************/
//注意以下几种情况的this绑定问题

const dd = () => {
  console.log(this);
  console.log(this.id);

  const a = () => {
    this.name = "123";
    console.log(this.id);
  };

  a();
};

const ee = function () {
  const a = () => {
    this.name = "123";
    console.log(this.id);
  };

  a();
};

const test3 = {
  id: 123,
  aabb: {
    cc: function () {
      console.log(this);
      console.log(this.id);
    },
    dd: dd,
    ee: ee,
  },
};

test3.aabb.dd();
//Window
//undefined
//undefined

console.log("test3 \n");

/*********************/

function foo(name) {
  this.name = name;
}

const bar = new foo("star");
console.log(bar.name);

/*********************/
var obj = {};
obj.fun = function foo() {
  console.log("1");
  console.log(this);
  return () => {
    console.log("2");
    console.log(this);
    return () => {
      console.log("3");
      console.log(this);
    };
  };
};

obj.fun()()();

/*
1
{ fun: [Function: foo] }
2
{ fun: [Function: foo] }
3
{ fun: [Function: foo] }
*/

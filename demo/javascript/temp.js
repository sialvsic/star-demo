function People(age, height) {
  // 构造器
  this.age = age;
  this.height = height;

  getAge: () => {
    //没用 和 People 没关系
    console.log(this);
    console.log("age", age);
    console.log("widow age", window.age);
    return age;
  };

  const getAge = function () {
    //没用 和 People 没关系
    return this.age;
  };

  this.getAge1 = function () {
    console.log(this); //People{}
    return this.age;
  };

  this.getAge2 = () => {
    console.log(this); //People{}
    return this.age;
  };

  this.getHeight1 = function () {
    console.log(this); //People{}
    return this.height;
  };

  this.getHeight2 = () => {
    console.log(this); //People{}
    return this.height;
  };

  console.log(this); //People{}
}

const people = new People(18, 180);

console.log(people.getAge1()); //18
console.log(people.getAge2()); //18
console.log(people.getHeight1()); //180
console.log(people.getHeight2()); //180

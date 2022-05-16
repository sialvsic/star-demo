function People(name, age) {
  this.name = name;
  this.age = age;
}

People.prototype.talk = function() {
  return `i am People talk`;
};

function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype = Object.create(People.prototype);
// Student.prototype = new People();
// Student.prototype.constructor = Student; //可选

Student.prototype.say = function() {
  return `My name is ${this.name}`
};

const student1 = new Student('yixing', 22);

console.log(student1.say());
console.log(student1.talk());



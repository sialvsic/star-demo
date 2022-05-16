setTimeout(() => {
  console.log(5);
}, 0);

new Promise((resolve) => {
  console.log(1);
  debugger
  resolve(3);
  Promise.resolve().then(() => {
    console.log(4);
  })
}).then((num) => {
  console.log(num);
});

console.log(2);


//=> 1 2 4 3 5


(10).add(10).substract(2).add(10);

// => 28

function f(value) {
  this.value = value;
}

f.prototype.add = function(num) {
  this.value += num;
  return this;
};

f.prototype.substract = function(num) {
  this.value -= num;
  return this;
};


console.log(new f(10).add(10).substract(2).add(10));

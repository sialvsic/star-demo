function CoolModule() {
  let something = "cool";
  let another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join("!"));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}

var foo = CoolModule();
foo.doSomething();//cool
foo.doAnother();//1!2!3


function f(b) {
  {
    var cc = 11;
  }

  console.log(cc);
}

f()

var a = {
  name: 123
};

f(a);


(function() {
  console.log(window);
})();



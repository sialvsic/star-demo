function person() {
  var name = 'star';

  function readName() {
    console.log(this);
    return name;
  }

  return {
    readName: readName
  };
}

person().readName();


//part1
var name = "The Window";

var object = {
  name: "My Object",

  getNameFunc: function() {
    console.log(this);
    return function() {
      console.log(this);
      return this.name;
    };
  }
};

console.log(object.getNameFunc()());

//part2
var name = "The Window";

var object = {
  name: "My Object",

  getNameFunc: function() {
    var that = this;
    return function() {
      return that.name;
    };
  }
};

console.log(object.getNameFunc()());

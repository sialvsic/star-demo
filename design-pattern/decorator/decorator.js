function Macbook() {
  this.cost = function () {
    return 997;
  };

  this.screenSize = function () {
    return '11.6';
  };

}

//Decorator 1
function Memory(macbook) {

  let v = macbook.cost();
  macbook.cost = function () {
    return v + 75;
  };
}

//Decorator 2
function Engraving(macbook) {
  let v = macbook.cost();

  macbook.cost = function () {
    return v + 200;
  };
}

//Decorator 2
function Insurance(macbook) {
  let v = macbook.cost();

  macbook.cost = function () {
    return v + 250;
  };
}

let mb = new Macbook();
Memory(mb);
Engraving(mb);
Insurance(mb);
console.log(mb.cost());

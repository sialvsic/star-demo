function vehicle(vehicleType) {
  this.vehicleType = vehicleType;
  this.model = 'default';
  this.license = '0000-0000';
}

let testInstance = new vehicle('car');
console.log(testInstance);

//output
//vehicle { vehicleType: 'car', model: 'default', license: '0000-0000' }

let truck = new vehicle('truck');
truck.setModel = function (modelName) {
  this.model = modelName;
};

truck.setColor = function (color) {
  this.color = color;
};

truck.setColor('blue');
truck.setModel('CAT');

console.log(truck);

//output
/*
vehicle {
  vehicleType: 'truck',
  model: 'CAT',
  license: '0000-0000',
  setModel: [Function],
  setColor: [Function],
  color: 'blue' }
*/


console.log(testInstance);

//output
//vehicle { vehicleType: 'car', model: 'default', license: '0000-0000' }
//证明vehicle并未改变

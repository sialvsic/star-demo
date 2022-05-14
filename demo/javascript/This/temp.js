const arrow = (...params) => {
  console.log(params) //[ 1, 2, 3 ]
  console.log(arguments) //[Arguments] {'0': {}, '1': [Function: require] {xxx}, '2': Module {}, xx)
}

function normal(...params) {
  console.log(params) //[ 1, 2, 3 ]
  console.log(arguments) //{ '0': 1, '1': 2, '2': 3 }
}

const test1 = arrow(1, 2, 3)
const test2 = normal(1, 2, 3)

console.log('arrow.prototype', arrow.prototype) // undefined
console.log('normal.prototype', normal.prototype) //normal {}

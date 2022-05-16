const array = [1, 2, 3, 4, 5, 6];

// 截取前x个元素
console.log(array.slice(0, 0)); //[];
console.log(array.slice(0, 1)); //[ 1 ]
console.log(array.slice(0, 2)); //[ 1,2 ]
console.log(array.slice(0, 3)); //[ 1,2,3 ]
console.log('\n');

//截取后x个元素
console.log(array.slice(0)); //[ 1, 2, 3, 4, 5, 6 ]
console.log(array.slice(-0)); //[ 1, 2, 3, 4, 5, 6 ]
console.log(array.slice(-1)); //[ 6 ]
console.log(array.slice(-2)); //[ 5, 6 ]
console.log(array.slice(-3)); //[ 4, 5, 6 ]
console.log('\n');

//截取第X个之后的
console.log(array.slice(0)); //[ 1, 2, 3, 4, 5, 6];
console.log(array.slice(1)); //[ 2, 3, 4, 5, 6 ]
console.log(array.slice(2)); //[ 3, 4, 5, 6 ]
console.log(array.slice(3)); //[ 4, 5, 6 ]

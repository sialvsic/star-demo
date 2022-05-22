let test1 = [1, 2, 3, 4, 5];
//对原数组有影响

//删除第2一个元素
console.log("eg1:");
console.log(test1.splice(1, 1));
console.log(test1); //[ 1, 3, 4, 5 ]

test1 = [1, 2, 3, 4, 5];
console.log("\n");
console.log("eg2:");
//删除所有的元素
console.log(test1.splice(0));
console.log(test1); //[]

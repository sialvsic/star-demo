let test1 = [1, 2, 3, 4, 5];
//对原数组有影响

//删除第2个元素
console.log("eg1:");
console.log(test1.splice(1, 1));
console.log(test1); //[ 1, 3, 4, 5 ]

//删除所有的元素
test1 = [1, 2, 3, 4, 5];
console.log("\n");
console.log("eg2:");
console.log(test1.splice(0));
console.log(test1); //[]

//删除第3个及之后的所有的元素
test1 = [1, 2, 3, 4, 5];
console.log("\n");
console.log("eg3:");
console.log(test1.splice(2)); //[ 3, 4, 5 ]
console.log(test1); //[1, 2]

//删除后3个元素
test1 = [1, 2, 3, 4, 5];
console.log("\n");
console.log("eg4:");
console.log(test1.splice(-3)); //[ 3, 4, 5 ]
console.log(test1); //[1, 2]

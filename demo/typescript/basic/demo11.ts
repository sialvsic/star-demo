// 索引类型
// demo12:Index types: index type query and indexed access operators
interface Person {
    name: string;
    age: number;
    isMale: boolean
}
let person: Person = {
    name: 'Jarid',
    age: 35,
    isMale: true
};

function pluck<T, K extends keyof T>(object: T, names: K[]): T[K][] {
    return names.map(n => object[n]);
}

let results = pluck(person, ['name', 'age']);
console.log(results)


// let K: keyof Person; // 'name' | 'age' | 'isMale'

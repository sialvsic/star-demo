// demo9:Intersection Types--an object of this type will have all members of all types(取并集)
interface Name {
  name: string;
}

interface Age {
  age: number;
}

// interface ITemporary extends Name,Age{}

let oneFunction = <T, U>(a: T & U) => { };

oneFunction<Name, Age>({ name: 'ssss', age: 1 });

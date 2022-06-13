interface Name {
  name: string;
}
  
// 1. difference ways to extends:
interface User extends Name { 
  age: number; 
}
// type User = Name & { age: number  };

// 2. type can be used for basic type, union type, tuple
    // for basic type
type Work = string

    // for union type
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

    // for tuple
type PetList = [Dog, Pet]

// 3. can not implements or extends a union type or intersection type

interface Age {
  age: number;
}

type aliasType = Name | Age;

// class ITemp extends aliasType {
// }
    

// 4. interface can do the declaration merging
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User {
  name: string
  age: number
  sex: string 
}
*/
// 5. type can do more
type StringOrNumber = string | number;  
type Texts = string | { text: string };  
type Callback<T> = (data: T) => void;  
type Pair<T> = [T, T];  
type Coordinates = Pair<number>;  
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };

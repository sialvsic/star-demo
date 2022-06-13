
interface Professional {
  profession: string,
  name:string,
}

function printName<T extends Professional>(theInput: T): void {
  console.log(`My name is ${theInput.name}`);
}


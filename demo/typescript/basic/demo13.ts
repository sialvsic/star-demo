// demo13:Type Guards--To know specifically type
interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getPet(): Fish | Bird {
  return
}
let petAnimal = getPet();

if ((<Fish>petAnimal).swim) {
  (<Fish>petAnimal).swim();
}
else {
  (<Bird>petAnimal).fly();
}
/**------------------------------------------------------- */

let onePet = getPet();

// 'pet is Fish' is a type predicate, a predicate takes the form parameterName is Type
function isFish(onePet: Fish | Bird): onePet is Fish {
  return (<Fish>onePet).swim !== undefined;
}

if (isFish(onePet)) {
  onePet.swim();
}
else {
  onePet.fly();
}

/** ------------------------------------------------------- */
/** for typeof and instanceof,it's not necessary to write type predicate */
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
}

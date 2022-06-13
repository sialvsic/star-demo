interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  return
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors

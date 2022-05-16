class Man {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Factory {
  static create(name) {
    return new Man(name);
  }
}

Factory.create('xiaome').getName();

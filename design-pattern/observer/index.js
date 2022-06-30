//被观察者
class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  removeObserver(observer) {
    const index = this.observerList.findIndex((o) => o.name === observer.name);
    this.observerList.splice(index, 1);
  }

  notifyObservers(message) {
    const observers = this.observerList;
    observers.forEach((observer) => observer.notified(message));
  }
}

//观察者
class Observer {
  constructor(name) {
    this.name = name;
  }

  notified(message) {
    console.log(this.name, "got message", message);
  }
}

const obj1 = new Observer("o1");
const obj2 = new Observer("o2");
const obj3 = new Observer("o3");
const obj4 = new Observer("o4");

const sub = new Subject();
sub.addObserver(obj1);
sub.addObserver(obj2);
sub.addObserver(obj3);
sub.addObserver(obj4);
sub.removeObserver(obj3);

sub.notifyObservers("ccc");

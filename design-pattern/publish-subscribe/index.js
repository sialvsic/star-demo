class PubSub {
  constructor() {
    this.messages = {}; //消息列表
    this.listeners = {}; //订阅者列表
  }

  publish(type, content) {
    const existContent = this.messages[type];
    if (!existContent) {
      this.messages[type] = [];
    }
    this.messages[type].push(content);
  }

  subscribe(type, cb) {
    const existListener = this.listeners[type];
    if (!existListener) {
      this.listeners[type] = [];
    }
    this.listeners[type].push(cb);
  }

  notify(type) {
    const messages = this.messages[type];
    const subscribers = this.listeners[type] || [];

    messages.forEach((msg) => {
      subscribers.forEach((cb) => cb(msg)); //所有的订阅者都可以收到消息
    });
  }
}

class Publisher {
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }
  publish(type, content) {
    this.context.publish(type, content);
  }
}

class Subscriber {
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }

  subscribe(type, cb) {
    this.context.subscribe(type, cb);
  }
}

//eg:

const TYPE_A = "music";
const TYPE_B = "movie";
const TYPE_C = "novel";

const pubSub = new PubSub();

const publisherA = new Publisher("pa", pubSub);
publisherA.publish(TYPE_A, "we are young");
publisherA.publish(TYPE_B, "the silicon valley");

const publisherB = new Publisher("pb", pubSub);
publisherB.publish(TYPE_A, "stronger");

const publisherC = new Publisher("pc", pubSub);
publisherC.publish(TYPE_C, "a brief history of time");

const subscriberA = new Subscriber("subscriberA", pubSub);
subscriberA.subscribe(TYPE_A, (res) => {
  console.log("subscriberA received", res);
});

const subscriberB = new Subscriber("subscriberB", pubSub);
subscriberB.subscribe(TYPE_C, (res) => {
  console.log("subscriberB received", res);
});

const subscriberC = new Subscriber("subscriberC", pubSub);
subscriberC.subscribe(TYPE_B, (res) => {
  console.log("subscriberC received", res);
});

pubSub.notify(TYPE_A);
pubSub.notify(TYPE_A);
pubSub.notify(TYPE_B);
pubSub.notify(TYPE_C);

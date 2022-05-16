let pubsub = {};

(function (q) {
  let topics = {};
  let subUid = -1;

  q.publish = function (topic, args) {
    if (!topics[topic]) {
      return false;
    }

    let subscribers = topics[topic];
    let len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].func(topic, args);
    }

    return this;
  };

  q.subscribe = function (topic, funcs) {
    if (!topics[topic]) {
      topics[topic] = [];
    }

    var token = (++subUid).toString();
    topics[topic].push({
      token: token,
      funcs: funcs,
    });

    return token;
  };

  q.unsubscribe = function (token) {
    for (let m in topics) {
      if (topics[m]) {
        for (let i = 0, j = topics[m].length; i < j; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
  };

})(pubsub);

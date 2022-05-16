function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
  this.observerList.push(obj);
};

ObserverList.prototype.empty = function () {
  this.observerList = [];
};

ObserverList.prototype.count = function () {
  return this.observerList.length;
};

ObserverList.prototype.get = function (index) {
  return this.observerList[index];
};

ObserverList.prototype.insert = function (object, index) {
  let point = -1;
  if (index === 0) {
    this.observerList.unshift(object);
  } else if (index === this.observerList.length) {
    this.observerList.push(object);
  }
  return point;
};

ObserverList.prototype.indexOf = function (obj, startIndex) {
  var i = startIndex, point = -1;
  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      point = i;
    }
    i++;
  }

  return point;
};

ObserverList.prototype.removeIndexAt = function (index) {
  if (index === 0) {
    this.observerList.shift();
  } else if (index === this.observerList.length - 1) {
    this.observerList.pop();
  }
};

function extend(obj, extension) {
  for (let key in obj) {
    extension[key] = obj[key];
  }
}

//模拟目标
function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function (observer) {
  this.observers.add(observer);
};

Subject.prototype.removeObserver = function (observer) {
  this.observers.removeIndexAt(this.observers.indexOf(observer, 0));
};

Subject.prototype.notify = function (context) {
  let observerCount = this.observers.count();
  for (let i = 0; i < observerCount; i++) {
    this.observers.get(i).update(context);
  }
};

//创建新的Observer
function Observer() {
  this.update = function () {
    console.log('update');
  };
}

let controlCheckbox = document.getElementById('mainCheckbox'),
  addBtn = document.getElementById('addNewObserver'),
  container = document.getElementById('observersContainer');

//利用Subject 扩展controlCheckbox
extend(new Subject(), controlCheckbox);

controlCheckbox.addEventListener('click', () => {
  controlCheckbox.notify(controlCheckbox.checked);
});

function AddNewObserver() {
  let check = document.createElement('input');
  check.type = 'checkbox';

  extend(new Observer(), check);

  check.update = function (value) {
    this.checked = value;
  };

  //添加观察者
  controlCheckbox.addObserver(check);
  container.appendChild(check);
}

addBtn.addEventListener('click', () => {
  AddNewObserver();
});

/*
1.设定目标Subject
2.添加观察者
3.发送notify
4.执行观察者的更新方法
 */


let cache = {};
let length = [];

function lru(uid) {

  if (!cache[uid]) {
    cache[uid] = uid;
    length.push(uid);
  } else {
    length.splice(uid - 1, 1);
    length.unshift(uid);
  }

  if (length > 5) {
    delete cache[length[length.length - 1]];
    length.pop();
  }

  console.log(cache);
  console.log(length);
}

// input
lru(1);
lru(2);
lru(3);
lru(4);
lru(5);
lru(63);
lru(3);

// output


//为什么不用Map
//问题：使用用户的ID作为输入key


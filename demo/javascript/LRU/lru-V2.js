let cacheMap = new Map();
const cacheLength = 5;

function Hash(value) {
  return (Math.random() * 1000 | 0) + value.toString();
}

function lru(value) {
  const key = Hash(value);

  if (cacheMap.has(key)) {
    cacheMap.delete(key);
  }

  cacheMap.set(key, value);

  if (cacheMap.size > cacheLength) {
    const oldKey = Array.from(cacheMap.keys()).shift().toString();
    cacheMap.delete(oldKey);
  }
}

lru('1');
lru(2);
lru('3');
lru(4);
lru('5');
lru(6);
lru('7');

console.log(cacheMap);

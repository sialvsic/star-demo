let cacheMap = new Map();
const cacheLength = 5;

function lru(key, value) {
  if (cacheMap.has(key)) {
    cacheMap.delete(key);
  }

  cacheMap.set(key, value);

  if (cacheMap.size > cacheLength) {
    const oldKey = Array.from(cacheMap.keys()).shift().toString();
    cacheMap.delete(oldKey);
  }

  // console.log(object);

  console.log("cacheMap", Array.from(cacheMap.keys()));
}

lru("1", "1");
lru("2", "2");
lru("3", "3");
lru("4", "4");
lru("3", "3");
lru("2", "2");
lru("6", "6");

console.log(cacheMap);

// 387. 字符串中的第一个唯一字符 https://leetcode.cn/problems/first-unique-character-in-a-string/

/*
给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const length = s.length;
  const map = new Map();

  for (let i = 0; i < length; i++) {
    const item = s[i];
    if (map.has(item)) {
      const tmp = map.get(item);
      map.set(item, tmp + 1);
    } else {
      map.set(item, 1);
    }
  }

  let result = -1;
  let findItem;
  const keys = Array.from(map.keys());
  for (let j = 0; j < keys.length; j++) {
    const key = keys[j];
    const item = map.get(key);
    if (item === 1) {
      findItem = key;
      break;
    }
  }

  if (findItem) {
    let index = s.indexOf(findItem);
    result = index;
  }

  return result;
};

const s = "leetcode";
const r = firstUniqChar(s);
console.log("r", r); //l

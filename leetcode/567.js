// 567. 字符串的排列

/*
给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
换句话说，s1 的排列之一是 s2 的 子串
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function full(string) {
  const n = string.length;
  const arr = [];

  let path = [];

  function helper(str, n, used) {
    if (path.length === n) {
      arr.push([...path]);
      return;
    }

    for (let i = 0; i < str.length; i++) {
      const item = str[i];

      if (used[i]) {
        continue;
      }
      path.push(item);
      used[i] = true;
      helper(str, n, used);
      path.pop(item);
      used[i] = false;
    }
  }

  helper(string, n, []);
  return arr;
}

function findString(s1, s2) {
  const first = s1[0];
  let index = s2.indexOf(first);
  console.log("index", index);

  if (index !== -1) {
    console.log("log1");

    while (s2[index] == s2[index + 1]) {
      index++;
    }
    console.log("log");

    for (let i = 0; i < s1.length; i++) {
      const item = s1[i];
      console.log("item", item);
      console.log("s2[index]", s2[index]);

      if (item !== s2[index]) {
        return false;
      }
      index++;
    }
    return true;
  }

  return false;
}

var checkInclusion = function (s1, s2) {
  const fullArray = full(s1);
  for (let i = 0; i < fullArray.length; i++) {
    const arr = fullArray[i]; //[ 'a', 'b']
    const str = arr.join("");
    console.log("str", str);

    if (findString(str, s2)) {
      return true;
    }
  }

  return false;
};

// const s1 = "ab",
//   s2 = "eidbaooo";

// const s1 = "abc",
//   s2 = "bbbca";

const s1 = "prosperity",
  s2 = "properties";

//测试全排列
const f = full(s1);
console.log("f", f);

const r = checkInclusion(s1, s2);
console.log("r", r); //true

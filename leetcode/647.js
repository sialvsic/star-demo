// 647. 回文子串 https://leetcode.cn/problems/palindromic-substrings/

/*
给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
回文字符串 是正着读和倒过来读一样的字符串。
子字符串 是字符串中的由连续字符组成的一个序列。
具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串
*/

function isHuiWen(str) {
  for (let i = 0; i < str.length / 2; i++) {
    const item = str[i];
    const last = str[str.length - 1 - i];

    if (item !== last) {
      return false;
    }
  }

  return true;
}

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    let s1 = item;

    for (let j = i; j < s.length; j++) {
      const value = s[j];

      if (j != i || value != s1) {
        s1 += value;
      }

      if (isHuiWen(s1)) {
        console.log("s1", s1);
        count++;
      }
    }
  }
  return count;
};

var countSubstrings1 = function (s) {
  const n = s.length;
  let ans = 0;

  for (let i = 0; i < 2 * n - 1; ++i) {
    let l = i / 2,
      r = i / 2 + (i % 2);
    while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
      --l;
      ++r;
      ++ans;
    }
  }
  return ans;
};

const s = "abc";
const s1 = "aaa";

// 方法1：暴力解法

// const r = countSubstrings(s);
// const r1 = countSubstrings(s1);
// console.log("r", r); //3    3个回文子串: "a", "b", "c"
// console.log("r1", r1); //6    6个回文子串: "a", "a", "a", "aa", "aa", "aaa"

// 方法2：中心扩散法

const s2 = "aaa";
const r2 = countSubstrings1(s2);
console.log("r2", r2);

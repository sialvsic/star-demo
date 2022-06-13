// 字符串模板的函数参数

const name = "sialvsic";
const template = `this is ${name}`;
console.log(template);

const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  // function myTag(strings, ...rest) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  let ageStr;
  if (ageExp > 99) {
    ageStr = "centenarian";
  } else {
    ageStr = "youngster";
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}

const output = myTag`That ${person} is a ${age}`;

console.log(output);
// That Mike is a youngster

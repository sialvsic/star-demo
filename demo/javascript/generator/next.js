function* gen(x) {
  var y = yield x + 2;
  return y;
}

const g = gen(10);
console.log("g", g);

c = g.next();
console.log("c", c);

d = g.next();
console.log("d", d);

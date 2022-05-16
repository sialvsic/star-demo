class C {
  showThis() {
    console.log(this);
  }
}


var o = new C();
o.showThis();


var show = o.showThis;
console.log(show());

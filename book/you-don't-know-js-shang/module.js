const myModules = (function Manager() {
  const modules = {};

  function define(name, deps, impl) {
    debugger;
    for(let i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }

  function get(name) {
    return modules[name]
  }

  return {
    define: define,
    get: get,
  }
})();

myModules.define("bar", [], function() {
  function hello(who) {
    return "Let me introduce: " + who;
  }

  return {
    hello,
  }
});

myModules.define("foo", ["bar"], function(bar) {
  var hungry = "hippo";

  function awesome() {
    debugger
    console.log(bar);
    console.log(bar.hello(hungry).toUpperCase());
  }

  return {
    awesome,
  }
});

const bar = myModules.get('bar');
const foo = myModules.get('foo');

bar.hello("hippo");
foo.awesome();


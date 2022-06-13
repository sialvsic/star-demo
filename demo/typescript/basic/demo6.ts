// demo7:generic functions
function identity<T>(params: T): T {
  return params
}
identity<string>('ttt');
identity<number>(414);

function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);  // Property 'length' does not exist on type 'T'
  return arg;
}

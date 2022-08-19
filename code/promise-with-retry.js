function fn() {
  return new Promise((resolve, reject) => {
    const r = Math.random();

    if (r < 0.1) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

// function asyncRetry(fn, time) {
//   return new Promise((resolve, reject) => {
//     let count = 0;

//     function run() {
//       fn()
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((err) => {
//           count++;
//           if (count >= time) {
//             reject(err);
//           } else {
//             run();
//           }
//         });
//     }

//     run();
//   });
// }

async function asyncRetry(fn, time) {
  for (let i = 0; i < time; i++) {
    try {
      const res = await fn();
      return res;
    } catch (error) {
      if (i === time - 1) {
        throw error;
      }
    }
  }
}

asyncRetry(fn, 3).then(console.log, console.log);

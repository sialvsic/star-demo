//长任务 大概40s执行
const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 2e10; i++) {
    sum += i;
  }
  return sum;
};

process.on('message', (msg) => {
  const sum = longComputation();
  process.send(sum);
});
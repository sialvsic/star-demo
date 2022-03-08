// 独立子进程
const { spawn } = require("child_process");

const subprocess = spawn(process.argv0, ["isub.js"], {
  detached: true,
  stdio: "ignore"
});

subprocess.unref();
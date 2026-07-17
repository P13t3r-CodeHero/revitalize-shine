import { spawn } from 'node:child_process';

const port = process.env.PORT || '8080';
const host = process.env.HOST || '0.0.0.0';

const child = spawn(process.execPath, ['.output/server/index.mjs'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    PORT: port,
    HOST: host,
  },
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});

child.on('error', (error) => {
  console.error(error);
  process.exit(1);
});

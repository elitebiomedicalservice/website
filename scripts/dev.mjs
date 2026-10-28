import { spawn } from 'node:child_process';

const children = [
  spawn(process.execPath, ['server.mjs'], { stdio: 'inherit', env: { ...process.env, PORT: '8787' } }),
  spawn(process.execPath, ['node_modules/vite/bin/vite.js'], { stdio: 'inherit', env: process.env }),
];

function stopAll() {
  for (const child of children) if (!child.killed) child.kill('SIGTERM');
}
process.on('SIGINT', stopAll);
process.on('SIGTERM', stopAll);
for (const child of children) child.on('exit', (code) => {
  if (code && code !== 0) process.exitCode = code;
  stopAll();
});

import '#core/load-env.js';
import prompts from 'prompts';
import fs from 'node:fs/promises';
import { dbServer } from '#core/servers/index.js';
import { ENV } from '#core/constants/index.js';
import { mongoDBQuestions } from './questions.js';

const consoleRunners = await fs
  .readdir(import.meta.dirname, { withFileTypes: true })
  .then(files => files.filter(file => file.isDirectory()).map(file => file.name));

let exit = false;
const mongoDbFields = await prompts(mongoDBQuestions);
const connectionString = Boolean(mongoDbFields.connectionString) ? mongoDbFields.connectionString : ENV.MONGODB_URI;
await dbServer.connect(connectionString);
while (!exit) {
  const { consoleRunner } = await prompts([
    {
      name: 'consoleRunner',
      type: 'select',
      message: 'Which test-runner do you want to run?',
      choices: [...consoleRunners, 'exit'].map(runner => ({ title: runner, value: runner })),
    },
  ]);

  if (consoleRunner !== 'exit') {
    const { run } = await import(`./${consoleRunner}/index.js`);
    await run();
  } else {
    exit = true;
    await dbServer.disconnect();
  }
}

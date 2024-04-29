import childProcess from 'node:child_process';
import prompts from 'prompts';
import { projectList } from './project-commands';

const commandType = process.argv[2];

const promptType: Record<string, prompts.PromptType> = {
  start: 'multiselect',
  'console-runners': 'select',
  'test:watch': 'select',
};

const { selectedFilterCommands } =
  projectList.length > 1
    ? await prompts([
        {
          type: promptType[commandType],
          name: 'selectedFilterCommands',
          message: 'Select projects to run',
          choices: projectList.map(project => ({
            title: project.name,
            value: project.filterCommand,
          })),
        },
      ])
    : { selectedFilterCommands: projectList[0].filterCommand };

const filter = Array.isArray(selectedFilterCommands)
  ? selectedFilterCommands.length > 0
    ? `${selectedFilterCommands.join(' ')}`
    : ''
  : selectedFilterCommands;

const commandMap = {
  start: `turbo start type-check:watch ${filter}`,
  'console-runners': `npm run console-runners ${filter}`,
  'test:watch': `npm run test:watch ${filter}`,
};

const command = `${commandMap[commandType]}`;
childProcess.execSync(command, { stdio: 'inherit' });

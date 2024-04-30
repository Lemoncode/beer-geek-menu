import { PromptObject } from 'prompts';

export const mongoDBQuestions: PromptObject[] = [
  {
    name: 'connectionString',
    type: 'text',
    message: 'Connection string (Press enter to use default): ',
  },
];

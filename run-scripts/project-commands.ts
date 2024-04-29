const commandType = process.argv[2];

interface Project {
  name: string;
  filterCommand: string;
}

const projectMap: Record<string, Project[]> = {
  start: [
    {
      name: '@beer-geek-menu/public-portal',
      filterCommand: '--filter=@beer-geek-menu/public-portal...',
    },
    {
      name: '@beer-geek-menu/intranet',
      filterCommand: '--filter=@beer-geek-menu/intranet...',
    },
    {
      name: '@beer-geek-menu/backend',
      filterCommand: '--filter=@beer-geek-menu/backend...',
    },
  ],
  'console-runners': [
    {
      name: '@beer-geek-menu/backend',
      filterCommand: '-w @beer-geek-menu/backend',
    },
  ],
  'test:watch': [
    {
      name: '@beer-geek-menu/public-portal',
      filterCommand: '-w @beer-geek-menu/public-portal',
    },
    {
      name: '@beer-geek-menu/intranet',
      filterCommand: '-w @beer-geek-menu/intranet',
    },
    {
      name: '@beer-geek-menu/backend',
      filterCommand: '-w @beer-geek-menu/backend',
    },
  ],
};

export const projectList = projectMap[commandType];

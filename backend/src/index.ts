import '#core/load-env.js';
import path from 'node:path';
import express from 'express';
import { createRestApiServer, dbServer } from '#core/servers/index.js';
import { ENV } from '#core/constants/index.js';
import { temporalAPI } from '#pods/temporal/index.js';

const app = createRestApiServer();
const staticFilesPath = path.resolve(import.meta.dirname, ENV.FRONT_STATIC_FILES);
app.use('/', express.static(staticFilesPath));

app.use('/api/temporals', temporalAPI);

app.listen(ENV.PORT, async () => {
  if (ENV.IS_MOCK_API) {
    console.log('Mock mode');
  } else {
    console.log('MongoDB mode');
    await dbServer.connect(ENV.MONGODB_URI);
  }
  console.log(`Server is running on port ${ENV.PORT}`);
});

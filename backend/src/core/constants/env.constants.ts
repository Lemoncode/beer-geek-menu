export const ENV = {
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: process.env.INTERNAL_PORT,
  IS_MOCK_API: process.env.MOCK_API === 'true',
  MONGODB_URI: process.env.MONGODB_URI,
  FRONT_STATIC_FILES: process.env.FRONT_STATIC_FILES,
};

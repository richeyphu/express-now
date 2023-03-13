export const env = {
  SERVER_NAME: process.env.npm_package_name ?? null,
  SERVER_VERSION: process.env.npm_package_version ?? null,
  NODE_ENV: process.env.NODE_ENV ?? null,
};

import * as url from 'url';
import path from 'path';
import dotenv from 'dotenv';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

export default {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
  },
};

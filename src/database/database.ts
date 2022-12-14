import * as url from 'url';
import path from 'path';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

export const sequelize = new Sequelize(
  process.env.DB_NAME ?? '',
  process.env.DB_USER ?? '',
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
  }
);

import { Client } from 'pg';
import { config } from 'dotenv';

config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT || '5432'),
});

export const db = async () => {
  try {
    await client.connect();
    console.log('database connected');
  } catch (err) {
    console.log('failed to connect db', err);
  }
};

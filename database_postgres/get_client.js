import pkg from "pg";
const { Client } = pkg;

import dotenv from "dotenv";
dotenv.config();

export const getClient = async () => {
    try {
        const client = new Client({
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        ssl: false,});
        await client.connect();
        return client;
    } catch (err) {
        console.log(err.message);
        return null;
    }
}

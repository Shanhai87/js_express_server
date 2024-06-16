import { getClient } from "./get_client.js";

const CREATE_SCHEMA = `CREATE SCHEMA IF NOT EXISTS ${process.env.SCHEMA}`
const CREATE_TABLE = `
        CREATE TABLE IF NOT EXISTS ${process.env.TABLE} (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL CHECK(length(name) >= 3 AND length(name) <= 20),
        age INTEGER NOT NULL CHECK(age > 0 AND age < 150)
        )`

export const createTable = async () => {
    const client = await getClient();
    if (client) {
        try {
            await client.query(CREATE_SCHEMA);
            await client.query(CREATE_TABLE);
            await client.end();
            return true;
        } catch (err) {
            console.log(err.message);
            return false;
        } finally {
            await client.end();
        }
    }
    return null;
}


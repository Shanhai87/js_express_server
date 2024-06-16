import { getClient } from "./get_client.js"

export const saveUserDb = async (user) => {
    const client = await getClient();
    if (client) {
        try {
            const res = await client.query(
                `INSERT INTO ${process.env.TABLE} (name, age)
                VALUES ($1, $2) RETURNING *`, [user.name, user.age]
            );
            return res.rows[0];
        } catch (error) {
            console.error(error.message);
            return false;
        } finally {
            await client.end();
        }
    }
    return null;
};

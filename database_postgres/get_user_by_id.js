import { getClient } from "./get_client.js"

export const getUserByIdDb = async (id) => {
    const client = await getClient();
    if (client) {
        try {
            const res = await client.query(
                `SELECT * FROM ${process.env.TABLE}
                WHERE id = $1`, [id]
            );
            // console.log(res.rows[0])
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

import { getClient } from "./get_client.js"

export const getUsersDb = async () => {
    const client = await getClient();
    if (client) {
        try {
            const res = await client.query(
                `SELECT * FROM ${process.env.TABLE}
                ORDER BY 1`, []
            );
            return res.rows;
        } catch (error) {
            console.error(error.message);
            return false;
        } finally {
            await client.end();
        }
    }
    return null;
};

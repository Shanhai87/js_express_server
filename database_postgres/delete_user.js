import { getClient } from "./get_client.js"

export const deleteUserDb = async (id) => {
    const client = await getClient();
    if (client) {
        try {
            const res = await client.query(
                `DELETE FROM ${process.env.TABLE}
                WHERE id = $1`, [id]
            );
            // console.log(res.rows[0])
            return res;
        } catch (error) {
            console.error(error.message);
            return false;
        } finally {
            await client.end();
        }
    }
    return null;
};

import { getClient } from "./get_client.js"

export const updateUserDb = async (user) => {
    const client = await getClient();
    if (client) {
        try {
            const res = await client.query(
                `UPDATE ${process.env.TABLE}
                SET name = $1, age = $2
                WHERE id = $3`, [user.name, user.age, user.id]
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

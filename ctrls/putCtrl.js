import { pool } from "./postCtrl.js";



export async function updateSoldier(req, res) {
    try {
        const { id } = req.params;
        console.log(typeof +id);
        
        const fields = req.body;
        const fieldsKeys = Object.keys(fields);
        const fieldsValues = Object.values(fields)
        console.log(fieldsKeys);
        
        const whereClauses = fieldsKeys.map(k => `${k} = ?`).join(", ");
        const update = await pool.execute(`update soldiers set ${whereClauses} where id = ? `, [...fieldsValues, +id]);
        return res.status(200).json({ message: "soldier update successfuli" })
    } catch (e) {
        console.log(e);
        return res.status(400).json({ error: "somthing wrong" })
    }
}
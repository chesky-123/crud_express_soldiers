import { getSoldierById } from "./getCtrl.js";
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
        const result = await pool.execute(`update soldiers set ${whereClauses} where id = ? `, [...fieldsValues, +id]);
        const soldier = await pool.execute(`select * from soldiers where id = ?`,[+id]);
        return res.status(200).json(soldier[0]);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: "somthing wrong" })
    }
}